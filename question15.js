
//15).  Write a program to input an integer and check whether it is a prime number or not


 function isprime()
     {
         let n=prompt("enter any no.")
         let count=0
         for (i=2;i<=n-1;i++)
      {
       if(n%i==0)
        {
     count++
     break;
        }
      }
      if(count>0){
     document.write("not a prime number ",n)
      }
      else{
     document.write("yes it is a prime number ",n)
          }
     }
     isprime();