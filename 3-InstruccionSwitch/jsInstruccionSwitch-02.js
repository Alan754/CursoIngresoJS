/*
Alan Peralta
al seleccionar un mes  informar.
si estamos en Invierno: "Abrigate que hace frio."
si a&uacute;n no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
>ACLARAcI&Oacute;N: tomamos a Julio y Agosto como los meses de Inviern*/
function mostrar()
{ //toma mes
var mesDelAnio;
mesDelAnio=txtIdMes.value;
switch (mesDelAnio) 
{
case "Enero":
case"Febrero":
alert("Falta para el invierno");
break;
case "Septiembre":
case"Octubre":
case"Noviembre":
case"Diciembre":
alert("Ya pasamos el frio, ahora calor");
break;
default:
alert("Abrigate que hace frio");
break;
}
}//FIN DE LA FUNCIÓN