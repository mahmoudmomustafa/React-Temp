import { AUTHENDPOINTS } from "../Endpoints/AuthEndpoints";
import { Network } from "../Network";

export class AuthServices {
   static login(values) {
      return Network.fetch(AUTHENDPOINTS.login.url, {
         body: JSON.stringify(values),
         headers: {
            'content-type': 'application/json',
         },
         method: AUTHENDPOINTS.login.method,
      });
   }
}
