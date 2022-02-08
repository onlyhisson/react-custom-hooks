import React from "react";
import { useNotification } from "./useNotification";

const App = () => {
  const triggerNotif = useNotification("Notification Title", {
    body: "Notification Body",
  });
  return (
    <div className="App">
      <button onClick={triggerNotif}>Hi</button>
    </div>
  );
};

export default App;
