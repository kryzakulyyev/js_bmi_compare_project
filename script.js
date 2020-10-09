/* let massMark= 70;
let massJohn=60;
let heightMark=1.7;
let heightJohn=1.6;

/* let bmiMark = massMark/ (Math.pow(massMark, 2));

let bmiJhon = massJohn/ (Math.pow(massJohn, 2)); */
/* let bmiMark = massMark / (heightMark * heightMark);
let bmiJohn = massJohn / (heightJohn * heightJohn); */


/* bmiMark=bmiMark.toFixed(2);
bmiJohn=bmiJohn.toFixed(2); */
/* console.log(`Mark's BMI is ${bmiMark} and John's BMI is ${bmiJohn}.`);

const higherBMI = bmiMark > bmiJohn;  */// this gives “true”
/* const higherBMI = bmiMark < bmiJohn; // this gives “false” */
/* 
console.log(`Is Mark's BMI is higher than John's? Answer is 'true'. Because Mark's BMI is ${bmiMark} and John's BMI is ${bmiJohn}`);  */

let massMark= 90;
let massJohn=60;
let heightMark=1.7;
let heightJohn=1.6;

//BMI for Mark and John;
let bmiMark=massMark/(heightMark * heightMark); //BMI for Mark. Mass and Heigth value should be count kg and m(meter) type
let bmiJhon=massJohn/(heightJohn*heightJohn); //BMI for John. Mass and Heigth value should be count kg and m(meter) type;
/* bmiMark = bmiMark.toFixed(2);
bmiJohn = bmiJohn.toFixed(2); */

bmiJhon=Math.round(bmiJhon); //round result
bmiMark=Math.round(bmiMark); // round result


console.log(`${bmiMark} is Mark's BMI. ${bmiJhon} is for John BMI `);

const higherBMI=bmiMark>bmiJhon; //this is gives "true"
/* const higherBMI=bmiMark<bmiJhon; //this is gives "false" */
console.log(`Is Mark's BMI is higher than John's? Answer is ${higherBMI}. Because Mark's BMI is ${heightMark} and John's BMI is ${heightJohn}`);

//Challange

let massA=parseInt(prompt("Enter A kg please"));
let massB=parseInt(prompt("Enter B kg plaese"));

let heightA=prompt("Enter A height plaese 'm'");
let heightB=prompt("Enter B kg plaese 'm' ");

let bmiA = massA/ (Math.pow(heightA, 2));

let bmiB = massB/ (Math.pow(heightB, 2));

bmiA=Math.round(bmiA); 
bmiB=Math.round(bmiB);
if(bmiA > bmiB) {
  console.log(`${bmiA} A BMI  higher than ${bmiB} B BMI `);
} else {
  console.log(`${bmiA} A BMI is lower than ${bmiB} B BMI`);
}
