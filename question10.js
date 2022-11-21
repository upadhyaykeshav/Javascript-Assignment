//10. Write a program to accept a mark obtained by a student in computer science
// and print the grades accordingly:

  /*
   Marks        Grade
   Above 90       A
   70 to 89       B
   50 to 69       C
   below 50       D
  */
 
 let c=85;

 if(c>=90)
 {
    console.log("grade=A")
 }
 else if(c>=70 && c<90)
 {
    console.log("Grade=B")
 }
 else if(c>=50 && c<70 )
 {
    console.log("Grade=C")
 }
 else
 {
    console.log("Grade=D")
 }