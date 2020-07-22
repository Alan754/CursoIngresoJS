function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var ramdom;
	var mensaje;
	ramdom=Math.floor(Math.random()*10+1);
	if (ramdom<4) 
	{
	mensaje="Vamos la proxima se puede ";	
	} else 
	{
	if (ramdom>3&&ramdom<9) 
	{
	mensaje="Aprobo ";
	}else
	{
    mensaje="Exelente ";
	}
	}
alert(mensaje);
}//FIN DE LA FUNCIÓN