import React, { useEffect, useState } from "react";
import Axios from "axios";
function App() {
  const [profileData, setProfileData] = useState("");
  useEffect(() => {
    Axios.get("https://api.randomuser.me/").then((res) => {
      console.log(res, "Res");

      setProfileData(res?.data?.results);
      console.log(res, "Res yugihu");
    });
  }, []);
  console.log(profileData, "DATA");
  //material-ui.com/getting-started/templates/blog
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex justify-between items-center text-white boarded border-white p-5">
        <div className="">SUBSCRIBE</div>
        <div>BLOG</div>
        <div>SIGNUP</div>
      </div>
      <div>
        <div className="flex justify-between items-center text-white p-2">
          <div>Technology</div>
          <div>Design</div>
          <div>Culture</div>
          <div>Business</div>
          <div>Politics</div>
          <div>Opinion</div>
          <div>Science</div>
          <div>Health</div>
          <div>Style</div>
          <div>Travel</div>
        </div>
      </div>
      {profileData &&
        profileData.map((val) => (
          <div>
            <div className="m-10 ">
              <div
                style={{
                  backgroundImage: `url(${val?.picture?.large})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100%",
                }}
                className="text-white h-64 rounded-xl bg-gray-700 bordered border-8 border-white p-12"
              >
                <div className="font-bold text-3xl">
                  Title of a longer featured blog post
                </div>
                <div className="font-normal text-xl">
                  Multiple litres of text form the lede, informating new readers
                  quickly and efficiently about what's most intersting in this
                  post's contents.
                </div>
              </div>
            </div>
            <div className="flex m-10 ">
              <div className="flex p-5 mr-10 bg-gray-700 text-white rounded-xl bordered border-8 border-white">
                <div>
                  <div className="font-bold text-3xl">Featured post</div>
                  <div className="font-normal text-xl">Nov 12</div>
                  <div className="font-normal text-xl">
                    This is wider card with supporting text below as a natural
                    lead-in to additional content.{" "}
                  </div>
                </div>
                <div>
                  <img
                    className="w-64"
                    src={val?.picture?.large}
                    alt="profile Pic"
                  />
                </div>
              </div>
              <div className="flex ml-10 p-5 bg-gray-700 text-white rounded-xl bordered border-8 border-white">
                <div>
                  <div className="font-bold text-3xl">Post title</div>
                  <div className="font-normal text-xl">Nov 11</div>
                  <div className="font-normal text-xl">
                    This is wider card with supporting text below as a natural
                    lead-in to additional content.{" "}
                  </div>
                </div>
                <div>
                  <img
                    className="w-64"
                    src={val?.picture?.large}
                    alt="profile Pic"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
