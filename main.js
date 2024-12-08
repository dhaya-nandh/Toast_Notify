var toastbox=document.querySelector(".toast-box")
var successMsg="<i class='fa-solid fa-circle-check'></i>Successfully Summitted"
var errorMsg="<i class='fa-solid fa-circle-xmark'></i>Fix the Error"
var invalidMsg=" <i class='fa-solid fa-circle-exclamation'></i>Warning please check it Invalid"
function show(msg){
    var toast=document.createElement("div")
    toast.classList.add('toast')
    toast.innerHTML=msg
    toastbox.appendChild(toast)
    if(msg.includes('Error'))
    {
        toast.classList.add('Error');
    }
    if(msg.includes('Invalid'))
        {
            toast.classList.add('Invalid');
        }
    setTimeout(()=>{
    toast.remove();
    },5000)
}