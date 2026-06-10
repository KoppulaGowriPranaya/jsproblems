// 1 .Write a program to check if a number is positive, negative, or zero using if–else.
// n=Number(prompt("enter the number"))
// if(n>0){
//     console.log(`${n} is positive`)
//     }
// else if(n<0){
//     console.log(`${n} is negative`)
//     }
// else{
//     console.log(`${n} is zero`)
//     }


//2. Use the ternary operator to find the maximum of two numbers.
// x=Number(prompt("x:"))
// y=Number(prompt("y:"))
// r=(x>y)?x:y
// console.log("maximum is:",r)


//3.Check if a number is even or odd using the modulus operator.
// n=Number(prompt("n:"))
// if(n%2==0){
//     console.log("even")
//     }
// else{
//     console.log("odd")
//     }


//4.Compare two numbers and print whether they are equal or not equal using == and !=.
// x=Number(prompt("x:"))
// y=Number(prompt("y:"))
// if(x==y){
//     console.log(`the values ${x} and ${y} are equal`)
//     }
// else{
//     console.log(`the values ${x} and ${y} are  not equal`)
//     }


//5.Determine if a number is divisible by 5 and 11 using logical operators.
// n=Number(prompt("n:"))
// if((n%5==0) && (n%11==0)){
//     console.log(`${n} is divisible by both 5 and 11`)
//     }
// else{
//     console.log(`${n} is  not divisible by both 5 and 11`)
//     }



//6.Use && and || to check if a number lies between 10 and 50.
// n=Number(prompt("n:"))
// if(n>10 && n<50){
//     console.log("the number is valid")
//     }
// else{
//     console.log("the number is not valid")
//     }


//7.Write a program to check if a character is a vowel or consonant using if–else ladder.
// c=prompt("character:")
// if(c=='A'||c=='E'||c=='I'||c=='O'||c=='U'){
//     console.log("vowel");
// }
// else if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'){
//     console.log("vowel");
// }
// else{
//     console.log("consonant");
// }


//8.Use the assignment operators (+=, -=, *=, /=) to update a variable and print results.
// n=Number(prompt("n:"))
// n+=10
// console.log(n);
// n-=4
// console.log(n);
// n*=4
// console.log(n);
// n/=2
// console.log(n);


//9.leap year
// y=Number(prompt("year:"))
// if((y%4==0) || ((y%400)==0 && (y%100)!=0)){
//     console.log("leap");
// }
// else{
//     console.log("not leap")
// } 


//10.===
// n=Number(prompt("n:"))
// s=prompt("s:")
// if(n===s){
//     console.log("both data types are equals")
// }
// else{
//     console.log("both data types are  not equals")
// }


//11.largest of 3 numbers
// a=Number(prompt("a:"))
// b=Number(prompt("b:"))
// c=Number(prompt("c:"))
// if(a>b && a>c){
//     console.log("a is greater");  
// }
// else{
//     if(b>c && b>a){
//     console.log("b is greater");  
//     }
//     else{
//         console.log(" c is greater");
//     }
// }


//12.both 3 and 7
// n=Number(prompt("n:"))
// if((n%3==0)&&(n%7==0)){
//     console.log("divisible by both 3 and 7");   
// }
// else{
//     console.log("not divisible by 3 and 7");
// }



//14.within range
// n=Number(prompt("n:"))
// if(n>=100 && n<=200){
//     console.log("with in the range")
// }
// else{
//     console.log("not in the range")
// }



//15 relational operators
//  a=Number(prompt("a:"))
//  b=Number(prompt("b:"))
//  if(a>b){
//     console.log("a is big");
//    }
//  else{
//     console.log(" b is big")
//     }



//16.positive even .positive odd,negative
// a=Number(prompt("a:"))
// if(a>0){
//     if (a%2==0){
//         console.log("a is positive-even");
//     }
//     else{
//         console.log("positive and odd");
//     }
// }
// else{
//     console.log("negative");
// }


//17.Use the ternary operator to assign grades based on marks.
// n=Number(prompt("n:"))
// r=(n>=90)?'A':(n>=70)?'B':(n>=50)?'C':(n>=30)?'D':'F';
// console.log(r);

//18



//19 absolute value
// n=Number(prompt("n:"))
// if (n>0){
//     console.log("n")
// }
// else if(n<0){
//     console.log(-1*n)
// }
// else{
//     console.log(0)
// }


//20.Use logical operators to verify if a number is not between 10 and 20.
// n=Number(prompt("n:"))
// if(n<=10 && n>=20){
//     console.log("number is not between 10 and 20");   
// }
// else{
//     console.log("number is  between 10 and 20"); 
// }


//21.Write a program to check if three sides can form a triangle using relational operators.
// a=Number(prompt("a:"))
// b=Number(prompt("b:"))
// c=Number(prompt("c:"))
// if(a+b>c && b+c>a && a+c>b){
// console.log("valid triangle");
// }
// else{
//     console.log("not a valid triangle");
// }


//22.Use nested if–else to determine if a number is positive, negative, or zero, and also check if it’s even or odd.
// a=Number(prompt("a:"))
// if(a>0){
//     if(a%2==0){
//         console.log("positive-even");
//     }
//     else{
//         console.log("positive-odd")
//     }
// }
// else if(a<0){
//     if(a%2==0){
//         console.log("negative-even"); 
//     }
//     else{
//         console.log("negative-odd")
//     }
// }
// else{
//     console.log("zero");
// }


//23.Create a grading system using else-if ladder: A, B, C, D, F based on score ranges.
// a=Number(prompt("a:"))
// if(a>80 && a<=100){
//     console.log("A");
// }
// else if(a>70 && a<=80){
//     console.log("B");
// }
// else if(a>60 && a<=70){
//     console.log("C");
// }
// else if(a>50 && a<=60){
//     console.log("D");
// }
// else{
//     console.log("F");  
// }


//24.Use logical operators to check if a number is prime or composite (without loops, assume small fixed values).


//25.Write a program to compare two expressions and print which one has higher precedence.
// a=10+5*2
// b=(10+5)*2
// if(a==b){
//     console.log("both are equal");
// }
// else if(a>b){
//     console.log("* has highest preference");
// }
// else{
//     console.log("() has highest preference")
// }


//26.Use ! (NOT operator) to invert a boolean condition and explain the output.
// p=true
// console.log(!p)


//27.Write a program to check if a number is multiple of 4 but not of 8.
// a=Number(prompt("a:"))
// if(a%4==0 && a%8!=0){
//     console.log("number is multiple of 4 but not of 8");
// }
// else{
//     console.log("other number multiples");
// }


//28.Use nested if–else to determine if a number is divisible by both 2 and 5, only 2, only 5, or neither.
// a=Number(prompt("a:"))
// if(n%2==0){
//     if(n%5==0){
//         console.log("both 2 and 5");
//     } 
//     else{
//         console.log("only by 2");
//     }
// } 
// else {
//     if(n%5==0){
//         console.log("only by 5");
//     } 
//     else{
//         console.log("neither");
//     }
// }


//29.Write a program to check if a number is within 1–100, 101–500, or above 500 using else-if ladder.
// a=Number(prompt("a:"))
// if(a >= 1 && a <= 100){
//     console.log("number in range 1–100");
// }
// else if(a >= 101 && a <= 500){
//     console.log("number in range 101–500");
// }
// else{
//     console.log("above 500");
// }



//30.Use arithmetic and logical operators to verify if (a + b) > (c * d) and print the result.
// a=Number(prompt("a:"))
// b=Number(prompt("b:"))
// c=Number(prompt("c:"))
// d=Number(prompt("d:"))
// console.log((a + b) > (c * d));


//31.Write a program using if–else ladder to simulate a simple calculator (only +, -, *, /, %).
// a=Number(prompt("a:"))
// b=Number(prompt("b:"))
// g=prompt("operator:")
// if(g=="+"){
//     console.log(`sum of ${a} and ${b} is`,a+b);
// }
// else if(g=="-"){
//     console.log(`subtraction of ${a} and ${b} is`,a-b);
// }
// else if(g=="*"){
//     console.log(`mul of ${a} and ${b} is`,a*b);
// }
// else if(g=="/"){
//     console.log(`quotient of ${a} and ${b} is`,a/b);
// }
// else if(g=="%") {
//    console.log(`rem of ${a} and ${b} is`,a%b);
// }
// else {
//     console.log("not an operator");
// }


//32.Use nested if–else to determine if a number is perfect square or not (without Math functions).
// n=Number(prompt("n:"))
// if (n==1||n==4||n==9||n==16||n==25) {
//     console.log("Perfect Square");
//     } 
// else {
//     console.log("Not a Perfect Square");
//     }


//33. Create a program that checks if a number is divisible by 2, 3, and 5 simultaneously, and prints a custom message.
// n=Number(prompt("n:"))
// if (n%2==0&&n%3==0 &&n%5==0) {
//     console.log("divisible by 2, 3, and 5.");
// } else {
//     console.log("not divisible by 2, 3, and 5 ");
// }


//34.Use logical operators to validate if a number satisfies (num > 50 && num < 100) || (num > 200 && num < 300).
// n=Number(prompt("n:"))
// if ((n>50 && n<100) || (n>200 && n<300)) {
//     console.log("satisfies-true");
// } else {
//     console.log("Not satisfy-False")
// }


//35.Write a program to check if a number is greater than 100, less than 0, or between 0 and 100, and print messages accordingly.
// n=Number(prompt("n:"));
// if(n>100){
//     console.log(`The ${n} is greater than 100.`);
// }
// else if (num < 0) {
//     console.log(`The ${n} is less than 0.`);
// }
// else {
//     console.log(`The ${n} is between 0 and 100.`);
// }


//36.Use nested if–else to simulate a traffic light system based on color input (red, yellow, green).
// c=prompt("color:")
// if(c=="red") {
//     console.log("STOP");
// }
// else if (c== "yellow") {
//     console.log("READY");
//     }
// else {
//     if (c== "green") {
//          console.log("GO");
//     }
// }


//37.Write a program to check if a number is divisible by both 2 and 3, but not by 5.
// n=Number(prompt("n:"));
// if(n%2==0 && n%3==0 && n%5!=0) {
//     console.log(" divisible by both 2 and 3, but not by 5.");
// } 
// else {
//     console.log("invalid condition.");
// }


//38.Use logical operators to verify if (a > b && b > c) or (a < b && b < c) and print “ascending” or “descending”.
// a=Number(prompt("Enter a Number"))
// b=Number(prompt("Enter b number"))
// c=Number(prompt("enter c number"))
// if(a > b && b > c){
//     console.log("Decending Order")
// }
// else if(a < b && b < c){
//      console.log("Ascending Order")
// }


//39.Write a program using if–else ladder to determine salary hike percentage based on performance rating (1–5).
// n=Number(prompt("n:"));
// if (n==5) {
//     console.log("Salary Hike: 100%");
// }
// else if (n==4) {
//     console.log("Salary Hike: 70%");
// }
// else if (n==3) {
//     console.log("Salary Hike: 40%");
// }
// else if (n==2) {
//     console.log("Salary Hike: 20%");
// }
// else if (n==1) {
//     console.log("Salary Hike: 0%");
// }
// else {
//     console.log("Invalid");
// }


//40.Create a program that uses multiple operators to check if a number is within range, even, positive, and divisible by 3 — all in one conditional statement.
// n=Number(prompt("n:"));
// if (n>=1 && n<=1000 && n%2 == 0 && n>0 && n%3 == 0) {
//     console.log("The number is within range, even, positive, and divisible by 3.");
// } else {
//     console.log("The number does not satisfy all the conditions.");
// }