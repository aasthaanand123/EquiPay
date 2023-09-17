const fs = require("fs");

const writeArrayToJSON = (allCompanies, JsonFilePath) => {
  try {
    const jsonStr = JSON.stringify(allCompanies, null, 2);
    fs.writeFileSync(JsonFilePath, jsonStr);

    console.log(
      "[INFO] File has been successfully generated at: ",
      JsonFilePath
    );
  } catch (err) {
    throw Error("There was some problem writing to the file");
  }
};

module.exports = {
  writeArrayToJSON,
};
