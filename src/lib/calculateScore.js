export const calculateScore = (dice) => {
  if (null === dice) {
    throw new Error("Dice roll cannot be null");
  }

  if (dice.length === 0 || dice.length > 5) {
    throw new Error("Dice length is invalid");
  }

  const scores = new Map();
  dice.forEach((roll) => {
    if (!scores.has(roll)) {
      scores.set(roll, 1);
    } else {
      scores.set(roll, scores.get(roll) + 1);
    }
  });

  let total = 0;
  for (let [roll, count] of scores) {
    if (roll === 1) {
      if (count >= 3) {
        total += 1000;
        count -= 3;
      }
      total += count * 100;
    }

    if (count >= 3) {
      total += roll * 100;
      count -= 3;
    }

    if (roll === 5) {
      total += count * 50;
    }
  }

  return total;
};

export default calculateScore;
