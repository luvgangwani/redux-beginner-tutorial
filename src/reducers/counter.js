const counterReducer = (state = 0, action) => { // based on the name of the action change the state

    switch(action.type) {
        case 'INCREMENT':
        return state + action.payload;
      
        case 'DECREMENT':
          return state - 1;

        default:
            return state;

    }
}

export default counterReducer;