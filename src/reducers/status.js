const status = (state=false,action)=>{
    switch(action.type)
    {
        case 'CHANGE_STATUS':
            return true;
        default:
            return false;
        
    }
    return false;

}

export default status;