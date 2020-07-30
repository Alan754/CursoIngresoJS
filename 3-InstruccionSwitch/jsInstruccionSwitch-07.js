/*
Alan Peralta
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra
Norte, Sur, Este u Oeste
*/

function mostrar()
{
var destinoIngresado;
destinoIngresado=txtIdDestino.value;
switch (destinoIngresado) 
{
case "Bariloche":
alert("Se encuentra al Este");
break;
case"Cataratas":
alert("Se encuentran al Norte");
break;
case "Mar del plata":
alert("Se encuentra al Oeste");
break;		
default:
alert("Se encuentra al Sur");
break;
}

}//FIN DE LA FUNCIÓN