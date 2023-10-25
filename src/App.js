import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.components";
import Navigation from "./routes/navigation/navigation.component";



const App = () => {
  return (
    <Routes>
      <Route  path="/" element={<Navigation/>}>
        <Route index element={<Home />} />
        <Route path="shop" />
      
      </Route>
    </Routes>
  );
};

export default App;
