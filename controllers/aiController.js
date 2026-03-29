const { selfImprove } = require("../services/aiService");

exports.improveResponse = async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: "Prompt is required" });
        }

        const result = await selfImprove(prompt);

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
};