import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import MainContent from "./Components/MainContent";
import youtube from "./api/youtube";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VideoPlayer from "./Components/VideoPlayer";
import { useEffect } from "react";
import HomeVIdeo from "./Components/HomeVIdeo";

function App() {
  const [videos, setVideos] = useState([]);
  const [homeVideos, setHomeVideos] = useState([]);
  const [homeFlag, setHomeFlag] = useState(true);
  const [playVideoId, setPlayVidId] = useState("");

  async function searchSubmit(searchTerm) {
    const res = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 20,
        key: "AIzaSyBRg6T-_Jzk3BzcttpZBFprYxGNAvWmbTU",
        q: searchTerm,
      },
    });
    console.log(res.data.items);
    setVideos(res.data.items);
  }
  async function getHomeVid() {
    const res = await youtube.get("videos", {
      params: {
        part: "snippet",
        maxResults: 50,
        chart: "mostPopular",
        key: "AIzaSyBRg6T-_Jzk3BzcttpZBFprYxGNAvWmbTU",
      },
    });
    console.log(res.data.items);
    setHomeVideos(res.data.items);
  }
  useEffect(() => {
    getHomeVid();
  }, []);

  function videoClick(id) {
    console.log("home log " + id);
    setPlayVidId(id);
    setHomeFlag(true);
  }
  function videoSearchClick(id) {
    setPlayVidId(id);
    setHomeFlag(false);
  }

  return (
    <>
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <Header searchSubmit={searchSubmit} />
              <div className="app_main">
                <Sidebar className="main-sidebar" />
                <HomeVIdeo videoClick={videoClick} homeVid={homeVideos} />
              </div>
            </>
          )}
        />
        <Route
          path="/search"
          render={() => (
            <>
              <Header searchSubmit={searchSubmit} />
              <div className="app_main">
                <Sidebar className="main-sidebar" />
                <MainContent
                  videoData={videos}
                  videoSearchClick={videoSearchClick}
                />
              </div>
            </>
          )}
        />
        <Route
          path="/video"
          render={() => (
            <>
              <Header searchSubmit={searchSubmit} />
              {homeFlag ? (
                <VideoPlayer
                  videos={homeVideos}
                  playVidId={playVideoId}
                  flag={homeFlag}
                />
              ) : (
                <VideoPlayer videos={videos} playVidId={playVideoId} />
              )}
            </>
          )}
        />
      </Router>
    </>
  );
}

export default App;
