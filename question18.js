  /*Q.18)Write a program to input an integer and find its factorial. Factorial of a 
         number is the product of all natural numbers till that number. For 
         example factorial of 5 is 120 since 1×2×3×4×5=120.*/

 let x=parseInt(prompt('Enter Natural Number'))
 function facto(){
     let sum = 1;
     for(
         let i = 1; i <= x; i++){
             sum=i*sum;
         }
     return sum;
 }
 result= facto();
 document.write("factorial no is :" +result)