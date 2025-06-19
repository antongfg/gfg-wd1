const router = require("express").Router();
const mentorRoute = require("./mentor");
const studentRoute = require("./student");

router.use("/mentor", mentorRoute);
router.use("/student", studentRoute);

module.exports = router;
