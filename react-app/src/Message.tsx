//PascalCasing: function component starts with a capital letter
function Message(){
    //JSX: JavaScript XML
    const name = 'Addison';
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello Kaden</h1>;
}

export default Message;