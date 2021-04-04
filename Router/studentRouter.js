const router = require("express").Router();
const studentController = require("../Controllers/studentController");

router.get("/", studentController.getAllStudent);
router.get("/:id", studentController.getStudent);
router.post("/", studentController.createStudent);
router.patch("/", studentController.getAllStudent);
router.delete("/:id", studentController.deleteStudent);

module.exports = router;
