import React, { useState, useEffect } from "react";
import axios from "axios";
import axiosCancel from "axios-cancel";

axiosCancel(axios, {
  debug: false,
});
const requestId = "axios_request";
function useAxios(query) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users",
          { requestId: requestId }
        );
        setResults(
          response.data.filter(
            (user) => user.name.toLowerCase().indexOf(query) !== -1
          )
        );
        setLoading(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Request Cancelled With Axios Button");
        } else {
          console.log("some other reason" + err);
        }
      }
    };
    getData();
  }, [query]);
  return [results, loading];
}

export default function UseCustomHookElement() {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [results, loading] = useAxios(query);
  return (
    <div>
      <h1>Async React Hooks</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(search);
        }}
      >
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={(e) => axios.cancel(requestId)}>Axios Cancel</button>
        <button type="submit">Search</button>
      </form>
      <br />
      {loading ? (
        <h2>Loading with AXIOOOS</h2>
      ) : (
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
