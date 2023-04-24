import { useState } from "react"
import PostItem from "./PostItem"


function Posts(){
const [posts, setPosts] = useState([])
const [loading,setLoading] = useState(false)
const [err,setErr] = useState(false)
    function fetchData(){
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then((res) => res.json())
        .then((res) => {
            // console.log(res)
            setPosts(res)
            setLoading(false)
        }).catch((err)=>{
           setErr(true)
           setLoading(false)
        })
    }
// console.log("Post",posts)
if(loading){
    return <h1>Loading...</h1>
}
if(err){
    return <h1>Something went Wrong...</h1>
}
return (
    <>
    <h1>Click the button and fetch the data</h1>
    <button onClick={fetchData}>Get Data</button>
    {
        posts.map((post) => (
            <PostItem 
            key ={post.id}
            id ={post.id}
            title = {post.title}
            />
        ))
    }
    </>
)

}

export default Posts