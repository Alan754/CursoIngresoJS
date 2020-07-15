/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos
	var ingresado1;
	var ingresado2;
	var resultado;
	ingresado1=txtIdNumeroUno.value;
	ingresado2=txtIdNumeroDos.value;
	ingresado1=parseInt(ingresado1);
	ingresado2=parseInt(ingresado2);
	resultado=ingresado1+ingresado2;
	alert("La suma es "+resultado);
	// se parsea de ese modo si queres aprobar 
	 
}

