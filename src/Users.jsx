import usersList from "./data/users.json";
const roleColors = {
  admin: 'bg-red-500',
  user: 'bg-green-500',
  moderator: 'bg-yellow-500'
};
const Users = () => {
  return usersList.map((user) => (
    <div className="border p-4 rounded-lg shadow-md w-64 flex flex-col items-center">
      <span
        className={`text-white px-2 py-1 rounded-full text-xs mb-2 ${roleColors[user.role]}`}
      >
        {user.role}
      </span>
      <p className="font-bold">{user.firstName + ' ' + user.lastName}</p>
      <p className="text-sm">{user.email}</p>
      <p className="text-sm">{user.phone}</p>
      <p className="text-sm">{user.birthDate}</p>
    </div>
  ));
};

export default Users;
