import "./App.css";
import defaultMarkdown from "./defaultMarkdown";
import { useState } from "react";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  return (
    <div className="app">
      <Editor markdown={markdown} setMarkdown={setMarkdown}/>
      <Previewer markdown={markdown} />
    </div>
  );
}

export default App;
