function UserAuth(){
    const isUserAuthenticated = true;
    let content;
    if(isUserAuthenticated ){
      content = <h1>UserAuthenticated</h1>
    }else{
      content = <h1> Not UserAuthenticated</h1>
    }
    return <>{content}</>
}

export default UserAuth