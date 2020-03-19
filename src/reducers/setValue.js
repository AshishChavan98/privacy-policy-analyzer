const setValue=(state=[],{type,payload})=>{
    switch(type)
    {
        case 'SET_VALUE':
            return payload;
        default:
            return state;
    }
}

export default setValue;