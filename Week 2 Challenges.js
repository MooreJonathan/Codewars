//JS Codewars

/*********************
Challenege 1 */
https://www.codewars.com/kata/5720a1cb65a504fdff0003e2/train/javascript
function differenceInAges(ages){
    var min = Math.min.apply(Math, ages);
    var max = Math.max.apply(Math, ages);
    var diff = max - min;
    var results = new Array(min, max, diff)
    return results
  }

/*********************
Challenege 2 */
https://www.codewars.com/kata/59a9919107157a45220000e1/train/javascript
const findAll = (array, n) => {
    var index = [], i = -1; 
     while ((i = array.indexOf(n, i+1)) != -1){ 
         index.push(i); 
     } 
     return index; 
 }