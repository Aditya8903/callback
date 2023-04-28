function doubleArr(arr,callback){
    const doubledArray = arr.map((ele)=>{return callback(ele)});
    return doubledArray;
}

function callback(num){
    return num*2;
}

const arr = [1,2,3,4];

console.log(doubleArr(arr,callback));