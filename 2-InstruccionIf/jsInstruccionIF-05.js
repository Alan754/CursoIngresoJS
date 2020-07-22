function mostrar()
/*
Alan Peralta
Al ingresar una edad solo debemos informar si la persona
NO es adolescente.*/

{
	//tomo la edad  
	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	if (edad>17 && edad<101) 
	{
		alert("Usted no es adolecente ");
	}

}//FIN DE LA FUNCIÓN