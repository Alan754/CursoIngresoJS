/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var importe;
var resultado;
importe=txtIdSueldo.value;
importe=parseInt(importe);
resultado=(importe*10/100)+importe;
txtIdResultado.value=resultado;
//para hacer el porciento de algo se hace "el numero"*10/100 mas de nuevo "el numero"
}
