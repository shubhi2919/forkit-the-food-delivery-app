import { createContext } from "react"
const UserContext = createContext({
    loggedInuser: "Default User Value"
});

export default UserContext;