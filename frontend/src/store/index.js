import { useState, useEffect } from "react";

const project = "@portifolium";

export default () => {
  const [userId, setID] = useState(null);
  const [userType, setType] = useState(null);
  const [userName, setName] = useState(null);
  const [userDescription, setDescription] = useState(null);

  useEffect(() => {}, []);

  const getUserId = () => userId;
  const getUserType = () => userType;
  const getUserName = () => userName;
  const getUserDescription = () => userDescription;

  const setUserId = (id) => {
    setID(id);
    localStorage.setItem(`${project}/userId`, id);
  };

  const setUserType = (type) => {
    setType(type);
    localStorage.setItem(`${project}/userType`, type);
  };

  const setUserName = (name) => {
    setName(name);
    localStorage.setItem(`${project}/userName`, name);
  };

  const setUserDescription = (description) => {
    setDescription(description);
    localStorage.setItem(`${project}/userDescription`, description);
  };

  return {
    getUserId,
    getUserType,
    getUserName,
    getUserDescription,
    setUserId,
    setUserType,
    setUserName,
    setUserDescription,
  };
};
