//Terminal tool to convert csv to file and save in specific file
//Uses fs csv and prompt-sync modules
var path= "../"
console.log(path+"fs")
var fs = require('fs'); 
var parse = require('csv-parse');
const prompt = require("prompt-sync")();

console.log("Input assumes csv file in same dir. No need to enter extension.")
const input = prompt("filename to parse: ");

var csvData=[];
fs.createReadStream(`./${input}.csv`)
    .pipe(parse({delimiter: '*'}))
    .on('data', function(csvrow) {
        // console.log(csvrow);
        // csvrow.toString().replace('"','')
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something with csvData
      console.log(csvData.length);
      fs.writeFile(`./${input}.js`, JSON.stringify(csvData), function(err) {
        if(err) {
              console.log(err);
        } 
        else {
          console.log(`Output saved to /${input}.js.`);
        }
      }); 
    });
