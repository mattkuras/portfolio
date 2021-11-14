import React, {useRef} from "react";
import ReactPlayer from 'react-player'
import { useState } from "react";


function Alien() {

 const [videoFilePath, setVideoFilePath] = useState("https://youtu.be/CewGoSigFe8");

 const handleVideoUpload = (event) => {
  setVideoFilePath(URL.createObjectURL(event.target.files[0]));
  };


  return (
    
    <div className="Alien" style={{height: "100%"}} >
      {/* <iframe
        width="853"
        height="480"
        src={`../public/alien-dude.mp4`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      /> */}
      <ReactPlayer playing={true}
        url={videoFilePath}
        width="100%"
        height="100%"
        controls={false}
        loop={true}/>

    </div>
  );
}

export default Alien;
