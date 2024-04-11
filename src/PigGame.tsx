import lodash from "lodash"
import { useState } from "react";
export function PigGame() {
  const returnedArray = useState<number | null>(null)
  const [lastRoll, setLastRoll] = returnedArray


  function rollDie() {
    const dieRoll = lodash.sample([1, 2, 3, 4, 5, 6])
    console.log("You rolled a ", dieRoll)
    setLastRoll(dieRoll)
  }

  return <div>
    <h1>Piggy's Game!</h1>
    <button onClick={rollDie}>
      Roll!
    </button>
    <div>
      <p>Last</p> roll was a <span className="die">{lastRoll}</span>
    </div>

  </div>;
}
