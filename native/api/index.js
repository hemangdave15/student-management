const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const moment = require("moment");

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect("mongodb+srv://dhemang1523:DhyeyKashtiHemangHitarth@flexiproject.kuhaq1a.mongodb.net/flexiprojectdb?retryWrites=true&w=majority&appName=flexiproject", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB", error);
  });

app.listen(port, () => {
  console.log("Server is running on port 8000");
});

const Student = require("./models/student");
const Attendance = require("./models/attendance");

const correctPassword = "temp"

app.post("/login", (req,res)=>{
  try{
    const {password} = req.body
    if(password == correctPassword) return res.sendStatus(200)
    else return res.sendStatus(403)
  }catch(e){
    console.log(e)
    return res.sendStatus(404)
  }
})

//endpoint to register a student
app.post("/addStudent", async (req, res) => {
  try {
    const {
      studentName,
      studentId,
      branch,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeStudent,
      cgpa,
      address,
    } = req.body;

    //create a new Student
    const newStudent = new Student({
      studentName,
      studentId,
      branch,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeStudent,
      cgpa,
      address,
    });

    await newStudent.save();

    res
      .status(201)
      .json({ message: "Student saved successfully", student: newStudent });
  } catch (error) {
    console.log("Error creating student", error);
    res.status(500).json({ message: "Failed to add an student" });
  }
});


app.delete("/removeStudent/:studentId", async(req,res)=>{
  try{
    const {studentId} = req.params
    const deleted = await Student.deleteOne({studentId})
    const deletedAtt = await Attendance.deleteMany({studentId})
    return res.sendStatus(200)
  }catch(e){
    return res.sendStatus(500)
  }
})

//endpoint to fetch all the students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve the students" });
  }
});

app.post("/attendance", async (req, res) => {
  try {
    const { studentId, studentName, date, status } = req.body;

    const existingAttendance = await Attendance.findOne({ studentId, date });

    if (existingAttendance) {
      existingAttendance.status = status;
      await existingAttendance.save();
      res.status(200).json(existingAttendance);
    } else {
      const newAttendance = new Attendance({
        studentId,
        studentName,
        date,
        status,
      });
      await newAttendance.save();
      res.status(200).json(newAttendance);
    }
  } catch (error) {
    res.status(500).json({ message: "Error submitting attendance" });
  }
});

app.get("/attendance", async (req, res) => {
  try {
    const { date } = req.query;

    // Find attendance records for the specified date
    const attendanceData = await Attendance.find({ date: date });

    res.status(200).json(attendanceData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching attendance data" });
  }
});

app.get("/attendance-report-all-students", async (req, res) => {
    try {
      const { month, year } = req.query;
  
      console.log("Query parameters:", month, year);
      // Calculate the start and end dates for the selected month and year
      const startDate = moment(`${year}-${month}-01`, "YYYY-MM-DD")
        .startOf("month")
        .toDate();
      const endDate = moment(startDate).endOf("month").toDate();
  
      // Aggregate attendance data for all students and date range
      const report = await Attendance.aggregate([
        {
          $match: {
            $expr: {
              $and: [
                {
                  $eq: [
                    { $month: { $dateFromString: { dateString: "$date" } } },
                    parseInt(req.query.month),
                  ],
                },
                {
                  $eq: [
                    { $year: { $dateFromString: { dateString: "$date" } } },
                    parseInt(req.query.year),
                  ],
                },
              ],
            },
          },
        },
  
        {
          $group: {
            _id: "$studentId",
            present: {
              $sum: {
                $cond: { if: { $eq: ["$status", "present"] }, then: 1, else: 0 },
              },
            },
            absent: {
              $sum: {
                $cond: { if: { $eq: ["$status", "absent"] }, then: 1, else: 0 },
              },
            },
            halfday: {
              $sum: {
                $cond: { if: { $eq: ["$status", "halfday"] }, then: 1, else: 0 },
              },
            },
            holiday: {
              $sum: {
                $cond: { if: { $eq: ["$status", "holiday"] }, then: 1, else: 0 },
              },
            },
          },
        },
        {
          $lookup: {
            from: "students", // Name of the student collection
            localField: "_id",
            foreignField: "studentId",
            as: "studentDetails",
          },
        },
        {
          $unwind: "$studentDetails", // Unwind the studentDetails array
        },
        {
          $project: {
            _id: 1,
            present: 1,
            absent: 1,
            halfday: 1,
            name: "$studentDetails.studentName",
            branch:"$studentDetails.branch",
            cgpa: "$studentDetails.cgpa",
            studentId: "$studentDetails.studentId",
          },
        },
      ]);
  
      res.status(200).json({ report });
    } catch (error) {
      console.error("Error generating attendance report:", error);
      res.status(500).json({ message: "Error generating the report" });
    }
  });
  
