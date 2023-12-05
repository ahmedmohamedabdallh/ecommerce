export const cartReducer=(state,action)=>{
    switch (action.type) {
        case 'plus':
          return state+1
          case 'minus':
            return state-1
            
      }
}