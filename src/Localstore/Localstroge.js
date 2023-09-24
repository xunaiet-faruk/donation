const localstoreget = () =>{
    const getlocal =localStorage.getItem('card');
    if(getlocal){
        JSON.parse(getlocal)
    }
}

const localstoresets = id =>{
    const states =localstoreget();
    if(!states){
        states.push(id);
        localStorage.setItem('card', JSON.parse(states))
    }
}


export {localstoreget, localstoresets};