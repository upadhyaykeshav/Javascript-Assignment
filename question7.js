 //7. Write a program to input the Principal, Rate and Time and calculate the Simple Interest.
 

 function main()
 {
    let p,r,t,si;
    console.log("Enter the principal,rate and time:");
    p=prompt('Enter the principal');
    r=prompt('Enter the Rate');
    t=prompt('Enter the Duration');
    si=(p*r*t)/100;
    document.write("simple interest="+si);
 }
 main()

 //output is show in browser