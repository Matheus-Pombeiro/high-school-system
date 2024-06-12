import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import NewStudent from "./pages/NewStudent";
import DefaultPage from "./components/DefaultPage";

const App = () => {
  return (
    <BrowserRouter >
      <Header />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="new-student" element={<NewStudent />} />
        </Route>

        <Route path="*" element={<h1>Not Found Page</h1>} />
      </Routes>

    </BrowserRouter>
  );
};

export default App;