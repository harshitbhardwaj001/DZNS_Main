import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import Dino from "../../../components/games/Dino";

const index = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div className="nav overflow-hidden fixed h-full w-full">
        <Navbar clicked={clicked} setClicked={setClicked} />
      </div>
      <div className={`${clicked ? "hidden" : "block"}`}>
        <Dino />
        <footer className="flex justify-center mt-[13rem]">
          <div>&copy;{new Date().getFullYear()} DZNS Studio</div>
        </footer>
      </div>
    </>
  );
};

export default index;
