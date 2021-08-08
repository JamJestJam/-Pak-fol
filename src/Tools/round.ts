const round = (number: number, decimal: number) => {
  const f = Math.pow(10, decimal);
  return Math.round(number * f) / f;
};

export default round;
