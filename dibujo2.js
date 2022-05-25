var texto = document.getElementById("tlineas");
 var texto2 = document.getElementById ("tlineas2");
 var boton2 = document.getElementById ("boton");
 var op = document.getElementById ("opera");
 

 boton2.addEventListener("click",dibujoporclick)

  function dibujoporclick()
  {
  var x = parseInt(texto.value);
  var x1 = parseInt(texto2.value);
  var opcion = parseInt(op.value);

  if (opcion==1) {
  var c = x + x1;
  document.write("La suma es: " + c);
                 } else if (opcion==2) {
                  var c = x -x1;
                  document.write("La resta es: " + c);
                 } else if (opcion==3) {
                var c = x * x1;
  document.write("La multiplicacion es: " + c);
               }else if (opcion==4){
               var c = x / x1;
document.write("La divicion es: " + c);
}else if (opcion==5){
            var f = Math.sqrt(x);
             var f2 = Math.sqrt(x1);
            document.write("la raiz es: " + f);
            document.write("    la 2da raiz es: " + f2);

             }else if (opcion==6){
             var c = x * x;
             var d =  x1 * x1;
            document.write("la elevacion al cuadrado es: " + c );
            }else if (opcion==7){
             var c = x * x * x;
            var d = x1 * x1 * x1;
             document.write("la raiz cubica es: " + c);
            } else if (opcion==8){
           if (x % 2 == 0){
             document.write("<br>", "El numero que ingresaste es par: " + x);

            } else {
            document.write("<br>", "El numero que ingresaste es impar: " + x);
            }  

            }if (x1 % 2 == 0) {
             document.write("<br>", "El numero que ingresaste es par: " + x1);

              }else {
               document.write("<br>", "El numero que ingresaste es impar: " + x1);
               }
                     

}
