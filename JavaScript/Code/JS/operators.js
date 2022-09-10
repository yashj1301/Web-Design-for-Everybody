var x=3;
var y=4;

var sum=x+y;
var diff=x-y;
var prod=x*y;
var quo=y/x;
var rem=y%x;
var ex=x**y;

document.write('The variables are : <code>',x,'</code> and <code>',y,'</code>');
document.write('<h3>Arithmetic Operations</h3>');

document.write('Sum is: <code>',sum,'</code><br>');
document.write('Difference is: <code>',diff,'</code><br>');
document.write('Product is: <code>',prod,'</code><br>');
document.write('Quotient is: <code>',quo,'</code><br>');
document.write('Remainder is: <code>',rem,'</code><br>');
document.write('Exponential is: <code>',ex,'</code>');

var logand=(x>2&&y<2);
var logor=(x>2||y<2);
var lognot=(x!=y);

document.write('<h3>Logical Operations</h3>');
document.write('Logical <code>AND</code> is: <code>',logand,'</code><br>');
document.write('Logical <code>OR</code> is: <code>',logor,'</code><br>');
document.write('Logical <code>NOT</code> is: <code>',lognot,'</code><br>');
document.write('Extra : <code>',!x,'</code>');
