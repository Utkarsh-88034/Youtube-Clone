import { SettingsInputCompositeTwoTone } from "@material-ui/icons";
import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet,contentDetails,statistics",
    maxResults: 20,
    key: "AIzaSyBRg6T-_Jzk3BzcttpZBFprYxGNAvWmbTU",
  },
});
