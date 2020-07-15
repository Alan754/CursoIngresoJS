/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var ingresado1;
    var ingresado2;
    var ingresado3;
    var resultado;
    ingresado1=txtIdPrecioUno.value;
    ingresado1=parseInt(ingresado1);
    ingresado2=txtIdPrecioDos.value;
    ingresado2=parseInt(ingresado2);
    ingresado3=txtIdPrecioTres.value;
    ingresado3=parseInt(ingresado3);
    resultado=(ingresado1)+ingresado2+(ingresado3);
    alert("El resultado de su suma es "+resultado);

}
function Promedio () 
{
	var ingresado1;
    var ingresado2;
    var ingresado3;
    var resultado;
    ingresado1=txtIdPrecioUno.value;
    ingresado1=parseInt(ingresado1);
    ingresado2=txtIdPrecioDos.value;
    ingresado2=parseInt(ingresado2);
    ingresado3=txtIdPrecioTres.value;
    ingresado3=parseInt(ingresado3);
    resultado=((ingresado1)+ingresado2+(ingresado3))/3;
    alert("El resultado de su promedio es "+resultado);
}
function PrecioFinal () 
{
	var ingresado1;
    var ingresado2;
    var ingresado3;
    var resultado;
    var masiva;
    ingresado1=txtIdPrecioUno.value;
    ingresado1=parseInt(ingresado1);
    ingresado2=txtIdPrecioDos.value;
    ingresado2=parseInt(ingresado2);
    ingresado3=txtIdPrecioTres.value;
    ingresado3=parseInt(ingresado3);
    resultado=(ingresado1)+ingresado2+(ingresado3);
    masiva=(resultado*21/100)+resultado;
    alert("El resultado de su precio final es "+masiva);
}