const router = require("express").Router();
const jobsRouter = require("./jobs");
const employerRouter = require("./employer");

router.use("/api", jobsRouter);
router.use("/api", employerRouter);

module.exports = router;
