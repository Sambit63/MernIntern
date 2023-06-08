const email=document.getElementById("email");
const pass = document.getElementById("password");

function fetchUser(){
    fetch("http://localhost:8080/userData",
    {
        method:"GET"
    })
    .then((res) =>res.json())
    .then((data)=>
    {
        console.log(data);
        const user=data.find((el)=>
        el.email===email.value && el.password===pass.value);
    console.log(user);
    if(user)
    {
        alert("Logged in sucessfully");
        window.location.href="dataEntry.html";
    }
    else
    {
        window.location.href="index.html";
    }
  });

}
