import './App.css';
import { useEffect, useState } from 'react';


const Post = ({id,title})=>{
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
    </div>
  )
}
function App() {

const [loading,setLoading] = useState(false);
 const [count, setCount] = useState(0);
  const[data,setData] = useState([])
  const [err,setError] = useState(false);
const [page,setPage] =useState(1)
const [limit, setLimit] = useState(10)
  useEffect(()=>{
    console.log("useeffect is called")
    fetchdata(page,limit)
  },[page,limit])

  useEffect(()=>{
    console.log("Count is called")
  },[count])

  const fetchdata =(page, limit)=>{
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    .then((res)=> res.json())
  .then((res)=>{
     setData(res); 
     setLoading(false);
   } ).catch(()=>{
      setLoading(false);
      setError(true)
     });

  }
  const handlePage =(val)=>{
    const updatePage = page+val
    setPage(updatePage)
    fetchdata(updatePage)
  }
  if(loading){
    return <h1>loading.....</h1>
  }
  if(err){
    return <h1>error</h1>
  }
  return (
    <div className="App">
      <h1>SET Limit</h1>
      <button onClick={()=>setLimit(10)}>10</button>
      <button onClick={()=>setLimit(20)}>20</button>
      <button onClick={()=>setLimit(40)}>40</button>
      <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>INC</button>
      </div>
      <div>
    {/* <button onClick={fetchdata}>fetch</button> */}
    {data.map((post)=>(
      <Post key ={post.id} {...post}/>
    ))}
    </div>

    <div>
    <button disabled= {page<=1} onClick={()=>handlePage(-1)}>Pre</button>
    <button>{page}</button>
    <button onClick={()=>handlePage(1)}>Next</button>
    </div>
    </div>
   
  );
}

export default App;
