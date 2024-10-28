const fs = require("fs");

function logRequestResponse (fileName) {
    return (req,res,next) => {
        logEntry = `${req.method} and at ${req.path} at ${Date.now()} "\n"`
        fs.appendFile(fileName, logEntry, (err,data) => {
            next();
        });
    }
}

module.exports = {logRequestResponse};