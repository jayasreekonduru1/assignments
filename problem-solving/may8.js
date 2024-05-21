// 1) input: Enter no of rows: 4
// output:
// 1 2 3 4
// 2 3 4
// 3 4
// 4

rows=+prompt("Enter no of rows");
for(i=0;i<rows;i++){
    s=""
    for(j=1;j<rows-i+1;j++){
        c=i+j;
        s=s+c+" "
    }
    console.log(s)
}
// 2) input: Enter no of rows: 4
// 4 3 2 1
// 4 3 2
// 4 3 
// 4
// rows=+prompt("Enter no of rows");
// for(i=0;i<=rows;i++){
//     s=""
//     for(j=rows;j>i;j--){
    
//         s=s+j+" "
//     }
//     console.log(s)
// }

// 3) input: Enter no of rows: 4
// output

// 1 1
// 1 2 3
// 1 2 3 6
// 1 2 3 4 10
// rows=+prompt("Enter no of rows");
// for(i=1;i<=rows;i++){
//     s=""
//     val=0
//     for(j=1;j<=i;j++){
//         s=s+j+" "
//         val=val+j
//     }
//     console.log(s+""+val)
// }