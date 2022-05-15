import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Table } from "reactstrap";
import "./styles.css";
import { useState } from "react";

function fetchUsers() {
  const url = `https://reqres.in/api/users`;
  return fetch(url)
    .then((res) => res.json())
    .then((res) => res.data);
}

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <h1>
        ReactStrap Table &nbsp;
        <Button
          onClick={() => {
            fetchUsers().then((users) => {
              setUsers(users);
            });
          }}
        >
          Get Users
        </Button>
      </h1>

      <UserTable users={users} />
    </div>
  );
}

const UserTable = ({ users }) => {
  return (
    <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default App;
