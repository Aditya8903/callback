function manipulateString(str,logString){
    const upperCase = str.toUpperCase();

    logString(upperCase);
}

function logString(str){
    console.log(`The manipulated string is : ${str}`);
}

manipulateString("aditya",logString);