const fs = require('fs');
const path = require('node:path');

const args = process.argv




const source = args[2]
const target = args[3]

const readStream = fs.createReadStream(source);



const extentions = [".txt",".png"]

let fileToBeCoppied = [];

fs.readdir(source, (e,files) => {

    if(e){
        console.log("Error reading the specific file");
        console.log(e)
        process.exit();
    }


    for(let file of files){
        let ext = path.extname(file)
        if(extentions.includes(ext)){
            console.log(file)
            
            fs.copyFile(`./${source}/${file}` , `./${target}/${file}`, (err) =>{
                console.log(err)
                
                process.exit();
            })
            
        }
    }




   
        
})