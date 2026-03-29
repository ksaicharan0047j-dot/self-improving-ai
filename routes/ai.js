const express = require("express");
const router = express.Router();

const { improveResponse } = require("../controllers/aiController");

// POST /api/ai/improve
router.post("/improve", improveResponse);

module.exports = router;