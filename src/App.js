import "./App.css";
import Homepage from "./pages/Homepage/Homepage";
import Overview from "./pages/Overview/Overview";
import Roll from "./pages/Roll/Roll";
import SetUp from "./pages/SetUp/SetUp";
import Dashboard from "./pages/Dashboard/Dashboard";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/setup" element={<SetUp />} />
          <Route exact path="/overview" element={<Overview />} />
          <Route exact path="/roll" element={<Roll />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

// import "./App.css";
// import Media from "react-media";

// import Homepage from "./pages/Homepage/Homepage";
// import Overview from "./pages/Overview/Overview";
// import Roll from "./pages/Roll/Roll";
// import SetUp from "./pages/SetUp/SetUp";
// import Dashboard from "./pages/Dashboard/Dashboard";

// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<Homepage />} />
//           <Route exact path="/setup" element={<SetUp />} />
//           <Route
//             path="/"
//             element={
//               <Media query="(max-width: 768px)">
//                 {(matches) =>
//                   matches ? (
//                     <Routes>
//                       <Route path="/overview" element={<Overview />} />
//                       <Route path="/roll" element={<Roll />} />
//                       <Route path="*" element={<Navigate to="/roll" />} />
//                     </Routes>
//                   ) : (
//                     <Routes>
//                       <Route path="/dashboard" element={<Dashboard />} />
//                       <Route path="*" element={<Navigate to="/dashboard" />} />
//                     </Routes>
//                   )
//                 }
//               </Media>
//             }
//           />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

export default App;