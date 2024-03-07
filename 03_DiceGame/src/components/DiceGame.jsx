import React, { useState } from "react";

const DiceGame = () => {
  const [active, setActive] = useState(null);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [diceNumber, setDiceNumber] = useState(0);
  const [diceImg, setDiceImg] = useState("/img/cubes_gambling_n_02 1.png");
  const [showAlertMessage, setShowAlertMessage] = useState(false);
  const [loss, setLoss] = useState(false);
  const [winner, setWinner] = useState(false);
  const randomNum = Math.floor(Math.random() * 6) + 1;
  console.log(randomNum);

  const winnerCalc = () => {
    if (score <= -10) {
      console.log("Losser");
      setLoss(true);
    } else if (score >= 10) {
      console.log("winner");
      setWinner(true);
    }
  };

  const scoreCount = () => {
    if (diceNumber == randomNum) {
      setScore(score + diceNumber);
    } else {
      setScore(score - 2);
    }
  };

  const handleClick = (number) => {
    setActive(number);
    setDiceNumber(number);
  };

  const handleImgClick = () => {
    if (!diceNumber) {
      setShowAlertMessage(true);
    } else {
      scoreCount();
      setDiceImg(`/img/dice_${randomNum}.png`);
      setShowAlertMessage(false);
      winnerCalc();
    }
  };
  return (
    <div className=" flex flex-col  container mx-auto h-screen w-full">
      <div className="flex items-center justify-between  mt-8">
        <div className="flex flex-col items-center justify-center md:justify-start m-8">
          <h1 className="text-5xl md:text-8xl font-bold">{score}</h1>
          <h1 className="text-xl md:text-3xl font-bold">Total Score</h1>
        </div>

        <div className="flex flex-col m-8 ">
          {showAlertMessage && (
            <div className="text-red-400 rext-lg flex justify-end items-center p-2">
              You have not selected any number
            </div>
          )}
          <div className="flex flex-wrap gap-4 items-center">
            {[1, 2, 3, 4, 5, 6].map((number) => (
              <div
                key={number}
                className={`border border-gray-400 flex flex-wrap items-center justify-center text-xl font-bold w-12 h-12 rounded cursor-pointer ${
                  active === number ? "bg-black text-white" : ""
                }`}
                onClick={() => handleClick(number)}
              >
                {number}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-start md:justify-end text-xl font-bold mt-6">
            Select Number
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  h-[60%]">
        <div>
          <div className="flex items-center justify-center">
            {!winner &&
              (!loss ? (
                <img
                  src={diceImg}
                  alt="cubesNumber1"
                  onClick={handleImgClick}
                  className="cursor-pointer"
                />
              ) : (
                <div className="text-xl md:text-3xl font-bold text-center  w-1/2">
                  Sorry!! You loss 😒 you got{" "}
                  <span className="text-red-600 font-bold">{score}</span> number
                  please reload the page to Restart the game
                </div>
              ))}
            {winner && (
              <div className="text-xl md:text-3xl font-bold text-center w-1/2">
                Congratulations! You win 🎉 you got {score} Number
              </div>
            )}
          </div>
          <div className="text-xl font-bold text-center pt-4">
            Click on dice to roll
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button
            className="text-black border font-bold hover:bg-gray-200 border-gray-600 px-4 py-2 rounded-lg h-10 w-48 flex items-center justify-center"
            onClick={() => setScore(0)}
          >
            Reset Score
          </button>
          <button
            className="text-white bg-black  px-4 py-2 rounded-lg h-10 w-48 flex items-center justify-center"
            onClick={() => setShowRules(!showRules)}
          >
            Show Rules
          </button>
        </div>
      </div>
      {showRules && (
        <div className="bg-gray-200 p-5 md:mx-auto w-1/2 m-4 md:m-0">
          <h1 className="text-xl font-bold pb-2">How to play dice games</h1>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>
            after click on dice if selected number is equal to dice number you
            will get same point as dice if you get wrong guess then 2 point will
            deducted
          </p>
          <p>
            You will loss 😒 the game if you are score is less than or equal to
            -10
          </p>
          <p>
            You will win 😍 the game if you are score is greater than or equal
            to 10
          </p>
        </div>
      )}
    </div>
  );
};

export default DiceGame;
