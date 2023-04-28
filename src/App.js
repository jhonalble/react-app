import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from './components/Join';
import Sidebar from './components/Sidebar';
import Active from './components/Active';
import Home from './components/Home';
import Profile from './components/Profile';
import ActivePage from './components/ActivePage';
import Copy from './components/Copy';
import LinkButton from './components/LinkButton';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/linkbutton" element={<LinkButton />}></Route>
          <Route path="/active" element={<Active />}></Route>
          <Route path="/activepage" element={<ActivePage />}></Route>
          <Route path="/copy" element={<Copy />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
