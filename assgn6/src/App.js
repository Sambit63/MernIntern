import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card';

function App() {
  const [arr, setArr] = useState([]);
  const [searchStr, setSearchStr] = useState('');
  const [newArr, setNewArr] = useState([]);
  const [showForm, setShowForm] = useState(false); // New state to control form visibility
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    url: '',
  });
  const [wholearr,setWholeArr]=useState([]);
  const pageArr=[];
  let i=0;
  while (i< Math.ceil(wholearr.length/3)){
    pageArr.push(i+1);
    i++;
  }
  console.log(pageArr);
  const [page,setPage]=useState(1);

  const handleChange = (e) => {
    setSearchStr(e.target.value);
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    await fetch('http://localhost:8080/mymovies', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setWholeArr(data);
        const end=page*3;
        const start=page-1;
        const newData=data.slice(start*3,end);
        setArr(newData);
      })
      .catch((error) => {
        console.log('Error in fetching:', error);
      });
  };

  const handlePage=(el) =>{
    setPage(el);
  }
  console.log(page);
  useEffect(() => {
    getData();
  }, [page]);

  const getSearchData = () => {
    const newData = arr.filter((item) => item.title.includes(searchStr));
    setNewArr(newData);
  };

  useEffect(() => {
    getSearchData();
  }, [searchStr]);

  const handlePost = async () => {
    setShowForm(true); // Show the form when Add Item button is clicked
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      id: formData.id,
      title: formData.title,
      url: formData.url,
    };

    await fetch('http://localhost:8080/mymovies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        if (res.ok) {
          alert('Posted Successfully');
          getData(); // Retrieve the updated data after posting
          setShowForm(false); // Hide the form after submitting
          setFormData({
            id: '',
            title: '',
            url: '',
          }); // Reset form data
        } else {
          alert('Item is Already Present');
        }
      })
      .catch((error) => {
        console.log('Error in posting:', error);
      });
  };

  const handlePatch = async (id) => {
    const updatedName = prompt('Enter the Name you Want to update');
    await fetch(`http://localhost:8080/mymovies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: updatedName,
      }),
    })
      .then((res) => {
        if (res.ok) {
          alert('Name Updated!');
          getData();
        } else {
          alert('Error in updating');
        }
      })
      .catch((error) => {
        console.log('Error in updating:', error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <input
          type="text"
          placeholder="Search"
          value={searchStr}
          onChange={handleChange}
        />
        {newArr.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,1fr)',
              marginTop: '5%',
              border: '5px solid black',
              background: 'bisque',
            }}
          >
            {newArr.map((el) => {
              return <Card image={el.url} title={el.title} key={el.id} />;
            })}
          </div>
        ) : (
          <h1>No Data Found</h1>
        )}
  
        {showForm ? (
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="ID"
              name="id"
              value={formData.id}
              onChange={handleFormChange}
            />
            <input
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleFormChange}
            />
            <input
              type="text"
              placeholder="URL"
              name="url"
              value={formData.url}
              onChange={handleFormChange}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <button onClick={handlePost}>Add Item</button> 
        )}
  
        <button onClick={() => handlePatch(1)}>Update</button>&nbsp;
      </div>
      <div className="card-container">
        {arr.map((el) => (
          <Card title={el.title} image={el.url} id={el.id} key={el.id} />
        ))}
      </div>
      {pageArr.map((el)=>{
          return <button onClick={() =>handlePage(el)} style={{width:"10%"}}>{el}</button>;
        })}
    </div>
  );
  
  
} 
export default App;
