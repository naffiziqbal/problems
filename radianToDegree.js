function radianToDegree(radian){

    let degree = radian * 57.296;
    // if(isNaN(degree) ){
    //     console.log("Not  A Number")
    //     }
    if(typeof radian !== "number"){
        console.log("Not A Number")
    }
    return degree

}


radianToDegree(5)
