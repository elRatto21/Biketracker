import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import './App.css'
import CreateBike from "./components/bikeView/create/CreateBike";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="" element={<Home />} />

          <Route path="/add" element={<CreateBike />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
