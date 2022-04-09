import PageNavbar from "./PageNavbar";
import Hero from "./Hero";
import "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resources from "./Resources";
import { MantineProvider } from "@mantine/core";
import HomePageContent from "./HomePageContent";

function App() {
  return (
    <div>
      <MantineProvider theme={{ colorScheme: "dark" }}>
        <PageNavbar />
        <Router>
          <Routes>
            <Route path="/" element={<HomePageContent />} />
          </Routes>
        </Router>
      </MantineProvider>
    </div>
  );
}

export default App;
