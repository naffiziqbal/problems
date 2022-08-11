/* function isJavaScriptFile(files){
    let file = files;
    let parts = file.split(".");
    let part = parts[parts.length -1];    
    if(part === "js"){
        return true
    }
    return false
}
*/

function isJavaScriptFile(files){
    let file = files;
    file = file.endsWith("js");
    if(file === true){
        console.log(file) 
        return true
    }else{

        return false
    }
}

isJavaScriptFile("html.ks")
