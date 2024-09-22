import { marked } from "marked";
const Previewer = ({ markdown }) => {
  return (
    <section>
      <h1 className="heading pr">Previewer</h1>
      <div
        id="preview"
        dangerouslySetInnerHTML={{
          __html: marked.parse(markdown, { breaks: true }),
        }}
      />
    </section>
  );
};
export default Previewer;
