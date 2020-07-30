/*
AlanPeralta
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
*/


function mostrar()
{
var destinoIngresado;
destinoIngresado=txtIdDestino.value;
switch (destinoIngresado) 
{
case"Bariloche":
case"Mar del plata":
alert("Hace frio");	
break;
default:
alert("Hace calor");	
break;
}

}//FIN DE LA FUNCIÓN