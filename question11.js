//11. A cloth showroom has announced the following festival discounts on the purchase of items, based on the total cost of the items purchased:


/*
 Total cost         Discount(in percentage)
 Less than 2000       5%
 2001 to 5000         25%
 5001 to 10000        35%
 Above 10000          50%
 Write a programm to input the total cost and compute and display the amount
 to be paid by the customer after availing the discount.
*/

function main()
{
    let tc,d,ap;
    document.write("Enter the total cost of the items:");
    tc=prompt('Enter cost');
    if(tc<=2000)
    d=5/100*tc;
    else if(tc>=2001 && tc<=5000)
    d=25/100*tc
    else if(tc>=5001 && tc<=10000)
    d=35/100*tc
    else
    d=50/100*tc;
    ap=tc-d;
    document.write("Amount Payable:"+ap);
}


main()