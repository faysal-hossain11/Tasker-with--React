import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskBoard from "./components/Task/TaskBoard/TaskBoard";
import Hero from "./components/hero/hero";

function App() {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
