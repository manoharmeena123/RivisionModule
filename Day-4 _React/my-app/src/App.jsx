import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Counter from './components/Counter';
import MyButton from './components/MyButton';
import UserAuth from './components/Authenticate';
import Avatar from './components/Avatar';

function App() {
// let Auth = true;
 
const button1 =()=>{
  alert(`Button1 Clicked`)
}
const button2 =()=>{
  alert(`Button2 Clicked`)
}
const button3 =()=>{
  alert(`Button3 Clicked`)
}



const users = [
  {
    id:1,
    src:"https://avatars.githubusercontent.com/u/108083768?v=4",
    name:"Manohar Meena",
    rounded:true

  },
  {
    id:2,
    src:"https://avatars.githubusercontent.com/u/108083768?v=4",
    name:"Pawan Meena",
    rounded:true

  },
  {
    id:3,
    src:"https://avatars.githubusercontent.com/u/108083768?v=4",
    name:"Sumit Meena",
    rounded:true

  },
]

const userAvatar = users.map((users)=> (
  <Avatar key={users.id} 
  src={users.src}
   name={users.name}
    rounded ={users.rounded}/>
))


  return (
    <div className="App">
    <MyButton buttonText = "Click Me" bgColor ="green" onClick ={button1}/>
    <MyButton buttonText = "ButtonPress" bgColor ="blue" onClick ={button2}/>
    <MyButton buttonText = "Press Me" bgColor ="yellow" onClick ={button3}/>

    {userAvatar}
    {/* <Greet/>
    <Counter/>
    
    <UserAuth/>
<h4>{Auth?"Authenticated":"Not Authenticated"}</h4> */}
    </div>
  );
}

export default App;
