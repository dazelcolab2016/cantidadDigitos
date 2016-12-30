function  calcular()
{
  var n = document.getElementById("numero").value;
  var contador = 0; 
        
  while (n > 0) 
          {
          n=parseInt(n/10)
          contador++;
         
           }
        
  document.getElementById("contador").innerHTML = contador;
}