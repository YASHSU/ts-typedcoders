const returnBothOfWhatIPassInObjectSolution1 = <T1, T2>(params: {
  a: T1;
  b: T2;
}) => {
  return {
    first: params.a,
    second: params.b,
  };
};

const resultofv1 = returnBothOfWhatIPassInObjectSolution1({
  a: "a",
  b: 1,
});
