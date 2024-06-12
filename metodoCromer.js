function ecuacion() {

var a1=document.getElementsById('a1').value;
var b1=document.getElementsById('b1').value;
var c1=document.getElementsById('c1').value;
var a2=document.getElementsById('a2').value;
var b2=document.getElementsById('b2').value;
var c2=document.getElementsById('c2').value;
var det=((a1 * b2)-(a2 * b1));
var detx=((c1 * b2)-(c2 * b1));
var dety=((a1 * c2)-(a2 * c1));
var x =(detx / det);
var x =(dety / det);
document.getElementsById('x').value=x;
document.getElementsById('y').value=y;


}