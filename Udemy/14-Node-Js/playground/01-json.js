const fs = require("fs");

const dataBuffer = fs.readFileSync("01-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = "Youssef";
data.age = "20";

fs.writeFileSync("01-json.json", JSON.stringify(data));
