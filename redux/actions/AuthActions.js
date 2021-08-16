const SIGN_IN = 'SIGN_IN'
const SIGN_OUT = 'SIGN_OUT'
const USER_DATA = 'USER_DATA'

const signedIn = (setUserToken) => {
   return {
      type: SIGN_IN,
      payload: setUserToken
   }
}

const logout = () => {
   return {
      type: SIGN_OUT,
      payload: null
   }
}

const getUserData = (data) => {
   return {
      type: USER_DATA,
      payload: data
   }
}

export { signedIn, logout, getUserData }
