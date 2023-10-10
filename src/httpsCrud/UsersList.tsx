import { useEffect, useState } from "react";
import Apliclient from "./services/Api-client";
import ClientServices, { User } from "./services/Client-services";

const UsersList = () => {
  const [users, setuser] = useState<User[]>([]);
  const [Error, setError] = useState("");
  const [loading, setloader] = useState(false);
  useEffect(() => {
    setloader(true);
    ClientServices.getAllUsers()
      .then((res) => {
        setuser(res.data);
        setloader(false);
      })
      .catch((err) => {
        setError(err.message);
        setloader(false);
      });
  }, []);

  const onDelete = (item: User) => {
    const orignalusers = [...users];
    setuser(users.filter((u) => u.id !== item.id));
    ClientServices.deleteUser(item.id).catch((err) => {
      setError(err.message);
      setuser(orignalusers);
    });
  };
  const handleOnAdd = () => {
    const newObject = { id: 0, name: "tayyab chohan" };
    setuser([newObject, ...users]);
    ClientServices.addUser(newObject).then((result) =>
      setuser([result.data, ...users])
    );
  };
  const onUpdate = (item: User) => {
    const updatedUser = { ...item, name: item.name + "!" };
    setuser(users.map((u) => (u.id === item.id ? updatedUser : u)));
    ClientServices.updateUser(item.id, updatedUser).catch((err) =>
      setError(err.message)
    );
  };
  return (
    <>
      {Error && <p className="text-danger">{Error}</p>}
      {loading && <div className="spinner-border"></div>}
      <div className="mt-5">
        <button onClick={() => handleOnAdd()}>Add</button>
        <ul className="list-group">
          {users.map((item) => (
            <li
              className="list-group-item d-flex justify-content-between"
              key={item.id}
            >
              {item.name}{" "}
              <div>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(item)}
                >
                  Delete
                </button>
                {"   "}
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => onUpdate(item)}
                >
                  Update
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UsersList;
