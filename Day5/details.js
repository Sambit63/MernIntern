const id=JSON.parse(localStorage.getItem("id"));
const show=document.getElementById("showDetail");

fetch(`http://localhost:8080/mydata/${id}`,
{
    method:"GET",
})
.then((res)=> res.json())
.then((data) => appendData(data));
function appendData(data)
{
    const div=document.createElement("div");
    const image=document.createElement("img");
    image.src=data.image;
    const item=document.createElement("h1");
    item.innerText=data.item;
    div.append(image,item);
    show.append(div);
}