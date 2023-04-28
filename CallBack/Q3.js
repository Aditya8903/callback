function ageInDays(obj,callback){
    const fullName = obj.fname +" "+ obj.lname;

    const ageInday = obj.age*365;

    callback(fullName,ageInday);
}

function logResult(fullName,ageInday){
    console.log(`The person's full name is ${fullName}, and their ahe in days is ${ageInday}`);
}

person = {
    fname:"Aditya",
    lname:"Gupta",
    age:20
};

ageInDays(person,logResult)