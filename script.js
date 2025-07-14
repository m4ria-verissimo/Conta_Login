function enviar(event){
    event.preventDefault();
    var nome = document.getElementById("nome").value;
    var sob = document.getElementById("sob").value;
    var email = document.getElementById("email").value;
    var cnt = Number((document.getElementById("cnt")).value);

   Swal.fire({
    title:"Dados salvos",
    icon:"success",
   }).then(() => {
       var resul =document.getElementById("resul");
       resul.innerHTML += "DADOS  <br> <br>" + "Nome : " + nome 
       + sob + "<br>" + "Email: " + email + "<br>" + "Contato: " + cnt + "<br><br>";
       resul.style.fontSize+="20px";
       resul.style.border+="1px solid black";
       
    document.getElementById("apg").style.display = "inline-block"; 
    document.getElementById("resul").style.border = "none";
    });
}

function apg(){
    document.getElementById("resul").innerHTML = "";
    document.getElementById("apg").style.display = "none";
     document.getElementById("resul").style.border = "none";

}
