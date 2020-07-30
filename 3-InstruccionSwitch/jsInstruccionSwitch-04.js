/*
Alan Peralta
al seleccionar un mes  informar.
si tiene 28 d&iacute;as.
si tiene 30 d&iacute;as.
si tiene 31 d&iacute;as.*/
function mostrar()
{
//tomo el mes
var mesDelAnio;
mesDelAnio=txtIdMes.value;
switch (mesDelAnio) 
{
case "Enero":
alert("Este mes tiene 28 dias");
break;
case "Abril":
case "junio":
case "Septiembre":
case "Noviembre":
alert("Este mes tiene 30 dias");
break;
default:
alert("Este mes tiene 31 dias");
break;
}	
	
}//FIN DE LA FUNCIÓN