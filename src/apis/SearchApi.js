// // import axios from "axios";
// // import { useEffect, useState } from "react";

// // const Search = (item) => {
// //   const [myData, setMyData] = useState([]);
// //   const [error, setError] = useState(null);

// //   const options1 = {
// //     method: "GET",
// //     url: "https://yt-api.p.rapidapi.com/search",
// //     params: {
// //       query: item[0],
// //       duration: item[1],
// //       sort_by: item[2],
// //       upload_date: item[3],
// //     },
// //     headers: {
// //       "x-rapidapi-key": "722c88aee8msh27e39558afaf886p1bc4f8jsn8f657bb6fbc0",
// //       "x-rapidapi-host": "yt-api.p.rapidapi.com",
// //     },
// //   };

// //   const options2 = {
// //     method: "GET",
// //     url: "https://yt-api.p.rapidapi.com/search",
// //     params: {
// //       query: item[0],
// //       duration: item[1],
// //       sort_by: item[2],
// //       upload_date: item[3],
// //     },
// //     headers: {
// //       "x-rapidapi-key": "37d2767a8cmsh8713a1de381fc3fp12c606jsn2d678e5beb26",
// //       "x-rapidapi-host": "yt-api.p.rapidapi.com",
// //     },
// //   };

// //   const options3 = {
// //     method: "GET",
// //     url: "https://yt-api.p.rapidapi.com/search",
// //     params: {
// //       query: item[0],
// //       duration: item[1],
// //       sort_by: item[2],
// //       upload_date: item[3],
// //     },
// //     headers: {
// //       "x-rapidapi-key": "f1b560076amsh51de144adad25b8p188c50jsnc5188ed24a04",
// //       "x-rapidapi-host": "yt-api.p.rapidapi.com",
// //     },
// //   };

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response1 = await axios.request(options1);
// //         // console.log(response1);
// //         setMyData(response1.data.data);
// //       } catch (error1) {
// //         console.log("First API failed:", error1.message);

// //         try {
// //           const response2 = await axios.request(options2);
// //           // console.log(response2);
// //           setMyData(response2.data.data);
// //         } catch (error2) {
// //           console.log("Second API failed:", error2.message);

// //           try {
// //             const response3 = await axios.request(options3);
// //             setMyData(response3.data.data);
// //           } catch (error3) {
// //             console.log("Third API also failed:", error3.message);
// //             setError("All three API calls failed");
// //           }
// //         }
// //       }
// //     };

// //     fetchData();
// //   }, [item]); // Ensure that this effect runs when `item` changes

// //   return error ? error : myData;
// // };

// // export default Search;
// import axios from "axios";
// import { useEffect, useState } from "react";

// const Search = (item) => {
//   const [myData, setMyData] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // To track the loading state

//   const apiOptions = [
//     {
//       method: "GET",
//       url: "https://yt-api.p.rapidapi.com/search",
//       params: {
//         query: item[0],
//         duration: item[1],
//         sort_by: item[2],
//         upload_date: item[3],
//       },
//       headers: {
//         "x-rapidapi-key": "722c88aee8msh27e39558afaf886p1bc4f8jsn8f657bb6fbc0",
//         "x-rapidapi-host": "yt-api.p.rapidapi.com",
//       },
//     },
//     {
//       method: "GET",
//       url: "https://yt-api.p.rapidapi.com/search",
//       params: {
//         query: item[0],
//         duration: item[1],
//         sort_by: item[2],
//         upload_date: item[3],
//       },
//       headers: {
//         "x-rapidapi-key": "37d2767a8cmsh8713a1de381fc3fp12c606jsn2d678e5beb26",
//         "x-rapidapi-host": "yt-api.p.rapidapi.com",
//       },
//     },
//     {
//       method: "GET",
//       url: "https://yt-api.p.rapidapi.com/search",
//       params: {
//         query: item[0],
//         duration: item[1],
//         sort_by: item[2],
//         upload_date: item[3],
//       },
//       headers: {
//         "x-rapidapi-key": "f1b560076amsh51de144adad25b8p188c50jsnc5188ed24a04",
//         "x-rapidapi-host": "yt-api.p.rapidapi.com",
//       },
//     },
//   ];

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Set loading to true when starting the fetch
//       setError(null); // Clear any previous error

//       for (let i = 0; i < apiOptions.length; i++) {
//         try {
//           const response = await axios.request(apiOptions[i]);
//           setMyData(response.data.data);
//           setLoading(false); // Stop loading once data is fetched
//           return; // Exit the loop on success
//         } catch (error) {
//           console.log(`API ${i + 1} failed:`, error.message);
//           if (i === apiOptions.length - 1) {
//             setError("All three API calls failed"); // Set error after the last attempt
//             setLoading(false); // Stop loading after all retries failed
//           }
//         }
//       }
//     };

//     if (item[0]) {
//       // Ensure that the query is valid before making API calls
//       fetchData();
//     } else {
//       setLoading(false); // If no search term, don't stay in loading state
//     }
//   }, [item]); // The effect runs when the `item` (query) changes

//   if (loading) return "Loading..."; // Optionally, handle loading state
//   if (error) return error; // Return error if all APIs failed

//   return myData; // Return the final data if successful
// };

// export default Search;
import axios from "axios";
import { useEffect, useState } from "react";

const Search = async (item) => {
  // const [myData, setMyData] = useState([]);
  // const [error, setError] = useState(null);

  const options1 = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/search",
    params: {
      query: item[0],
      duration: item[1],
      sort_by: item[2],
      upload_date: item[3],
    },
    headers: {
      "x-rapidapi-key": "722c88aee8msh27e39558afaf886p1bc4f8jsn8f657bb6fbc0",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  const options2 = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/search",
    params: {
      query: item[0],
      duration: item[1],
      sort_by: item[2],
      upload_date: item[3],
    },
    headers: {
      "x-rapidapi-key": "37d2767a8cmsh8713a1de381fc3fp12c606jsn2d678e5beb26",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  const options3 = {
    method: "GET",
    url: "https://yt-api.p.rapidapi.com/search",
    params: {
      query: item[0],
      duration: item[1],
      sort_by: item[2],
      upload_date: item[3],
    },
    headers: {
      "x-rapidapi-key": "f1b560076amsh51de144adad25b8p188c50jsnc5188ed24a04",
      "x-rapidapi-host": "yt-api.p.rapidapi.com",
    },
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  try {
    const response1 = await axios.request(options1);
    // setMyData(response1.data.data); // If successful, set data and return early
    return response1.data.data;
  } catch (error1) {
    console.log("First API failed:", error1.message);

    try {
      const response2 = await axios.request(options2);
      // setMyData(response2.data.data); // If the second API works, set data
      return response2.data.data;
    } catch (error2) {
      console.log("Second API failed:", error2.message);

      try {
        const response3 = await axios.request(options3);
        // setMyData(response3.data.data); // If the third API works, set data
        return response3.data.data;
      } catch (error3) {
        console.log("Third API also failed:", error3.message);
        // setError("All three API calls failed"); // All APIs failed
        return [];
      }
    }
  }
};

//     // if (item && item[0]) {
//     // Ensure that the query is valid before making API calls
//     fetchData();
//     // }
//   }, [item]); // The effect runs when the `item` (query) changes

//   return error ? error : myData; // Return error if all failed, otherwise return data
// };

export default Search;
