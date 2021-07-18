submitButton.addEventListener("click",function(){
    let emailUsuario = document.getElementById("emailAddress").value;
    localStorage.setItem('emailUsuario',JSON.stringify(emailUsuario))  
    console.log("teste")
})
