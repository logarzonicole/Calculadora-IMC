let calcularImc=()=>{
    let peso= document.getElementById("peso").value 
    let estatura= document.getElementById("estatura").value
    let resultado= parseFloat(peso/(estatura*estatura)).toFixed(1)
    let segundoResultado= document.getElementById("resultado")
    let boton=document.getElementById("boton")

    segundoResultado.textContent=segundoResultado.textContent+resultado
    //segundoResultado.textContent+=resultado == manera abreviada
    if (resultado<18){
        document.getElementById("tipo").textContent="Peso inferior al normal"
    }
    else if (resultado>=18 && resultado<24){
        document.getElementById("tipo").textContent="Peso normal"
    }
    else{
        document.getElementById("tipo").textContent="Obesidad"
    }
}
boton.addEventListener("click",calcularImc)