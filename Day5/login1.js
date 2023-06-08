const token=JSON.parse(localStorage.getItem("token"));
const loginlogout=document.getElementById("login_heading");
if(token){
    loginlogout.innerText="Log Out";
    loginlogout.addEventListener("click",()=>{
        localStorage.removeItem("token");
        window.location.href="./login.html";
    });
}


const show=document.getElementById("show");

// fetch("http://localhost:8080/recipe",{
//     method:"GET",
// })
//     .then((res)=>res.json())
//     .then((data)=> getData(data));

//     function getData(data){
       
//         data.map((el)=>{
//             const div=document.createElement("div");
//             const img=document.createElement("img");
//             img.src=el.image;
//             const item=document.createElement("h1");
//             item.innerText=el.item;
            
//             const updatebutton=document.createElement("button");
//             updatebutton.innerText="Update";
//             updatebutton.addEventListener("click",()=>{
//                 const updatedTitle=prompt("");
//                 const newObj={
//                     item:updatedTitle,
//                     description:el.description,
//                     image:el.image,
//                     price:el.price,
//                 };
//                 fetch(`http://localhost:8080/recipe/${el.id}`,{
//                     method:"PUT",
//                     headers:{
//                         "Content-Type":"application/json",
//                     },
//                     body: JSON.stringify(newObj),
//                 })
//                 .then((res)=>{
//                     alert("Updated Title Successfully");
//                 })
//                 .catch((err)=>{
//                     alert("Error occured while updating"+err);
//                 });
//             });

//             const deletebutton=document.createElement("button");
//             deletebutton.innerText="Delete";
//             deletebutton.addEventListener("click",()=>{
//                 fetch(`https://localhost:8080/recipe/${el.id}`,{
//                     method: "DELETE",
//                 })
//                 .then((res)=>{
//                     alert("deleted the items");
//                 })
//                 .catch((err)=>{
//                     alert("Error occured while deleting");
//                 });
//             });

//             const showdetails=document.createElement("button");
//             showdetails.innerText="Show Details";
//             showdetails.addEventListener("click",()=>{
//                 localStorage.setItem("id",JSON.stringify(el.id));
//                 window.location.href="details.html"
//             })


//             div.append(img,item,updatebutton,deletebutton,showdetails);
//             show.append(div);
//         });
//     }