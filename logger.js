// logger.js
const fs = require("fs");
const path = "./logs.txt";

function log(message, metadata = {}) {
  const entry = {
    timestamp: new Date().toISOString(),
    message,
    ...metadata
  };

  const text = JSON.stringify(entry) + "\n";

  try {
    fs.appendFileSync(path, text);
  } catch (err) {
    console.error("Erro ao gravar log:", err.message);
  }

  console.log(text.trim());
}

module.exports = { log };
