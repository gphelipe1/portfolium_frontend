import React, { useEffect } from "react";

import storage from "../storage";

import StoreContext from "./context";

const withStore = (Component) => (props) => {
  const myStorage = storage();

  useEffect(() => {}, []);

  return (
    <StoreContext.Provider value={{ ...myStorage }}>
      <Component {...props} />
    </StoreContext.Provider>
  );
};

export default withStore;
