import React from "react";

const UserContext = React.createContext('JabbaWockeez');
//JabbaWockeez is the default value and can be overriden using value prop in UserProvider, as shown in App.js file

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }

export default UserContext 

