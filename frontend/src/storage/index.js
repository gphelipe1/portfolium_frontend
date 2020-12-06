import { useState, useEffect } from "react";

const project = "@portifolium";
const userIdKey = `${project}/userId`;
const userTypeKey = `${project}/userType`;
const userNameKey = `${project}/userName`;
const userDescriptionKey = `${project}/userDescription`;

export default function Storage() {
  const [userId, setID] = useState(null);
  const [userType, setType] = useState(null);
  const [userName, setName] = useState(null);
  const [userDescription, setDescription] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem(userIdKey);
    const userType = localStorage.getItem(userTypeKey);
    const userName = localStorage.getItem(userNameKey);
    const userDescription = localStorage.getItem(userDescriptionKey);

    setID(userId);
    setType(userType);
    setName(userName);
    setDescription(userDescription);
  }, []);

  const getUserId = () => userId;
  const getUserType = () => userType;
  const getUserName = () => userName;
  const getUserDescription = () => userDescription;

  const setUserId = (id) => {
    setID(id);
    localStorage.setItem(userIdKey, id);
  };

  const setUserType = (type) => {
    setType(type);
    localStorage.setItem(userTypeKey, type);
  };

  const setUserName = (name) => {
    setName(name);
    localStorage.setItem(userNameKey, name);
  };

  const setUserDescription = (description) => {
    setDescription(description);
    localStorage.setItem(userDescriptionKey, description);
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
}
