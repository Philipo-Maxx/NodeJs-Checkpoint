//importing the File System Module
import fs from "fs";

//Creating File
fs.writeFile("welcome.txt", "Hello Node", (err, data) => {
  if (err) console.log(err);
});

//Reading File
fs.readFile("welcome.txt", { encoding: "utf8" }, (err, data) => {
  if (err) console.log(err);
  console.log(data);
});
