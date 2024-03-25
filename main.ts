let student = ("Arsh khan")
let TotalMarks = 1200
let PassingMarks = 650
let ObtainedMarkds = 1150
let Result:boolean = (ObtainedMarkds >= PassingMarks)
let percentage = (ObtainedMarkds / TotalMarks * 100)

console.log (`"${student} Your Percentage Is:"` , percentage)
if(Result && percentage > 40 && percentage < 55 ){
    console.log('You Got "D" Grade')
}
else if(Result && percentage > 90){
console.log('You Got "A+" Grade');}

else if(Result && percentage > 75 && percentage < 90)
{
console.log('You Got "A" Grade');}
else if (Result && percentage > 65 && percentage < 75){
console.log('You Got "B" Grade');}
else if(Result && percentage > 55 && percentage < 65){
console.log('You Got "C" Grade')}

else {console.log("Try Your Best, You Are Fail")}

