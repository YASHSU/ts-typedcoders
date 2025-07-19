const returnWhatIPassInWithConstraint = <T>(t: T) => t;

returnWhatIPassInWithConstraint("a");

const passANumberProblem = returnWhatIPassInWithConstraint(1);

const passABooleanProblem = returnWhatIPassInWithConstraint(true);

const passAnObjectProblem = returnWhatIPassInWithConstraint({
  foo: "bar",
});
