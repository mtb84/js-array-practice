// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
    return array.map(function(line, index){
      return `${index + 1}: ${line}`
    });
  }

// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

function arr(n) {
    var newArray = [];
    for (var i = 0; i < n; i++){
        newArray.push[i];
    }
    return newArray;
}

// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function FlyBy (lamps, drone) {
    let lampsOn = '';
    for (let i; i < drone.length; i++) {
        lampsOn += 'o'
    }
    const lampsOff = lamps.slioce(lampsOn.length, lamps.length);
    return lampsOn + lampsOff;
};


// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

    function getAve(grades) {
        let sum = 0;
        for (i = 0; i < grades.length; i++) {
            sum += grades[i];
        };
        let avg = Math.floor (sum / grades.length);
        return avg;
    }

// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043

const rev = function(a) {
    let b = [];
    for (let i = a.length; i >= 0; i--) {
        b.push(a[i]);
    }
    return b;
}