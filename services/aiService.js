async function callAI(input) {
    // Dummy AI (we replace later with real AI)
    return "AI says: " + input;
}

async function selfImprove(prompt) {
    // Version 1
    let v1 = await callAI(prompt);

    // Feedback 1
    let feedback1 = await callAI("Evaluate this: " + v1);

    // Version 2
    let v2 = await callAI("Improve this: " + v1 + " using " + feedback1);

    // Feedback 2
    let feedback2 = await callAI("Evaluate this: " + v2);

    // Version 3
    let v3 = await callAI("Improve this: " + v2 + " using " + feedback2);

    return {
        v1,
        v2,
        v3
    };
}

module.exports = { selfImprove };