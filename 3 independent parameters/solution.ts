const returnBothOfWhatIPassInIndependentTypes = <T, S>(a: T, b: S) => {
  return {
    a,
    b,
  };
};

const resultIndependentSoln = returnBothOfWhatIPassInIndependentTypes("a", 1);
