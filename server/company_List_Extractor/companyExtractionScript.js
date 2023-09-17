const path = require("path");
// enter the relative path to PDF folder here
const PDF_FOLDER_PATH = path.join(__dirname , "./companies");

// enter the relative path to JSON file where output should be generated
// later the JSON file will be converted to array to handle (manuelly)
const JSON_FILE_PATH = path.join(__dirname , "./companies.JSON");

const {
  getListOfFilesInFolder,
  getCompanyNames
} = require("./pipelineFunctions/utility");

const { writeArrayToJSON } = require("./writeArrayToJSON");

const main = async () => {
  // getting a list of all the files to extract comopanies of
  const pdfFiles = getListOfFilesInFolder (PDF_FOLDER_PATH);

  const allCompanies = []; // this will contain list of all companies

  for (let i = 0 ; i < pdfFiles.length ; i++) {

    const companiesTemp = await getCompanyNames (pdfFiles[i]);
    companiesTemp.forEach (companyName => {
      allCompanies.push (companyName);
    })

  }

  // writing to a JSON file
  writeArrayToJSON (allCompanies , JSON_FILE_PATH);
};


main();