/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%./
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
  var precioUnitario;
  precioUnitario=35;
  var cantidadDeLamparas;
  cantidadDeLamparas=txtIdCantidad.value;
  cantidadDeLamparas=parseInt(cantidadDeLamparas);
  var precioDeLamparas;
  precioDeLamparas=precioUnitario*(cantidadDeLamparas);

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*
    var precioUnitario;
    var cantidadDeLamparas;
    var marca; 
    var descuentoDelCincuenta;
    var descuentoDelCuarenta;
    var descuentoDelTreinta;
    var descuentoDelVeinticinco;
    var descuentoDelVeinte;
    var descuentoDelQuince;
    var descuentoDelDiez;
    var descuentoDelCinco;
    marca=Marca.value;
    precioUnitario=35;
    cantidadDeLamparas=txtIdCantidad.value;
    if(cantidadDeLamparas>6) 
    {
     descuentoDelCincuenta=(precioUnitario)*cantidadDeLamparas;
     descuentoDelCincuenta=descuentoDelCincuenta-(descuentoDelCincuenta*50/100);
     txtIdprecioDescuento.value=descuentoDelCincuenta;
    } else
        {
          if (cantidadDeLamparas==5 && marca=="ArgentinaLuz") 
          {
           descuentoDelCuarenta=(precioUnitario)*5;
           descuentoDelCuarenta=descuentoDelCuarenta-(descuentoDelCuarenta*40/100);
           txtIdprecioDescuento.value=descuentoDelCuarenta;
          }else
           {
             if (cantidadDeLamparas== 5 && marca!="ArgentinaLuz") 
             {
                descuentoDelTreinta=precioUnitario*5;
                descuentoDelTreinta=descuentoDelTreinta-(descuentoDelTreinta*30/100);
                txtIdprecioDescuento.value=descuentoDelTreinta;
             }else
              {
               if(cantidadDeLamparas== 4 && marca=="ArgentinaLuz" || marca=="FelipeLamparas")
                {
                 descuentoDelVeinticinco=precioUnitario*4;
                 descuentoDelVeinticinco=descuentoDelVeinticinco-(descuentoDelVeinticinco*25/100);
                 txtIdprecioDescuento.value=descuentoDelVeinticinco;
                } else
                   {
                     if (cantidadDeLamparas== 4 && marca!="ArgentinaLuz" || marca!="FelipeLamparas") 
                     {
                      descuentoDelVeinte=precioUnitario*4;
                      descuentoDelVeinte=descuentoDelVeinte-(descuentoDelVeinte*20/100);
                      txtIdprecioDescuento.value<=descuentoDelVeinte;  
                     } else
                        {                     
                         if(cantidadDeLamparas==3 && marca=="FelipeLamparas") 
                          {
                            descuentoDelQuince=precioUnitario*3;
                            descuentoDelQuince=descuentoDelQuince-(descuentoDelQuince*15/100);
                            txtIdprecioDescuento.value=descuentoDelQuince;
                          }else
                            {
                              if (cantidadDeLamparas==3&&marca=="ArgentinaLuz") 
                              {
                              descuentoDelDiez=precioUnitario*3
                              descuentoDelDiez=descuentoDelDiez-(descuentoDelDiez*10/100)
                              txtIdprecioDescuento.value=descuentoDelDiez;
                              }else
                              {
                               descuentoDelCinco=precioUnitario*5;
                               descuentoDelCinco=descuentoDelCinco-(descuentoDelCinco*5/100);
                               txtIdprecioDescuento.value=descuentoDelCinco; 
                              }
                            }
                        }
                    }  
              }
            }
     }*/        
}

