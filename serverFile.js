const path = require('path');
const mimeType={
    ".html":"text/html",
    ".css":"text/css",
    ".js":"application/javascript",
    ".json":"application/json",
    ".ico":"image/x-icon"
}
const fileUtils = {
    getFilePath : (url)=>{
        let filePath;
        if(url==="/"){
            filePath = "./public/main.html";
        }
        else{
            filePath = "./public" + url;
        }
        return filePath;
    },
    getFileExtension : (filePath)=>{
        let ext = path.extname(filePath);
        return ext.toLowerCase();
    },
    getContentType : (ext)=>{
        if(mimeType.hasOwnProperty(ext)){
            return mimeType[ext];
        }else{
            return "text/plain";
        }
    }
}
module.exports=fileUtils;