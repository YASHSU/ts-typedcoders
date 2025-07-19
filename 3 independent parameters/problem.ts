const returnBothOfWhatIPassIn = (a: unknown, b: unknown) => {
  return {
    a,
    b,
  };
};

const result = returnBothOfWhatIPassIn("a", 1);
