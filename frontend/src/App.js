import "./App.css";
import DrawerLeft from "./component/Drawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TakeNote from "./component/TakeNote";
import ListNote from "./component/ListofNote";
import SWRList from "./component/SWR/index";
import ReactHookForm from "./component/ReactHookForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <DrawerLeft />
          <Routes>
            <Route exact path="/" element={<TakeNote />} />
            <Route path="/takenote" element={<TakeNote />} />
            <Route path="/listnote" element={<ListNote />} />
            <Route path="/useswr" element={<SWRList />} />
            <Route path="/reacthookform" element={<ReactHookForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
