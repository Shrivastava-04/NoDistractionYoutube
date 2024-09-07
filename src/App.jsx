import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import PlayPage from "./components/PlayPage";
import HomePage11 from "./components/Playground";
import Filter from "./components/Filter";
import About from "./components/About";

export default function App() {
  return (
    <>
      <div className="m-0 dark:bg-cyan-950 dark:text-gray-300 min-h-screen min-w-fit bg-gray-100 text-black">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/playground" element={<HomePage11 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}
