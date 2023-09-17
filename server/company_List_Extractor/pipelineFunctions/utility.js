const path = require("path");
const fs = require("fs");

const { readPdfFile } = require("../readFileData");

const getListOfFilesInFolder = (FOLDER_PATH) => {
  if (!fs.lstatSync(FOLDER_PATH).isDirectory()) {
    throw Error(`${FOLDER_PATH} is NOT a directory`);
  }

  const files = [];

  getPdfFiles(FOLDER_PATH, files);

  return files;
};

const getPdfFiles = (dirPath, files) => {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        files = getPdfFiles(path.join(dirPath, entry.name), files);
      } else if (path.extname(entry.name).toLowerCase() === ".pdf") {
        files.push(path.join(dirPath, entry.name));
      }
    }
  } catch (error) {
    console.error("Error reading directory", error);
  }
};

const removeDateStrings = (dataString) => {
  const dateRegex = /(0?[1-9]|1[0-2])\/(0?[1-9]|[12][0-9]|3[01])\/(19|20)\d\d/g;
  return dataString.replaceAll(dateRegex, " ");
};

const removeCINStrings = (dataString) => {
  const CINRegex = /[UL]\d{5}[A-Z]{2}\d{4}[A-Z]{3}\d{6}/g;
  return dataString.replaceAll(CINRegex, " ");
};

const getStringsBetweenConsecutiveNumbers = (str) => {
  const matchedStrings = [];

  const regex = /(\d+)\s*(.+?)\s*(\d+)/g;
  let match;

  while ((match = regex.exec(str)) !== null) {
    const [_, start, middle, end] = match;
    if (parseInt(end) === parseInt(start) + 1) {
      matchedStrings.push(middle);
    }
  }

  return matchedStrings;
};

const getCompanyNames = async (filePath) => {
  const dataString = await readPdfFile(filePath);
  const companyList = getStringsBetweenConsecutiveNumbers(
    removeCINStrings(removeDateStrings(dataString))
  );

  return companyList;
};

module.exports = {
  getListOfFilesInFolder,
  getCompanyNames
};
