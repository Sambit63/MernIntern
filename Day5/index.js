//Today's Class is about upadate item name and delete items.
const show=document.getElementById("show");
fetch("http://localhost:8080/mydata",
{
   method:"GET", 
})
.then((res) => res.json())
.then((data) => getData(data));

function getData(data)
{
    data.map((el) =>
    {
        const div=document.createElement("div");
        const image=document.createElement("img");
        image.src=el.image;
        const item=document.createElement("h1");
        item.innerText=el.item;
        const updatebutton=document.createElement("button");
        updatebutton.innerText="UpdateTitle";
        updatebutton.addEventListener("click", ()=>
        {
            const updatedTitle=prompt("");
            const newObj=
            {
                item:updatedTitle,
                description:el.description,
                image:el.image,
                price:el.price,
            };
            fetch(`http://localhost:8080/mydata/${el.id}`,
            {
               method:"PUT",
               headers:
               {
                "Content-Type":"application/json",
               },
               body:JSON.stringify(newObj), 
            })
            .then((res) =>
            {
                alert("Updated title sucessfully");
            })
            .catch((err) =>
            {
                alert("Error occured while updating"+err)
            });
        });
        const deletebutton=document.createElement("button");
        deletebutton.innerText="Delete";
        deletebutton.addEventListener("click",() =>
        {
            fetch(`http://localhost:8080/mydata/${el.id}`,
            {
                method:"DELETE",
            })
            .then((res)=>
            {
                alert("Item Deleted");
            })
            .catch((err)=>
            {
                alert("Error occured while deleting");
            });
        });
        const showDetails=document.createElement("button");
        showDetails.innerText="Show Details";
        showDetails.addEventListener("click",()=>
        {
            localStorage.setItem("id",JSON.stringify(el.id));
        })
        div.append(image,item,updatebutton,deletebutton,showDetails);
        show.append(div);
    })
}