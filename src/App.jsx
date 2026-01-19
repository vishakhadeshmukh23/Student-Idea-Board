// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import AddIdea from "./pages/AddIdea";

// function App() {
//   const [ideas, setIdeas] = useState([]);

//   return (
//     <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route
//           path="/dashboard"
//           element={<Dashboard ideas={ideas} setIdeas={setIdeas} />}
//         />
//         <Route
//           path="/add"
//           element={<AddIdea ideas={ideas} setIdeas={setIdeas} />}
//         />
//       </Routes>

//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;






import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AddIdea from "./pages/AddIdea";

function App() {
  // 👉 localStorage se data load
  const [ideas, setIdeas] = useState(() => {
    const savedIdeas = localStorage.getItem("ideas");
    return savedIdeas ? JSON.parse(savedIdeas) : [];
  });

  // 👉 jab bhi ideas change ho, save ho jaye
  useEffect(() => {
    localStorage.setItem("ideas", JSON.stringify(ideas));
  }, [ideas]);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={<Dashboard ideas={ideas} setIdeas={setIdeas} />}
        />
        <Route
          path="/add"
          element={<AddIdea ideas={ideas} setIdeas={setIdeas} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
