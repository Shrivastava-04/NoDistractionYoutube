import { Route, Router, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import PlayPage from "./components/PlayPage";
import HomePage11 from "./components/Playground";

export default function App() {
  return (
    <>
      <div className="m-0  min-h-screen min-w-fit bg-cyan-950">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/play" element={<PlayPage />} />
          <Route path="/playground" element={<HomePage11 />} />
        </Routes>
      </div>
    </>
  );
}
