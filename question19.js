/*
19. Write a program to find the sum of 1st 10 numbers of Lucas series i.e. 2,1,3,4,7,11,18,…. Lucas series is
 such a series which starting from 2 and 1, and subsequent numbers are the sum of the previous two numbers.
*/

 function main(){
     let a=3;
     let b= -1;
     let c;
     let n=parseInt(prompt("Type 10 in a box:"))
 for(let i=1;i<=n;i++){
     c=a+b;
     document.write("lucas series is:"+c,"<br>")
     a=b;
     b=c;
 }
 }
 main();