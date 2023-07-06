import axios from "axios";
import moment from "moment";
import { useState } from "react";
import "./Youtube.scss";
const YoutubeSreach = () => {
  const [video, setVideos] = useState([]);
  let [query, setQuery] = useState("");
  const handleSearch = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "5",
        key: "AIzaSyDWHCiakpjqUoIkeel9Qn3aHkTqAwM156c",
        type: "video",
        q: query,
      },
    });
    console.log(res);
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      console.log(res.data);
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;
          result.push(object);
        });
      }
      console.log(result);
      setVideos(result);
    }
  };
  return (
    <div className="sreach-container">
      <input value={query} onChange={(e) => setQuery(e.target.value)}></input>
      <button onClick={handleSearch}>Sreach</button>

      {video &&
        video.length > 0 &&
        video.map((item) => {
          return (
            <div className="youtube-result">
              <div className="left">
                <iframe
                  className="yt-iframe"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="Ngày 1 VCS Hoàng Hôn: Lý do TW sẽ đi thế giới cùng SE- No EGO No Siêu Biến Số. MBE quá non trước TS."
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <h2 className="title">{item.title}</h2>
                <h5 className="created-at">
                  Created At:
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss a")}
                </h5>
                <h3 className="author">Author:{item.author}</h3>
                <h4 className="description">{item.description}</h4>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default YoutubeSreach;
// {
//   "kind": "youtube#searchListResponse",
//   "etag": "naFoVpTokUfsNHS0R1AVRDuUuhM",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "VN",
//   "pageInfo": {
//     "totalResults": 1000000,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "pXZ0ziTI1kZOLlRKGUzMybTjE2s",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "rze8QYwWGMs"
//       },
//       "snippet": {
//         "publishedAt": "2023-06-19T18:23:34Z",
//         "channelId": "UCz97F7dMxBNOfGYu3rx8aCw",
//         "title": "KRAVEN THE HUNTER – Official Red Band Trailer (HD)",
//         "description": "Once you're on his list, there's only one way off. Aaron Taylor-Johnson is #KravenTheHunter – watch the red band trailer now.",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/rze8QYwWGMs/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/rze8QYwWGMs/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/rze8QYwWGMs/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Sony Pictures Entertainment",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-06-19T18:23:34Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "MX_eAc1HsUZXHwmXCz2jhSoTysw",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "Tp_YZNqNBhw"
//       },
//       "snippet": {
//         "publishedAt": "2023-04-03T01:02:26Z",
//         "channelId": "UCvC4D8onUfXzvjTOM-dBfEA",
//         "title": "Marvel Studios’ Secret Invasion | Official Trailer | Disney+",
//         "description": "Who do you trust? Marvel Studios' Secret Invasion, an Original series, is streaming June 21 on Disney+. ▻ Watch Marvel on ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/Tp_YZNqNBhw/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Marvel Entertainment",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-04-03T01:02:26Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "qIVMgE-s7jbjpsN1pUiIELOtDD8",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "iuk77TjvfmE"
//       },
//       "snippet": {
//         "publishedAt": "2023-04-11T12:46:57Z",
//         "channelId": "UCvC4D8onUfXzvjTOM-dBfEA",
//         "title": "Marvel Studios’ The Marvels | Teaser Trailer",
//         "description": "Teaming up changes e̶v̶e̶r̶y̶t̶h̶i̶n̶g̶ everyone. Captain Marvel, Ms. Marvel and Monica Rambeau return in Marvel ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/iuk77TjvfmE/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/iuk77TjvfmE/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/iuk77TjvfmE/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Marvel Entertainment",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-04-11T12:46:57Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "7AhzXw1vROBmSoDfdRyV5ywb6T0",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "Os4UD4JKETw"
//       },
//       "snippet": {
//         "publishedAt": "2023-06-23T20:50:12Z",
//         "channelId": "UC7yRILFFJ2QZCykymr8LPwA",
//         "title": "Secret Invasion: Agent Ross SKRULL FROM THE START? (How To Test ALL Marvel Heroes)",
//         "description": "Secret Invasion's opening scene confirms that Agent Everett Ross is a Skrull… but for how long? Erik Voss has a test! To get ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/Os4UD4JKETw/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/Os4UD4JKETw/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/Os4UD4JKETw/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "New Rockstars",
//         "liveBroadcastContent": "none",
//         "publishTime": "2023-06-23T20:50:12Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "XrY34NKTn9WYDTp-Lk6OUdwMg0k",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "BKviRM0KF2A"
//       },
//       "snippet": {
//         "publishedAt": "2022-04-01T13:08:17Z",
//         "channelId": "UCA0MDADBWmCFro3SXR5mlSg",
//         "title": "AVENGERS: ENDGAME All Movie Clips - Final Battle (2019)",
//         "description": "Watch the official clip compilation for Avengers 4: Endgame, an action movie starring Robert Downey Jr., Chris Evans and Chris ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/BKviRM0KF2A/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/BKviRM0KF2A/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/BKviRM0KF2A/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Entertainment Access",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-04-01T13:08:17Z"
//       }
//     }
//   ]
// }
