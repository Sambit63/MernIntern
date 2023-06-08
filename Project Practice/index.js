const takenemail = document.getElementById("email");
const takenpassword = document.getElementById("pass");
const takenname=document.getElementById("name");
const takenphone=document.getElementById("number");

function submitData()
{
    if (takenemail.value !== "" && takenpassword.value !== "" && takenname.value !=="" && takenphone.value!=="") 
    {
        const obj = {
          id: Date.now(),
          email: takenemail.value,
          password: takenpassword.value,
          name:takenname.value,
          phone:takenphone.value,
        };
        fetch("http://localhost:8080/userData",
        {
            method:"POST",
            headers:
            {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        })
        .then((res) => res.json())
        .then((mydb) => {
          console.log(mydb);
          alert("Account Created");
        })
       .catch((error) => console.log(error));
    }
    else{
        alert("Fill in the Blanks");
    }
    window.location.href="login.html";
}
