import React from "react";
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });

  console.log(`Loading: ${loading}`);
  console.log(`Data: ${JSON.stringify(data)}`);
  console.log(`Error: ${JSON.stringify(error)}`);

  return (
    <div className="App">
      <h1>{loading ? "Loading..." : "hi"}</h1>
      <p>{data ? `${data.status} : ${data.status_message}` : `Error`}</p>

      {loading ? null : <button onClick={refetch}>Refetch</button>}
    </div>
  );
};

export default App;
