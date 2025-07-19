# TypeScript Workshop

A comprehensive workshop covering TypeScript fundamentals, generics, and advanced type manipulation concepts through hands-on exercises.

## 📚 Workshop Structure

This workshop is organized into progressive modules, each containing problem and solution files to help you learn TypeScript concepts step by step.

### 🎯 Core Modules

#### 1. Introduction
- **Location**: `introduction/`
- **Topics**: Basic TypeScript generics introduction
- **Files**: `sample.ts`

#### 2. Return What I Send
- **Location**: `1 return what I send/`
- **Topics**: Basic generic functions, type inference
- **Problem**: Creating a generic identity function
- **Files**: `problem.ts`, `solution.ts`

#### 3. Constraint for Generics
- **Location**: `2 constraint for generics/`
- **Topics**: Generic constraints using `extends` keyword
- **Problem**: Restricting generic types to specific constraints
- **Files**: `problem.ts`, `solution.ts`

#### 4. Independent Parameters
- **Location**: `3 independent parameters/`
- **Topics**: Multiple generic type parameters
- **Files**: `problem.ts`, `solution.ts`

#### 5. Approaches for Typing Object Parameters
- **Location**: `4 Approaches for typing object parameters/`
- **Topics**: Different strategies for typing object parameters
- **Files**: `problem.ts`, `solution1.ts`, `solution2.ts`

#### 6. Advanced TypeScript
- **Location**: `advanced/`
- **Topics**: 
  - Mapped types
  - Utility types (`ReadOnly`, `Mutable`)
  - Required/Optional type transformations
  - Conditional types with `infer`
- **Files**: `advanced.ts`

### 🚀 Real-World Applications

#### TypeScript Generics Project
- **Location**: `typescript-generics/`
- **Structure**: Full-stack application examples

##### Backend (`typescript-generics/backend/`)
- **Framework**: Express.js
- **Topics**: Server-side TypeScript generics
- **Files**: `problem.ts`, `soln.ts`
- **Dependencies**: Express 5.1.0

##### Frontend (`typescript-generics/frontend/`)
- **Framework**: React with TypeScript
- **Topics**: 
  - React component typing
  - Custom hook development with generics
  - Form handling with type safety
- **Key Features**:
  - Generic `useForm` hook implementation
  - Type-safe form state management
  - Component-level generic usage

**Files Structure**:
```
frontend/
├── problem/
│   ├── problem.tsx
│   └── useForm.ts
├── solution/
│   ├── solution.tsx
│   └── useFormSoln.ts
├── package.json
└── tsconfig.json
```

## 🎓 Learning Path

### Beginner Level
1. Start with `introduction/sample.ts` to understand basic generics
2. Work through `1 return what I send/` for generic functions
3. Learn constraints in `2 constraint for generics/`

### Intermediate Level
4. Explore multiple parameters in `3 independent parameters/`
5. Study object typing approaches in `4 Approaches for typing object parameters/`
6. Practice with the React `useForm` hook in `typescript-generics/frontend/`

### Advanced Level
7. Dive into `advanced/advanced.ts` for mapped types and utility types
8. Build the full-stack application in `typescript-generics/`

## 🛠 Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- TypeScript knowledge (basic)
- Code editor with TypeScript support (VS Code recommended)

### Installation

#### For Frontend React Project
```bash
cd typescript-generics/frontend
npm install
```

#### For Backend Express Project
```bash
cd typescript-generics/backend
npm install
```

### Running the Examples

Each module can be run independently:

```bash
# Compile and run TypeScript files
npx tsc filename.ts
node filename.js

# Or use ts-node for direct execution
npx ts-node filename.ts
```

## 📖 Key Concepts Covered

### Generic Functions
- Basic generic syntax `<T>`
- Type inference
- Generic constraints with `extends`

### Advanced Types
- **Mapped Types**: Transform existing types
- **Conditional Types**: Type logic with `extends` and `infer`
- **Utility Types**: 
  - `ReadOnly<T>`: Make all properties readonly
  - `Mutable<T>`: Remove readonly modifiers
  - `MakeKeysRequired<T>`: Make optional properties required

### React Integration
- Generic components and hooks
- Type-safe form handling
- Custom hook development with generics

### Real-World Patterns
- Form state management
- API response typing
- Component prop typing

## 🎯 Workshop Goals

By completing this workshop, you will:

1. ✅ Understand TypeScript generic fundamentals
2. ✅ Master generic constraints and multiple type parameters
3. ✅ Learn advanced type manipulation techniques
4. ✅ Apply generics in React applications
5. ✅ Build type-safe, reusable components and utilities
6. ✅ Understand mapped types and conditional types

## 🤝 Workshop Format

Each exercise follows a consistent pattern:
- **Problem File**: Contains the challenge with type issues
- **Solution File**: Shows the corrected implementation
- **Hands-on Practice**: Work through problems before checking solutions

## 💡 Tips for Success

1. **Start Simple**: Begin with basic examples and build complexity gradually
2. **Experiment**: Modify the examples to see how types behave
3. **Use IDE Features**: Leverage TypeScript's IntelliSense and error checking
4. **Practice**: Try to solve problems before looking at solutions
5. **Ask Questions**: Use the type system to understand what's expected

## 📚 Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Generics Deep Dive](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 🔗 Dependencies

- **React**: 19.1.0
- **TypeScript**: 5.8.3
- **Express**: 5.1.0
- **@types/react**: 19.1.8
- **@types/react-dom**: 19.1.6

---

Happy coding! 🎉 Start your TypeScript generics journey and level up your type safety skills.
