const users = [
  { name: "Rahul" },
  { name: "Amit" },
  { name: "Neha" }
];

export const getUsers = () => users;

export const filterUsers = (name) => {
  return users.filter(u =>
    u.name.toLowerCase().includes(name.toLowerCase())
  );
};