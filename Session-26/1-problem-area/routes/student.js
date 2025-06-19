const router = require("express").Router();
const { Student, Mentor } = require("../models");

router.get("/", (req, res) => {
  res.send("Student route is working");
});

router.post("/add", async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.body.mentorId);

    const newData = {
      name: req.body.name,
      age: req.body.age,
      contact_no: req.body.contact_no,
      department: req.body.department,
      mentor,
    };

    const student = await Student.create(newData);
    await Mentor.findByIdAndUpdate(req.body.mentorId, {
      $push: { students: student },
    });

    res.json({ msg: "Student created successfully" });
  } catch (error) {
    res.json({ msg: error.message });
  }
});

module.exports = router;
