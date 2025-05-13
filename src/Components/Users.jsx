import { useState } from "react";
import usersList from "../data/users.json";

// Bootstrap role badge classes
const roleClasses = {
  admin: "badge bg-danger text-light mb-2",
  user: "badge bg-success text-light mb-2",
  moderator: "badge bg-warning text-dark mb-2",
};

const Users = () => {
  const [query, setQuery] = useState("");

  const filteredUsers = usersList.filter((user) =>
    user.email.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container py-4">
      {/* Search bar */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by email"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-dark">Search</button>
        </div>
      </div>

      {/* User cards */}
      <div className="row">
        {filteredUsers.map((user) => (
          <div key={user.id} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 text-center p-3">
              <img
                src={user.image}
                alt={user.username}
                className="rounded-circle mx-auto mb-3"
                width="80"
                height="80"
              />
              <span className={roleClasses[user.role]}>{user.role}</span>
              <h5 className="mt-2">
                {user.firstName} {user.lastName}
              </h5>
              <p className="mb-1">{user.email}</p>
              <p className="mb-1">{user.phone}</p>
              <p className="mb-0">{user.birthDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
