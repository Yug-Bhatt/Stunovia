import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import MyFeed from "./pages/MyFeed";
import Internships from "./pages/Internships";
import Hackathons from "./pages/Hackathons";
import ResearchPapers from "./pages/ResearchPapers";
import GitHub from "./pages/GitHub";
import Courses from "./pages/Courses";
import Bookmarks from "./pages/Bookmarks";
import AIAssistant from "./pages/AIAssistant";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Application */}
        <Route path="/" element={<MainLayout />}>

          {/* Dashboard */}
          <Route index element={<Dashboard />} />

          <Route path="feed" element={<MyFeed />} />

          <Route path="internships" element={<Internships />} />

          <Route path="hackathons" element={<Hackathons />} />

          <Route path="research-papers" element={<ResearchPapers />} />

          <Route path="github" element={<GitHub />} />

          <Route path="courses" element={<Courses />} />

          <Route path="bookmarks" element={<Bookmarks />} />

          <Route path="ai-assistant" element={<AIAssistant />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default App;