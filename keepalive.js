const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        status: 'online',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        memory: process.memoryUsage()
    });
});

// Start the keep-alive server
app.listen(port, () => {
    console.log(`Keep-alive server running on port ${port}`);
});

module.exports = app;
