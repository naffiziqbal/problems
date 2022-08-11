function radianToDegree(radian){

    let degree = radian * 57.296;
    degree = degree.toFixed(2);
    degree = parseFloat(degree)
    if(typeof radian !== "number"){
        return `Not A Number`
    }
    return degree

}
