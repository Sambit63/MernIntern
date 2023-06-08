fetch("mydb.json")
.then((response)=> response.json())
.then((data) => {
  const recepie=data.userRecepie;
  const takendiv=document.getElementById("resturant");
  recepie.forEach(el => {
      const div=document.createElement("div");
      div.style.border="5px solid black";
    
      const image=document.createElement("img");
      image.src=el.foodUrl;
      const dishName=document.createElement("h4");
      dishName.innerText=el.foodName;
      
      const desc=document.createElement("p");
      desc.style.color="bisque";
      const button1=document.createElement("button");
      button1.innerText="Show Desc";
      button1.addEventListener("click",()=>
      {
        desc.innerText=el.foodDesc;
      });
      const button2=document.createElement("button");
      button2.innerText="Remove Desc";
      button2.addEventListener("click",()=>
      {
        desc.innerText="";
      });
       div.append(image,dishName,desc,button1,button2);
       takendiv.append(div);
  });
  })
  .catch((error)=> {
      console.error("Error getting the Data",error)
  });
