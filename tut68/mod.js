// console.log('this is the module file');

function average(arr){
  let  sum=0;

    arr.forEach(element => {
        sum +=element; 
        
    });

    return sum/arr.length;
}

// module.exports = average;

module.exports = {

    avg:average,
    name:"amanullah",
    repo:"GetHub"
}

module.exports.nice = 'amani';