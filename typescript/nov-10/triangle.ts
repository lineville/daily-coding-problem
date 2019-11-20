let i: number = 0;

const procA = (): void => {
  while (i < 10) {
    console.log("A");
    i++;
    return procB();
  }
};

const procB = (): void => {
  console.log("B");
  i++;
  return procC();
};

const procC = (): void => {
  console.log("C");
  i++;
  return procA();
};

procA();
