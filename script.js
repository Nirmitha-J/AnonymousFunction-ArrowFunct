// create a request variable from XMLHttpRequest
var request = new XMLHttpRequest();
// make a new connection (flag = true: if any problem in data being called show affect the rest of the procedure)
// line is non-blocking (flag = true)
request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
//send a request
request.send();
// load the data (onload is a event)
request.onload = function () {
    // var countryData = JSON.parse(request.response); or below
    var countryData = JSON.parse(this.response);
    console.log(countryData);
    // 1) Print odd numbers in an array
    let arr = [1,100,33,44,5,66,7,8];
    var odd = array => {
        for(i of array){
            if(i%2!==0) {
                console.log(`${i} is odd`);
            }
        }
    }
    odd(arr);

    // 2) Convert all the strings to title caps in a string array 
    let string = "i love my india";
    let str = [];
    let titleCaps = stringToConvert => {
        for(i=0; i<stringToConvert.length; i++){
           str[i] = stringToConvert[i][0].toUpperCase() + stringToConvert[i].slice(1);
        }
        console.log(str.join(" "));
    }
    titleCaps(string.split(' '));

    // 3) Sum of all numbers in an array
    let sumArr = [1,100,33,44,5,66,7,8];
    let sum = 0;
    var sumFunc = array => {
        for(i of array){
            sum = sum + i;
        }
        return sum;
    }
    console.log("sum of array is " +sumFunc(sumArr));

    // 4) Return all the prime numbers in an array 
    var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

    numArray = numArray.filter(number => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    
    console.log("all prime numbers " +numArray);

    //5) Return all the palindromes in an array 
    const array = ['carecar', 1344, 12321, 'did', 'cannot'];
    const isPalindrome = el => {
       const str = String(el);
       let i = 0;
       let j = str.length - 1;
       while(i < j) {
          if(str[i] === str[j]) {
             i++;
             j--;
          }
          else {
             return false;
          }
       }
       return true;
    };
    const findPalindrome = arrPalin => {
       return arrPalin.filter(el => isPalindrome(el));
    };
    console.log("palidromes are  " + findPalindrome(array));

    // 6) Return median of two sorted arrays of same size
    let nums1 = [1, 3];
    let nums2 = [2, 4];
    const findMedianSortedArr = (nums1, nums2) => {
        //compare method
        let compare = (i,j) => {
            return i-j;
        }
        let arr = nums1.concat(nums2).sort(compare);
        if(arr.length%2==0){
            return (arr[arr.length/2-1] + arr[arr.length/2])/2;
        }
        return arr[Math.floor(arr.length/2)];
    }
    console.log("median of two sorted array " +findMedianSortedArr(nums1, nums2));

    // 7) Remove duplicates from an array
    let arrWithDup = [1,1,44,55,44,6,7];
    let noDups = arrWithDup.filter((item,pos,a) => {
        return a.indexOf(item) === pos;
    });
    console.log("array of no Duplicates "+noDups);

    // 8) Rotate an array by k times and return the rotated array
    let rotateArr = (array, stepsToShift) => {

        for (var i = 0; i < stepsToShift; i++) {
            array.unshift(array.pop());
        }
    
        return array;
    }
    console.log("rotated array "+rotateArr([1,1,44,55,44,6,7], 2));

}
