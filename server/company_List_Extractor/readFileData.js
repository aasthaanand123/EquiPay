const fs = require("fs");
const pdf = require("pdf-parse");

const readPdfFile = async (filePath) => {
  return (await pdf(fs.readFileSync(filePath))).text
    .split("\n")
    .map((data) => {
      return data.trim();
    })
    .join(" ");
};

module.exports = {
    readPdfFile
};