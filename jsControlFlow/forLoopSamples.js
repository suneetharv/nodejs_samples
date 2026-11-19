// Sum of natural numbers from 1 - 50

const count = 50;
let sum =0;
console.log("for loop");
for (i=1 ; i <= count; i++) {
    sum += i;
}
console.log("Sum of numbers 1-50 : " , sum);

//Print all the months in the array

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

for (i=0 ; i<months.length ; i++){
    console.log(months[i]);
}

//Display all positive numbers less than 10
const  i = 0;
while (i<=10){
    if (i/2 == 0)
        console.log(i);
}