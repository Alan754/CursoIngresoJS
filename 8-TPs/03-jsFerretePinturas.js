/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//txtIdTemperatura
function FahrenheitCentigrados () 
{
    var fahrenheit;
    var centigrados;
    fahrenheit=txtIdTemperatura.value;
    fahrenheit=parseInt(fahrenheit);
    centigrados=(fahrenheit-32)*5/9;
    centigrados=Number.parseFloat(centigrados).toFixed(2);
    alert(fahrenheit+" Fahrenheit son "+centigrados+" centigrados");
 /*Ejemplo: convierte 98.6º Fahrenheit a Centígrados.
 98.6 - 32 = 66.6
 66.6 * 5/9 = 333/9 = 37o C. jemplo de como se hace */
}

function CentigradosFahrenheit () 
{
    var centigrados;
    var fahrenheit;
    centigrados=txtIdTemperatura.value;
    centigrados=parseInt(centigrados);
    fahrenheit=(centigrados*9/5)+32;
    fahrenheit=Number.parseFloat(fahrenheit).toFixed(2);    
    alert(centigrados+" centigrados son "+fahrenheit+" Fahrenhit");
    
 /* × 9/5) + 32 = para pasar de centigrados a fharenthing como se escriba*/ 
}
