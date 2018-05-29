//Celsius to Fahrenheit
var convertCF = function(cels) {
  return cels * (9/5) + 32;
}
alert(convertCF(35));

//Fahrenheit to Celsius
var convertFC = function(fah) {
  return (fah - 32) * (5/9);
}
alert(convertFC(95));
