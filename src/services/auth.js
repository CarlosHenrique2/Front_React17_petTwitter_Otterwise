import client from "../providers/client";

export const login = async (data) => await client.post("/login", data);

export const signup = async (data) => await client.post("/signup", data);

export const getFromStorage = (key) => JSON.parse(localStorage.getItem(key));

export const setInStorage = (key, data) =>
  localStorage.setItem(key, JSON.stringify(data));
