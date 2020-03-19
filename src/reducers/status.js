const status = (state=0,action)=>{
    switch(action.type)
    {
        case 'CHANGE_STATUS':
            return action.payload;
        case 'SET_STATUS_OFF':
            return 0;
        default:
            return 0;
        
    }

}

export default status;