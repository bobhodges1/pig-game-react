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
    if (whoseTurnIsIt === "player1") {
      setP1TotalScore(p1TotalScore + turnScore)
      setWhoseTurnIsIt("player2")
    }
    else {
      setP2TotalScore(p2TotalScore + turnScore)
      setWhoseTurnIsIt("player1")
    }
  }


  function calculateWinState() {
    if (p1TotalScore >= 100) {
      return "player1 win";
    }
    else if (p2TotalScore >= 100) {
      return "player2 win";
    }
    else {
      return "progressing"
    }
  }

  function restartGame() {
    setLastRoll(null)
    setP1TotalScore(0)
    setP2TotalScore(0)
    setTurnScore(0)
    setWhoseTurnIsIt("player1")
  }




  const winState = calculateWinState()

  return <div>
    <h1>Piggy's Game!</h1>
    {whoseTurnIsIt === "player1" && <div>Player 1 to play</div>}
    {whoseTurnIsIt === "player2" && <div>Player 2 to play</div>}
    <hr />
    <button disabled={winState !== "progressing"} onClick={rollDie}>
      Roll!
    </button>
    <button disabled={winState !== "progressing"} onClick={bankTurnScore}>
      Bank!
    </button>
    {lastRoll !== null && <div>Last roll was a <span className="die">{lastRoll}</span></div>}

    <div>
      Current turn score is {turnScore}
    </div>
    <hr />
    <h3>Score:</h3>
    {whoseTurnIsIt === "player1" && <div><p>Player 1 - {p1TotalScore} 🔴 </p>
      <p>Player 2 - {p2TotalScore}</p></div>}
    {whoseTurnIsIt === "player2" && <div><p> Player 1 - {p1TotalScore}</p>
      <p>Player 2 - {p2TotalScore}🔵 </p></div>}


    {winState === "player1 win" && <div>PLAYER 1 WINS!</div>}
    {winState === "player2 win" && <div>PLAYER 2 WINS!</div>}
    {winState !== "progressing" && <button onClick={restartGame}>Reset Game</button>}



  </div>;
}
