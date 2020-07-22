function mostrar()
{
	//tomo la edad  
 var edad;
 edad=txtIdEdad.value;
 edad=parseInt(edad);
   /*
   if (edad<13) 
    {
    alert("Niño");	
    } else 
     {
       if (edad <18) 
     {
	     alert("Adolecente");
	    }
	  }
	  if (edad>17)
    {
     alert("Usted es mayor");	
    }
    Este ejercicio vendria a ser el punto intermedio de los otros dos 
    */

     if (edad<12) 
       {
         alert("Niño")	
       } else 
       {
          if (edad <18) 
          {
	       alert("Adolecente")
	       }else 
	       {
		       alert("Mayor")
	       }
       }
/*
 if (edad<12)
 {
 alert("Niño");	
 }
 if (edad>12 && edad<18)
 {
 alert("Usted es adolecente");	
 }
 if (edad>18)
 {
 alert("Usted es mayor");	
 }
 if (edad==18) 
 {
    alert("Usted es mayor ");
 }
 */
}//FIN DE LA FUNCIÓN