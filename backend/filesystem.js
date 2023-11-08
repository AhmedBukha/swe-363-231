const fs = require('fs');
const path = require('node:path');

const args = process.argv




const source = args[2]
const target = args[3]

const readStream = fs.createReadStream(source);

// Create a writable stream to the destination file
const writeStream = fs.createWriteStream(target);

const extentions = [".txt",".png"]

let fileToBeCoppied = [];

fs.readdir(source, (e,files) => {

    if(e){
        console.log("Error reading the specific file");
        process.exit();
    }


    for(let file of files){
        let ext = path.extname(file)
        if(extentions.includes(ext)){
            fileToBeCoppied.push(file);
        }
    }



    console.log(files);
        
})