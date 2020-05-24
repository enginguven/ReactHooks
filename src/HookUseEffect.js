import React, { useState, useEffect } from "react";
import axios from "axios";

const UseEffectlement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setLoading(false);
      setUsers(response.data);
    })();
  }, []); //=== in class component equals componentDidMount

  return (
    <div>
      <h3>useEffect</h3>
      <ul>
        <b>{loading ? "Loading" : "Loaded"}</b>
        {!loading && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default UseEffectlement;
