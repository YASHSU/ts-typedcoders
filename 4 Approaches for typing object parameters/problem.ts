const returnBothOfWhatIPassInObject = (params: { a: unknown; b: unknown }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

const result2 = returnBothOfWhatIPassInObject({
  a: "a",
  b: 1,
});
