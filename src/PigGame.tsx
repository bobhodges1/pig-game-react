import lodash from "lodash"
import { useState } from "react";
type PlayerName = "player1" | "player2"
export function PigGame() {
  const [lastRoll, setLastRoll] = useState<number | null>(null)
  const [turnScore, setTurnScore] = useState(0)
  const [p1TotalScore, setP1TotalScore] = useState(0)
  const [p2TotalScore, setP2TotalScore] = useState(0)
  const [whoseTurnIsIt, setWhoseTurnIsIt] = useState<PlayerName>("player1")

  function rollDie() {
    const dieRoll = lodash.sample([1, 2, 3, 4, 5, 6])
    console.log("You rolled a ", dieRoll)
    setLastRoll(dieRoll)
    if (dieRoll === 1) {
      setTurnScore(0)
      setWhoseTurnIsIt(p => p === "player1" ? "player2" : "player1")

    }
    else {
      setTurnScore(n => n + dieRoll)
    }
  }

  function bankTurnScore() {
    setTurnScore(0)
    setP1TotalScore(p1TotalScore + turnScore)
    setWhoseTurnIsIt(p => p === "player1" ? "player2" : "player1")
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
    <div>🔴 Player 1 - {p1TotalScore}</div>
    <br />
    <div>🔵 Player 2 - {p2TotalScore}</div>
    <div>{whoseTurnIsIt}</div>


  </div>;
}
