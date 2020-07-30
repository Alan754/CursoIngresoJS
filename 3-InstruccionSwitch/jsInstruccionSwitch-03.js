/*
Alan Peralta
al seleccionar un mes  informar.
si es Febrero: " Este mes no tiene m&aacute;s de 29 d&iacute;as."
 NO es Febrero: "Este mes tiene 30 o m&aacute;s d&iacute;as"*/
function mostrar()
{
//tomo el mes
var mesDelAnio;
mesDelAnio=txtIdMes.value;
switch (mesDelAnio) 
{
case "Febrero":
alert("Este mes no tiene mas de 29 dias");
break;
default:
alert("Este mas tiene 30 o mas dias");
break;
}
	
}//FIN DE LA FUNCIÓN