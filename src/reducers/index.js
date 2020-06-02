const initionState = {
    user: {
        id: null,
        userName: null,
    },
    theme: null,
    autorised: false,
    loading: true,
    error: null,
};

const reducer = (state = initionState, action) => {
    console.log('im here');
    
    console.log(action.type);
    
    switch (action.type) {
        case 'LOGIN':            
            return {
                ...state,
                autorised: true
            }

        default:
            return state;
    }
}

export default reducer;