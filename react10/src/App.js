// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/card';
  function App() {
    const [arr, setArr] = useState([]);
    const [wholearr,setWholeArr]=useState([]);
    const [searchStr,setSearchStr]=useState("");
    // const [newArr,setNewArr]=useState([]);
    // const [pageArr,setPageArr]=useState([1,2,3,4,5,6,7,8,9,10]);
    const pageArr=[];
    let i=0;
    while (i < Math.ceil(wholearr.length / 15)) {
      pageArr.push(i+1);
      i++;
    }
    
    console.log(pageArr);
    
    const [page,setPage]=useState(1);
  
    const getData = async () => {
      await fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setWholeArr(data);
          const end=page*15;
          const start=page-1;
          const newData=data.slice(start*15,end);
          setArr(newData);
        });
    };

    // const getSearchData= ()=>
    // {
    //   const newData=arr.filter((item)=> item.title.includes(searchStr));
    //   console.log(newData);
    //   setNewArr(newData);
    // };
    const handlePage=(el) =>{
      setPage(el);
    };
    console.log(page);
  
    useEffect(() => {
      getData();
    }, [page]);

    // useEffect(() => {
    //   getSearchData();
    // }, [searchStr]);

  //  console.log(newArr);
    //console.log(arr);
  
    return (
      <div className="App">
        {arr.length > 0 ?(
          <div
          style={{display:"grid",
          gridTemplateColumns:"repeat(5,1fr)",
          marginTop:"5%",
          border:"5px solid black",
          background:"bisque",
        }}
          >
            {arr.map((el)=>{
              return <Card 
              postid={el.postId}
              Id={el.id}
              title={el.name}
              email={el.email}
              body={el.body}
              />;
            })}
          </div>
        ) : (
          <h1>No Data Found</h1>
        )}
        {pageArr.map((el)=>{
          return <button onClick={() =>handlePage(el)}>{el}</button>;
        })}
        </div>
    );
}
  
  export default App;