const shufflefunction = (data) => {
  const unShuffledAnswers = [data.correctAnswer, ...data.incorrectAnswers];
  let index;
  let value = unShuffledAnswers.length;
  let temp;
  while (value > 0) {
    index = Math.floor(Math.random() * (value - 1));
    value--;
    temp = unShuffledAnswers[value];
    unShuffledAnswers[value] = unShuffledAnswers[index];
    unShuffledAnswers[index] = temp;
  }
  return unShuffledAnswers;
};

export default shufflefunction;
