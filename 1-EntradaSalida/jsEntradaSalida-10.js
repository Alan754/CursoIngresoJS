/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{// txtIdImporte txtIdResultado
var importe;
var resultado;
importe=txtIdImporte.value;
importe=parseInt(importe);
resultado=importe-(importe*25/100);//la otra forma seria importe*0.75
txtIdResultado.value=resultado
}
/*para sacar el promedio de la actividad de tp 
se suma la cantidad de numeros ingresados y se divide*/