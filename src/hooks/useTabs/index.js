import React from "react";
import { useTabs } from "./useTabs";

const content = [
  {
    tab: "Section 1",
    content: "the content of the Section1",
  },
  {
    tab: "Section 2",
    content: "the content of the Section2",
  },
];

const App = () => {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default App;
