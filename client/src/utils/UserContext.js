import React from "react";

const StatusContext = React.createContext({
  jwt: "",
  setJwt: () => {}
});

export default StatusContext;