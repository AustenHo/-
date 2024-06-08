// (1) 提示使用者輸入一個年份，判斷這個年份是否為閏年
let year = prompt("請輸入一個年份:");
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
displayResult(1, isLeapYear ? `${year} 是閏年` : `${year} 不是閏年`);

// (2) 提示使用者輸入一個月份，然後輸出這個月份所對應的天數
let month = prompt("請輸入一個月份 (1-12):");
let days;
switch (parseInt(month)) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = "31天";
        break;
    case 4: case 6: case 9: case 11:
        days = "30天";
        break;
    case 2:
        days = isLeapYear ? "29天" : "28天";
        break;
    default:
        days = "無效的月份";
}
displayResult(2, `${month} 月有 ${days}`);

// (3) 提示使用者輸入一個字串，然後使用for迴圈將字串反轉
let inputString = prompt("請輸入一個字串:");
let reversedString = "";
for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
}
displayResult(3, `反轉後的字串: ${reversedString}`);

// (4) 使用for迴圈印出由"*"組成的倒直角三角形
let triangleHeight = 5; // 可以改變這個值來調整三角形的高度
let triangle = "";
for (let i = triangleHeight; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        triangle += "*";
    }
    triangle += "\n";
}
console.log(triangle);
displayResult(4, `請查看控制台的輸出`);

// (5) 使用 while 迴圈判斷一個數是否為質數
let num = prompt("請輸入一個正整數:");
let isPrime = num > 1;
let i = 2;
while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
    i++;
}
displayResult(5, isPrime ? `${num} 是質數` : `${num} 不是質數`);

// (6) 使用 while 迴圈印出由"*"組成的倒直角三角形
triangle = "";
let rows = triangleHeight;
while (rows > 0) {
    let stars = rows;
    while (stars > 0) {
        triangle += "*";
        stars--;
    }
    triangle += "\n";
    rows--;
}
console.log(triangle);
displayResult(6, `請查看控制台的輸出`);

// (7) 使用 do...while 迴圈計算 n！的值（即n 的階乘）
let n = prompt("請輸入一個正整數:");
let factorial = 1;
let counter = n;
do {
    factorial *= counter;
    counter--;
} while (counter > 0);
displayResult(7, `${n}! = ${factorial}`);

// (8) 使用 for...of 迴圈找出陣列中的最大值
let array1 = [1, 5, 2, 7, 3];
let max = array1[0];
for (let value of array1) {
    if (value > max) {
        max = value;
    }
}
displayResult(8, `陣列中的最大值: ${max}`);

// (9) 使用 for...of 迴圈計算陣列中所有偶數元素的總和
let array2 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenSum = 0;
for (let value of array2) {
    if (value % 2 === 0) {
        evenSum += value;
    }
}
displayResult(9, `陣列中所有偶數元素的總和: ${evenSum}`);

// (10) 使用 for...in 迴圈計算物件中屬性值的總和
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let objSum = 0;
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        objSum += obj[key];
    }
}
displayResult(10, `物件中屬性值的總和: ${objSum}`);