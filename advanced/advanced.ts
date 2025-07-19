type MakeReadOnly<T> = { readonly [P in keyof T]: T[P] };

interface Example {
  name: string;
  age: number;
  val?: string;
}

type ReadOnlyExample = MakeReadOnly<Example>;

let readOnly: ReadOnlyExample = {
  name: "",
  age: 2,
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

let mutableData: Mutable<ReadOnlyExample> = {
  name: "",
  age: 2,
};

mutableData.age = 2;

type MakeKeysRequired<T> = {
  [P in keyof T]-?: T[P];
};

var usecase4: MakeKeysRequired<Mutable<ReadOnlyExample>> = {
  name: "",
  age: 2,
  val: "",
};






// Make all the keys object Optional

type OptionalAllkeys<T> = {
  [K in keyof T]?: T[K] extends string ? T[K] : T[K];
};

// Modified to make string properties optional
type Result = OptionalAllkeys<Sample>;

const resultVal: Result = {
  age: 0,
  // name is now optional
};


// Make the strings optional

type OptionalStrings<T> = {
  [K in keyof T as T[K] extends string ? K : never]?: T[K];
} & {
  [K in keyof T as T[K] extends string ? never : K]: T[K];
};

type Sample = { name: string; age: number };

type ResultWithOptionalStrings = OptionalStrings<Sample>;





// Infer


type ReturnTypeVar<T> = T extends (...args: any[]) => infer R ? R : any;

function greet(name: string): string {
  return `Hello, ${name}!`;
}

type GreetReturnType1 = typeof greet;

type GreetReturnType = ReturnTypeVar<typeof greet>;
