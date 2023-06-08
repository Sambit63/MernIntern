const email=document.getElementById("email");
const pass=document.getElementById("password");

function handleLogin()
{
    if(email.value ==="sambit@gmail.com" && pass.value==="123")
    {
        alert("Logged in Sucessfully");
        localStorage.setItem("token",JSON.stringify(Date.now()));
        window.location.href="login1.html";
    }
}