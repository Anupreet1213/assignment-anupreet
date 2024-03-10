import { createContext } from "react";
import firebase from "firebase/compat/app";

interface UserContextType {
  loggedUser: firebase.User | null;
}

const UserContext = createContext<UserContextType>({
  loggedUser: null,
});

export default UserContext;
