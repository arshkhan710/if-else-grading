var student = ("Arsh khan");
var TotalMarks = 1200;
var PassingMarks = 650;
var ObtainedMarkds = 1150;
var Result = (ObtainedMarkds >= PassingMarks);
var percentage = (ObtainedMarkds / TotalMarks * 100);
console.log("\"".concat(student, " Your Percentage Is:\""), percentage);
if (Result && percentage > 40 && percentage < 55) {
    console.log('You Got "D" Grade');
}
else if (Result && percentage > 90) {
    console.log('You Got "A+" Grade');
}
else if (Result && percentage > 75 && percentage < 90) {
    console.log('You Got "A" Grade');
}
else if (Result && percentage > 65 && percentage < 75) {
    console.log('You Got "B" Grade');
}
else if (Result && percentage > 55 && percentage < 65) {
    console.log('You Got "C" Grade');
}
else {
    console.log("Try Your Best, You Are Fail");
}
