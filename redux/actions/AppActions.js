const SET_SHOW_TOAST = 'SET_SHOW_TOAST'
const SET_TOAST_MSG = 'SET_TOAST_MSG'
const SET_APP_Loading = 'SET_APP_Loading'

const setShowToast = (state) => {
   return {
      type: SET_SHOW_TOAST,
      payload: state
   }
}

const setToastMsg = (state) => {
   return {
      type: SET_TOAST_MSG,
      payload: state
   }
}

const setAppLoading = (state) => {
   return {
      type: SET_APP_Loading,
      payload: state
   }
}

export { setShowToast, setToastMsg, setAppLoading }
