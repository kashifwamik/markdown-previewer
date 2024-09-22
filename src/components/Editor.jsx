const Editor = ({ markdown, setMarkdown }) => {
  const handleOnChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <section>
      <h1 className="heading ed">Editor</h1>
      <textarea id="editor" value={markdown} onChange={handleOnChange} />;
    </section>
  );
};
export default Editor;
