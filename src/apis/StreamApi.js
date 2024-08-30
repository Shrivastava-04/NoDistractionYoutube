import axios from "axios";
const Stream = async (videoId) => {
  const options1 = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/dl",
    params: { id: videoId },
    headers: {
      "x-rapidapi-key": "722c88aee8msh27e39558afaf886p1bc4f8jsn8f657bb6fbc0",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  const options2 = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/dl",
    params: { id: videoId },
    headers: {
      "x-rapidapi-key": "37d2767a8cmsh8713a1de381fc3fp12c606jsn2d678e5beb26",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  const options3 = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/dl",
    params: { id: videoId },
    headers: {
      "x-rapidapi-key": "f1b560076amsh51de144adad25b8p188c50jsnc5188ed24a04",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  try {
    const response1 = await axios.request(options1);
    return response1.data.adaptiveFormats[0].url;
  } catch (error1) {
    console.log("First API failed:", error1.message);

    try {
      const response2 = await axios.request(options2);
      return response2.data.adaptiveFormats[0].url;
    } catch (error2) {
      console.log("Second API failed:", error2.message);

      try {
        const response3 = await axios.request(options3);
        return response3.data.adaptiveFormats[0].url;
      } catch (error3) {
        console.log("Third API also failed:", error3.message);
        setError("All three API calls failed");
        return null;
      }
    }
  }
};

export default Stream;

// import { useEffect, useState } from "react";

// const Stream = (item) => {
//   const [myData, setMyData] = useState(null);
//   const [error, setError] = useState(null);

//   const options1 = {
//     method: "GET",
//     url: "https://yt-api.p.rapidapi.com/dl",
//     params: { id: item },
//     headers: {
//       "x-rapidapi-key": "722c88aee8msh27e39558afaf886p1bc4f8jsn8f657bb6fbc0",
//       "x-rapidapi-host": "yt-api.p.rapidapi.com",
//     },
//   };

//   const options2 = {
//     method: "GET",
//     url: "https://yt-api.p.rapidapi.com/dl",
//     params: { id: item },
//     headers: {
//       "x-rapidapi-key": "37d2767a8cmsh8713a1de381fc3fp12c606jsn2d678e5beb26",
//       "x-rapidapi-host": "yt-api.p.rapidapi.com",
//     },
//   };

//   const options3 = {
//     method: "GET",
//     url: "https://yt-api.p.rapidapi.com/dl",
//     params: { id: item },
//     headers: {
//       "x-rapidapi-key": "f1b560076amsh51de144adad25b8p188c50jsnc5188ed24a04",
//       "x-rapidapi-host": "yt-api.p.rapidapi.com",
//     },
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response1 = await axios.request(options1);
//         setMyData(response1.data.adaptiveFormats[0].url);
//       } catch (error1) {
//         console.log("First API failed:", error1.message);

//         try {
//           const response2 = await axios.request(options2);
//           setMyData(response2.data.adaptiveFormats[0].url);
//         } catch (error2) {
//           console.log("Second API failed:", error2.message);

//           try {
//             const response3 = await axios.request(options3);
//             setMyData(response3.data.adaptiveFormats[0].url);
//             console.log(response3.data.adaptiveFormats[0].url);
//           } catch (error3) {
//             console.log("Third API also failed:", error3.message);
//             setError("All three API calls failed");
//           }
//         }
//       }
//     };

//     fetchData();
//   }, [item]); // Ensure that this effect runs when `item` changes

//   return error ? error : myData;
// };

// export default Stream;