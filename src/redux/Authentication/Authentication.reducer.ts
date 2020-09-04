import {
  User
} from "../../services/Authentication.service";
import { Action } from "..";

declare interface AuthenticationState {
  profile?: User
}
export default function (
  state: AuthenticationState = {},
  action: Action
): AuthenticationState {
  switch (action.type) {
    case 'AUTHENTICATION_LOGIN':
      return { profile: action.payload }

    case 'AUTHENTICATION_LOGOUT':
      return {}
    
    default:
      return state
  }
}