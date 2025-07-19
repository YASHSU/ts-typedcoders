const returnBothOfWhatIPassInObjectSolution2 = <
  T1 extends { a: string; b: number }
>(
  params: T1
) => {
  return {
    first: params.a,
    second: params.b,
  };
};

const resultsolution = returnBothOfWhatIPassInObjectSolution2({
  a: "a",
  b: 1,
});
