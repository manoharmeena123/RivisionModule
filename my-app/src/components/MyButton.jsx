function MyButton(props){
    const {bgColor, buttonText,onClick} = props;

   

    return <button onClick={onClick} style={{backgroundColor:bgColor}}>{buttonText}</button>
  }

  export default MyButton