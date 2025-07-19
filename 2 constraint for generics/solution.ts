export const returnWhatIPassGenericWithConstraint = <T extends string>(t: T) =>
  t;

const passAStringSolution = returnWhatIPassGenericWithConstraint("a");

const passANumberSolution = returnWhatIPassGenericWithConstraint(1);

const passABooleanSolution = returnWhatIPassGenericWithConstraint(true);

const passAnObjectSolution = returnWhatIPassGenericWithConstraint({
  foo: "bar",
});
