const appState = {
   toast: false,
   toastMsg: '',
   appLoading: false
}

const AppReducer = (state = appState, action) => {
   switch (action.type) {
      case 'SET_SHOW_TOAST':
         return {
            ...state,
            toast: action.payload,
         };
      case 'SET_TOAST_MSG':
         return {
            ...state,
            toastMsg: action.payload,
         };
      case 'SET_APP_Loading':
         return {
            ...state,
            appLoading: action.payload,
         };
      default:
         return state
   }
}

export { AppReducer };