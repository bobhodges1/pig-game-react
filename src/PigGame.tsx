import lodash from "lodash"
export function PigGame() {

  function rollDie() {
    const dieRoll = lodash.sample([1, 2, 3, 4, 5, 6])
    console.log("You rolled a ", dieRoll)
  }

  return <div>Piggy's Game!
    <button onClick={rollDie}>
      Roll!
    </button>
  </div>;
}
