import "./style.css";

const numIterations = 10;
const noteElements = Array.from({ length: numIterations }, (_, index) => (
  <div className="note" key={index}>
    <h1>This is the note title {numIterations}</h1>
    <p>This is the note content</p>
  </div>
));

export default function main_section() {
  return (
    <section>
      <div className="note">
        <h1>This is the note title {numIterations}</h1>
        <p>This is the note content</p>
      </div>
      {noteElements}
    </section>
  );
}
