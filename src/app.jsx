import Header from "./components/header";
import Main_section from "./components/main_section";
import Footer from "./components/footer";
import { notes } from "./notes";

export default function App() {
  console.log(notes);
  return (
    <>
      <Header />
      <section>
        {notes.map((note, index) => (
          <Main_section note={note} key={index} />
        ))}
      </section>

      <Footer />
    </>
  );
}
