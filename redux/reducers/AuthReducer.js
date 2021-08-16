const initStates = {
   isSignout: false,
   userToken: null,
   data: {},
}

const AuthReducer = (state = initStates, action) => {
   switch (action.type) {
      case 'SIGN_IN':
         return {
            ...state,
            isSignout: false,
            userToken: action.payload,
         };
      case 'SIGN_OUT':
         return {
            ...state,
            isSignout: true,
            userToken: null,
            data: []
         };
      case 'USER_DATA':
         return {
            ...state,
            data: action.payload
         };
      default:
         return state
   }
}

export { AuthReducer };
