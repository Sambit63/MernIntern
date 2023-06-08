const data=[{
    image :"https://static.toiimg.com/thumb/83565509.cms?width=1200&height=900",
    title :"Burger",
    Price:"139rs",
    description:"A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll. Price-139rs"
},
{
    image :"https://www.tasteofhome.com/wp-content/uploads/2018/01/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-9.jpg",
    title:"Pizza",
    Price:"189rs",
    description:" An Italian favorite, this chicken pizza recipe is a delicious mix of flat bread or base topped with cheese, chillies, onion, garlic sauce and chunks of chicken.Tossed to perfection, this quick and easy pizza recipe is the solution to all those chicken and cheese cravings. Perfect for those movie nights or parties at home. Price-189rs"
},
{
    image:"https://www.spicypunch.com/wp-content/uploads/2020/07/veg-pizza.jpg",
    title:"Pizza",
    Price:"150rs",
    description:"Fresh tomatoes, onions, arugula, kale, eggplants, bell peppers, spinach, zucchini, mushrooms and more. Price-150rs"
},
{
    image:"https://www.licious.in/blog/wp-content/uploads/2019/11/Mutton-Biryani-1-600x600.jpg",
    title:"Biryani",
    Price:"290rs",
    description:"The Best Mutton Biryani Recipe ever! Prepared with utmost care and love, this Mutton Biryani holds a regal legacy from the kitchen of Nawabs and Nizams that needs no introduction or special mentions. Price-290rs"
},
{
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPROwaewo8D6jiT19lOwNrQrl6IiRCFC4wg&usqp=CAU",
    title:"Biryani",
    Price:"200rs",
    description:"Chicken Biryani is a delicious savory rice dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful saffron rice. For my Biryani, I simplify the order of operations, while retaining the traditional layered approach to assembling it. Price-200rs"
},
{
    image:"https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-superJumbo.jpg",
    title:"Dosa",
    Price:"140rs",
    description:"A dosa is South Indian, fermented crepe made from rice batter and black lentils. Masala Dosa, specifically, is when you stuff it with a lightly cooked filling of potatoes, fried onions and spices. Price-140rs"
},
{
    image:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Jalebi_-_Served_in_a_Plate.JPG",
    title:"Jalebi",
    Price:"20rs/pcs",
    description:"Jalebi is a funnel-cake-like treat made by piping spirals of slightly fermented batter into hot oil, and then soaking the whorls in warm sugar syrup. Making jalebi is a bit fiddly. Price-20rs/piece"
}
];
const menuBox =document.getElementById("myrest");
data.forEach((el) => {
    const div=document.createElement("div");
    const Image =document.createElement("img");
    Image.src=el.image;
    const foodName=document.createElement("h4");
    foodName.innerText=el.title;
    const button1=document.createElement("button");
    const description=document.createElement("p");
    button1.innerText="Show Desc";
    button1.addEventListener("click",()=> {
        description.innerText =el.description;
    });
    const button2=document.createElement("button");
    button2.innerText="Remove desc";
    button2.addEventListener("click",()=> {
        description.innerText ="";
    });
    const price=document.createElement("p");
    price.innerText=el.Price;
    div.append(Image,foodName,button1,button2,price,description);
    menuBox.append(div);
});