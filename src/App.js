import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import { bg, img, logo } from "./images";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Public Sans', sans-serif",
    logo: logo,
    img: img,
    primaryColor: "#F72585",
    secondaryColor: "#3A0CA3",
    accentColor: "#fff",
    heading: "Now  hiring",
    headingBg: bg,
    postDetails: {
      postName: "Graphic  Designer",
      info: "Join our creative team and be part of our story",
    },

    applyNow: {
      label: "Apply Now",
      email: "hello@rellygreatsite.com",
    },
  });

  return (
    <>
      <div
        style={{
          "--primaryColor": allData.primaryColor,
          "--secondaryColor": allData.secondaryColor,
          "--accentColor": allData.accentColor,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
