import React, { useEffect, useState } from "react";

const Dino = () => {
  const [gameStart, setGameStart] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [cactusPos, setCactusPos] = useState("1250px");
  const [dinoPos, setDinoPos] = useState("330px");
  const [inAir, setInAir] = useState();
  let pos = "left-[" + cactusPos + "]";
  let posDino = "top-[" + dinoPos + "]";
  //   useEffect(() => {
  //     const dino = document.getElementById("dino");

  //   }, []);
  useEffect(() => {
    const dino = document.getElementById("dino");
    const cactus = document.getElementById("cactus");
    // if (dino) {
    //   const handleKeyDown = (event) => {
    //     if (event.key === " ") {
    //       setGameStart(true);
    //     }
    //   };

    //   document.addEventListener("keydown", handleKeyDown);
    // }
    const jump = () => {
      if (dino && dino.classList != "jump" && gameStart) {
        dino.classList.add("jump");
      }
      setTimeout(function () {
        dino.classList.remove("jump");
      }, 350);
    };
    const handleKeyDown = (event) => {
      if (event.key === " ") {
        setGameStart(true);
        cactus.classList.add("cactus");
        setGameOver(false);
        jump();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    let isAlive = setInterval(function () {
      let dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
      );
      let cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
      );

      // detect collision
      if (cactusLeft < -50 && cactusLeft > -100 && dinoTop >= 240) {
        // collision
        setCactusPos(window.getComputedStyle(cactus).getPropertyValue("left"));
        setDinoPos(window.getComputedStyle(dino).getPropertyValue("top"));
        cactus.classList.remove("cactus");
        setGameOver(true);
      }
    }, 10);
  }, [gameStart, gameOver]);
  return (
    <>
      <div className="game w-[1500px] h-[450px] border-[1px] border-[#F4FF00] bg-game-bg bg-contain m-auto relative my-10 mt-[-1.25rem] top-[10rem] px-32 overflow-hidden">
        <h1 className="w-full absolute left-[1280px] top-[30px] text-[2.1rem]">
          Dino Game
        </h1>
        <h1
          className={`w-full absolute left-[445px] top-[200px] text-[2.1rem] ${
            gameStart ? "invisible" : "visible"
          }`}
        >
          Press Spacebar to start the game
        </h1>
        <h1
          className={`w-full absolute left-[650px] top-[200px] text-[2.1rem] font-bold ${
            gameOver ? "visible" : "invisible"
          }`}
        >
          Game Over.
        </h1>
        <div
          id="dino"
          className={`w-[120px] h-[120px] bg-dino-bg bg-contain relative top-[330px] left-[-110px]`}
        ></div>
        <div className="w-[300px] absolute top-[300px]">"Phew!"</div>
        <div
          id="cactus"
          className={`w-[80px] h-[120px] relative top-[209px] ${pos} bg-no-repeat bg-cactus-bg bg-contain`}
        ></div>
      </div>
    </>
  );
};

export default Dino;
