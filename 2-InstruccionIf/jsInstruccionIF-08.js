function mostrar()
{
	//tomo la edad  
	var edad;
	var estado;
	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado=document.getElementById("estadoCivil").value;
	if (edad>18) 
	{
		if (estado=="Soltero") 
		{
		 alert("Es soletero y no es menor");  
		}
	}
	
}//FIN DE LA FUNCIÓN