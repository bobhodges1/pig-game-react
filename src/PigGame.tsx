import lodash from "lodash"
import { useState } from "react";
export function PigGame() {
  const [lastRoll, setLastRoll] = useState<number | null>(null)
  const [turnScore, setTurnScore] = useState(0)
  const [totalScore, setTotalScore] = useState(0)


  function rollDie() {
    const dieRoll = lodash.sample([1, 2, 3, 4, 5, 6])
    console.log("You rolled a ", dieRoll)
    setLastRoll(dieRoll)
    if (dieRoll === 1) {
      setTurnScore(0)
    }
    else {
      setTurnScore(n => n + dieRoll)
    }
  }

  function bankTurnScore() {
    setTurnScore(0)
    setTotalScore(totalScore + turnScore)
  }

  return <div>
    <h1>Piggy's Game!</h1>

    <button onClick={rollDie}>
      Roll!
    </button>
    <button onClick={bankTurnScore}>
      Bank!
    </button>
    <div>
      Last roll was a <span className="die">{lastRoll}</span>
    </div>
    <div>
      Current turn score is {turnScore}
    </div>
    <hr />
    <h3>Score:</h3>
    <div>🔴 Player 1 - {totalScore}</div>
    <br />
    <div>🔵 Player 2 - </div>


  </div>;
}
