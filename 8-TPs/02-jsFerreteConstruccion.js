/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
//txtIdLargo txtIdAncho txtIdRadio
function Rectangulo () 
{
var largo;
var ancho;
var resultado;
largo=txtIdLargo.value;
largo=parseInt(largo);
ancho=txtIdAncho.value;
ancho=parseInt(ancho);
resultado=(largo*2+ancho*2)*3;
alert("La cantidad de alambre que necesita comprar es "+resultado);

}
function Circulo () 
{
    var radio;
    var resultado;
    radio=txtIdRadio.value;
    radio=parseInt(radio);
    resultado=(radio*Math.PI*2)*3;
    alert("La cantidad de alambre que necesita es "+resultado);
}
function Materiales () 
{
 var largo;
 var ancho;
 var resultado;
 var cemento;
 var cal;
 largo=txtIdLargo.value;
 largo=parseInt(largo);
 ancho=txtIdAncho.value;
 ancho=parseInt(ancho);
 resultado=(largo*ancho);
 cemento=resultado*2;
 cal=resultado*3;
 alert("La cantdad de bolsas de cemento que necesita es "+cemento+" cantidad de blosas de cal es "+cal);

}