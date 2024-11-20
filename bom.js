let submitBtn=document.getElementById("btn")
let name=document.getElementById("userName")
let email=document.getElementById("userEmail")
let pswd=document.getElementById("userPswd")
submitBtn.addEventListener("click",()=>{

    const namevalue=name.value
    const emailvalue=email.value
    const pswdvalue=pswd.value

    localStorage.setItem("name",namevalue)
    localStorage.setItem("email",emailvalue)
    localStorage.setItem("pswd",pswdvalue)
    
    alert("signup done successfully!!!!!!")
    setTimeout(()=>{
       window.location.href="login.html" 
    },2000)
})

const loginBtn=document.getElementById("btn")
loginBtn.addEventListener("click",()=>{
    let namestorage=localStorage.getItem("name")
    let emailstorage=localStorage.getItem("email")
    let inputusername=document.getElementById("userName").value
    let inputuseremail=document.getElementById("userEmail").value
    if(namestorage==inputusername && emailstorage==inputuseremail){
        alert("login done successfully")
        setTimeout(()=>{
            window.open("home.html")

        },2000)
        }else{
            alert("oops invalid credentials")
        }

})