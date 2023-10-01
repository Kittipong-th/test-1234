import "../style.css";

// const noteElements = Array.from({ length: numIterations }, (_, index) => (
//   <div className="note" key={index}>
//     <h1>This is the note title {numIterations}</h1>
//     <p>This is the note content</p>
//   </div>
// ));

export default function main_section({ note }) {
  console.log(note);
  return (
    <div className="note">
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
