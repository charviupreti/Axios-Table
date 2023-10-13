import Axios from "axios";
import { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://dummyjson.com/users")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.users);
        }
      })
      .catch((err) => alert(err));
  }, []);

  const Table = () => (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>S. no</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.id}</td>
              <td>
                <img src={val.image} alt="" height={100} />
              </td>
              <td>{val.firstName}</td>
              <td>{val.lastName}</td>
              <td>{val.gender}</td>
              <td>{val.email}</td>
              <td>{val.username}</td>
              <td>{val.domain}</td>
              <td>{val.ip}</td>
              <td>{val.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return <div>{Table()}</div>;
}

export default Table;
