// (1) 寫一個遞迴函式用來計算費氏數列中的第n項
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
let n = prompt("請輸入費氏數列中的第n項:");
let fibonacciResult = fibonacci(parseInt(n));
displayResult(1, `費氏數列中的第 ${n} 項是 ${fibonacciResult}`);

// (2) 寫一個遞迴函式用來計算兩個正整數的最大公因數（GCD）
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}
let a = prompt("請輸入第一個正整數:");
let b = prompt("請輸入第二個正整數:");
let gcdResult = gcd(parseInt(a), parseInt(b));
displayResult(2, `最大公因數 (GCD) 是 ${gcdResult}`);