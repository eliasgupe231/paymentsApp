const tableForm = document.getElementById("form")
const upDateBtn = document.getElementById("UpDateBtn")

tableForm.addEventListener("submit", (e)=> {  
    e.preventDefault() //hacer q al tocar agregar no se actualice la pagina
    const form = e.target
    const datosForm = getFields(form)
    const submitMessage = document.getElementById("message")
    saveDatosObj(datosForm)
    showValidation(submitMessage)
    insertRowTable(datosForm)
    form.reset()
})


//ARREGLAR ESTO LO ANTES POSIBLE
function showValidation (submitMessage){
    submitMessage.classList.add("showMessage")
    console.log("ok") //añade clase de css
        // setTimeout (()=>{
    //     submitMessage.classList.remove ("showMessage")
    // },3000)   
}


document.addEventListener("DOMContentLoaded", (e)=> {
    let transactionObjArr = JSON.parse(localStorage.getItem("transactionArrayData"))
    transactionObjArr.forEach(
        (element) => {
            insertRowTable(element)
        }
    )
})



//this is to get the form fields and convert what you have to each value of the form
const getFields = (form) => {
    const {name, method, date, month} = form.elements
    return {
        name : name.value,
        method : method.value,
        date : date.value,
        month : month.value,
    }
}



// this functions receives data from getFields and add rows with that values
function insertRowTable (datosForm){
    let paymentsTableRef = document.querySelector ("#paymentsTable")

    let newPaymentRow = paymentsTableRef.insertRow(-1) // QUE SE AGREGUE A LO ULTIMO

    let newPaymentCell0 = newPaymentRow.insertCell(0)
    newPaymentCell0.textContent = datosForm["name"]

    let newPaymentCell1 = newPaymentRow.insertCell(1)
    newPaymentCell1.textContent = datosForm["method"]

    let newPaymentCell2 = newPaymentRow.insertCell(2)
    newPaymentCell2.textContent = datosForm["date"]

    let newPaymentCell3 = newPaymentRow.insertCell(3)
    newPaymentCell3.textContent = datosForm["month"]

    let newPaymentCell4 = newPaymentRow.insertCell(4)
    newPaymentCell4.innerHTML = "<button>&times</button>"
}

//funcion para borrar de uno en uno en mi lista de pagos

// newPaymentCell4.addEventListener("submit", (e)=>{
//     let eliminatingArray = JSON.parse(localStorage.getItem ("transcriptionArrayData", transactionArrayJson))
//     let pos = transactionArray.indexOf()
//     eliminatingArray.splice()
// })

function saveDatosObj (datosForm) {
    let transactionArray = JSON.parse(localStorage.getItem("transactionArrayData")) || []
    transactionArray.push(datosForm)
    //convierto mi array de transaccion a json y lo guardo en el LS
    let transactionArrayJson = JSON.stringify(transactionArray)
    localStorage.setItem("transactionArrayData", transactionArrayJson)
}


upDateBtn.addEventListener("click", ()=>{
    localStorage.clear
})
//filtrar por datos
//boton eliminar uno por uno
//boton actualizar que actualice todo el localStorage
