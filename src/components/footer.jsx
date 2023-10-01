import "../style.css";
// if js can't create html value;
const hello = <h1>Hello</h1>;
export default function footer() {
  return (
    <footer>
      {hello}
      <p>copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
