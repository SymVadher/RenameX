const fs = require('fs');
const path = require('path');
const replacewith = "jhon"
const replaceThis = "sym"
const preview = false
const folder = __dirname
try {
    fs.readdir(".", (err, data)=>{
        for (let index = 0; index < data.length; index++){
            const item = data[index];
            let oldFile = path.join(folder, item)
            let newFile = path.join(folder, item.replaceAll(replaceThis, replacewith))
            if (!preview){

                fs.rename(oldFile, newFile, ()=>{
                    console.log("Rename Success")
                })  
            }
            else {
                if ("data/" + item !== newFile)console.log("data/" + item + "will be renamed to" + newFile)
            }
        }
    });
} catch (err) {
  console.error(err);
}
