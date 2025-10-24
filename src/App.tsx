import { Banner } from "./components/Banner";
import { Counter } from "./components/Counter";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Banner />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
