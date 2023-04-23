

function Avatar(props){
    let {src,name,rounded} = props;
const imgStyle = {borderRadius : rounded? "50%":"16px", width:"200px"}

    return (
        <div style={{border:"1px solid black", margin:"10px"}}>
            <img src={src} alt="userName" style={imgStyle}/>
            <h1>{name}</h1>
        </div>
    )
}

export default Avatar