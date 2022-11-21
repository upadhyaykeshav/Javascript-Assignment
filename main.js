/*20. Write a program to print the first 15 numbers of the Pell series. 
Pell series is such a series which starts from 1 and 2 , and subsequent numbers is the 
sum of twice the previous number and the number previous to the previous number. 
Pell series: 1, 2, 5, 12, 29, 70, 169, 408, 985, 2378, 5741, 1386.*/

 function main()
 {
     let a=1;
     let b=0;
     let c;
     let n= prompt("Enter length of series:");
     for(let i=1;i<=n;i++)
        {
         c=a+(2*b);
         document.write("pell series is:"+c,"<br>");
         a=b;
         b=c;
        }
}
 main()