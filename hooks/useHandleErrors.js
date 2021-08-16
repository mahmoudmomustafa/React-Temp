import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShowToast, setToastMsg } from '../redux/actions/AppActions';
import { logout } from '../redux/actions/AuthActions';

function useHandleErrors() {
   const dispatch = useDispatch()
   const [err, setErrorObj] = useState(null)

   useEffect(() => {
      if (err) {
         console.log('from useError', err);
         if (Object.keys(err)[0] != 'line') {
            dispatch(setShowToast(true))

            if (err.message && err.message.includes("Unauthenticated")) {
               dispatch(logout())
            }

            setTimeout(() => {
               dispatch(SetShowToaster(false))
            }, 4000);

            if (err.errors && err.errors[Object.keys(err.errors)]) {
               dispatch(setToastMsg(
                  err.errors[Object.keys(err.errors)[0]]
               ))
            } else if (Object.keys != 0) {
               dispatch(setToastMsg(Object.values(err)[0]))
            } else if (err.message) {
               dispatch(setToastMsg(err.message))
            } else {
               dispatch(setToastMsg("Something went wrong."))
            }
         }
      }
   }, [err]);

   const setError = (data) => setErrorObj(data)

   return [setError]
}

export default useHandleErrors;