import { getUsers, filterUsers } from "../model/user.model.js";

export const getAllUsers = (req, res) => {
  const { name } = req.query;

  if (name) {
    return res.json(filterUsers(name));
  }

  res.json(getUsers());
};