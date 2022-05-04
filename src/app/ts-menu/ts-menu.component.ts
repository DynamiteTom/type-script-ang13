import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

const features = `
    'const_let_val', 
    'copy_array', 
    'interf_class',
    'JavaScript',
    'types', 
    'Objects',
    'namespace', 
    'Modules', 
    'Decorators - ',
    'dots', 
    'ts_other',
    'TS versions'
`;

const subTopics = [
    ['const','let','val'], 
    ['arrays', 'shallow_copy', 'deep_copy','destructuring'], 
    ['interface', 'class','inheritance', 'inferredTypes', 'optionalChaining', 'nullishCoalescence'], 
    ['JavaScript', 'EcmaScript', 'ES6-plus'],
    ['TypeScript', 'Type system','a type', 'primitive-types', 'type-inference', 'type-generics', 'strong-types', 'strict-null-checks','strict-type-checking','read-only','partial-types','template-literal-types','Type Guards','narrowing'], 
    ['Object types', 'Property modifiers', 'Array', 'destructuring','spread ...'],
    ['namespaces - '],
    ['Modules - ','d.ts files'],
    ['Decorators'],
    ['rest','spread'],
    ['ts_transpiles-js', 'ngc - Angular Compiler', 'tsconfig.json', 'VS-Code', 'es-all-browsers', 'getter-setter', 'catch-bugs-early', 'tsc-tooling', 'ts-union-types','tuples'],
    ['TS3.5','TS3.6-7 Ang9', 'TS3.8','TS3.9 Ang10','TS4.0 Ang11','TS4.1','TS4.2 Ang12','TS4.3','TS4.4','TS4.5 Ang13','TS4.6']
];

const subTopicsInfo = [
  ['const block scope - const x = 10; Hoisting means - ',
  'let block scope - let y = 24; y = 20;  Hoisting means ',
  'val global or ftn scope - var z = 30; Hoisting means - '], 
  [`arrays are defined within [] and can be 1D- 2D - 3D etc. Approx 32 operations on arrays
  Arrays can be shallow or deep copied and use rest and spread operators and be deconstructed
  `, 
  'shallow_copy means the array shares info from the original array', 
  'deep_copy means we create a new copy of the array which holds the same data', 
  'assigns diff els to array and means els can be refd separately'],
  ['interfaces data - simplifies a set of data or methods which is to be used in a class or other operation - when inherited all methods must be implemented', 
  'Classes allow us to define objects that implement interfaces',
  'Inheritance means one class can inherit from another', 
  'Inferred Types',
  'optionalChaining - TS 3.7 - using a ? to identify if object exists or not - if (foo?.bar){}', 
  'nullishCoalescence - TS 3.7 - ?? identifies if data is null when assigned a const value - x = foo ?? bar;'
], 
 [
  `is the prog language of the WWW - web - a purely dynamic language - where you cant specify data types of variable 
  <br/>can be used both on the client side and server side - lets you make web pages interactive - gives pages interactive els to engage a user
`,
`ES is a modern JS std - meant to ensure the interoperabilty of web pages x diff browsers -
<br/>ES6 - ES2015 - but has newer versions too up to the present day
<br/>const and let,  fat-arrow ftns - many features that have become part of TypeScript`
 ],
  [
    `is an extension of the JS language - uses JS runtime with a compile time Type Checker 
    <br/>is a Typed Language where we can specify types of the variables, ftn pars and object properties
    <br/>while adding optional static type checking - enum data types - classes & interfaces
    <br/>provdes better doc'n of codebases and improved intellisense`,
    'The Type System reps the diff types of values supported by TS',
    'refers to the diff properties and functions that a value has - ',
    `Primitive - types - number - string - boolean - void - null - undefined 
  \r\nNote by saying a type is <span class="color:yellow">any</span> - we opt out of type checking
  \r\nArray and Object are not primitive types but are allowed types
  `, 
  'Type-inference - means if you assign a value to a variable - its value can be inferred by the tsc', 
  `Type-generics - means we can write code that can be reusable to work on different types using par T
    We could be writing an op that works on data types not invented yet - over a variety of types
    <br/>Generic Classes   
    <br/>Generic Constraints 
  `, 
  'Strong-types - ensuring a variable has an actual type', 
  'StrictNullChecks - in the tsconfig.json - compilerOptions if true - checks for null and undefined',
  'Strict-type-checking - ',
  'Read-only ensures the data does not change',
  'Partial-types introduced in 2.1 - desgned to make all part of a type optional',
  'Template Literal Types - using the ', 
  `Type Guards - is a TS technique used to get info about the type of a variable - conditional block
    <br/>it method that takes a type and returns a boolean that says if the type can be narrowed or not down to a specific type
    <br/>Performs a runtime check - guarantees the type - helps TSC become more predictive   
    `,
  'to do with Type Guards - refining generic types to specific types - once its assigned'
], 
['A good way to group and pass around data', 
'Each property of an Object type - like - type - optional ? - readwrite',
'Array<T> - generic array type - number[] like Array[number] or string[] like Array[string]', 
'Array - Tuple - Object - let o = {a:\'foo\',b:12, c: null}; let {a,b} = o; assignments to parts of Object', 
'opposite of destructuring - spread an array into another array - creates shallow copy of other arrays'],   
['namespaces - '],
['Modules - import a type <TS 3.8 - but since 3.8 use import type -   ',
 'd.ts - export function getAL(arr){return arr.length;} equates to export function getAL(arr: any[]):number;'],
['Class - Method - Accessor - Property - Parameter and then Metadata -  '],
['The rest operator ... - must be the last parameter in list to refer to rest of pars - puts rest of pars into list',
  'The spread operator ... - unpacks to indiv els'],
  [`tsc TypeScript compiler - transpiles .ts files down to .js files JavaScript to run on the browser
  <br/>Only checks types at compile time and only types that are available    
  `, 
  `extends the tsc compiler which knows how to execute Angular decorators - applying decorator effects at build time (not runtime)
  <br/>https://blog.angular.io/how-the-angular-compiler-works-42111f9d2549
  <br/>It applies TypeScript type checking rules to comp templates
  <br/>Recompile quickly on change 
  3 Steps - 
  <br/>1: Create TS Program - ts.Program instance 
  <br/>2: Indiv Analysis - looks for decorators - metadata - diagnostics 
  <br/>3: Global Analysis - understand NgModule structure - compilation scope + export scope - uses declaration files .d.ts
  <br/>4: Template Type-Checking - Ang Comp converts templates into TS code - TCB (Type Check Block) - semantic checking 
  <br/>5: Emit - generates .js code removing decorators - static fields added to classes  (for libraries - .d.ts files)
  
  ngc - 2 main tools -
  <br/>1: Import graph -
  <br/>2: Semantic Dependency graph - 
  `,
  `The presence of a tsconfig.json file in root - indicates a TS project - indicates root files and compiler options to compile project - 
  <br/>contains - compilerOptions for sourceMap - outDir - target - module - lib - and angularCompilerOptions for strict options 
  `,
  `VS Code integrates with tsc via the integrated task runner - includes TypeScript language support but not the tsc
  <br/>VS Code ships with a recent stable version of the TypeScript language service to provide intellisense in workspace 
  `,
  'New EcmaScript features work in all browsers', 
  'Getter-Setter ftns means we dont need this.xxx ', 
  'catch-bugs-early - errors discovered at compile time', 
  'TypeScript compiler is very important for tooling',
  'Union types - permit us to assign a variable as a combination of 2 or more types eg myval: number|string;', 
  'Tuples - a comma sep list of els inside ()- (2,4,7,9)'
 ],
 [
 'TS3.5 - Speed improvements - Omit helper type - --allowUmdGlobalAccess - Smarter Union checking - Higher order type inference from generic constructors',  
 'TS3.6-7 Ang9 - Optional Chaining ?. - Nullish Coalescing ?? (default val when null or undefined)- Assertion Functions - More Recursive aliases - --declaration --allowJS - useDefineForClassFields - Uncalled Function Checks', 
 'TS3.8 - Type-only Imports and Exports (erased at runtime) - ES Private Fields # - export * as ns Syntax - Top level await - es2020 targe or module - JSDoc property modifiers - Fast and Loose Inc Checking',
 'TS3.9 Ang10 - improvements in inference and Promise.all - Speed improvements - @ts-expect-error Comments - UFC in Conditional Expns - Editor Improvements         ',
 'TS4.0 Ang11 - Varadic Tuple types - Labeled Tuple els - Class prop inference from Constructors - Short cirtuit Assignment operators - unknown on Catch - speed imp (--noEmitOnError) --incremental with --noEmit - Editor Improvements'  ,
 'TS4.1 - Template Literal types - Recursive Conditional types - Checked Index accesses(index signature) --noUncheckedIndexAccess - Paths without baseUrl - JSDoc@see',
 'TS4.2 Ang12 - Smarter Type Alias Preservn - Leading-Middle Rest els in Tuples - Stricter Checks for in - abstract Construct Signature',
 'TS4.3 - override and --noImplicitOverride - Template string Type improvements - ES Private class Els - Constructor pars on Abstract class - Contextual Narrowing for Generics - Always Truthy Promise checks - Static index signatures - tsbuildInfo size improvements - Lazier calcs in --inc --watch - import statement completions  ',
 'TS4.4 - Default to unknown type in Catch Variables --useUnknownInCatchVariables - Exact Optional Pro perty Types --exactOptionalPropertyTypes - static Blocks in Classes - tsc --help improvements - Performance improvements',  
 'TS4.5 Ang13 - Awaited type -Template string type as Discriminants - import assertions - Private field Presence checks',
 'TS4.6 - target es-2022 - Allow code in constructor before super() - More Syntax + Binding Errors']
]; 

@Component({
  selector: 'app-ts-menu',
  templateUrl: './ts-menu.component.html',
  styleUrls: ['./ts-menu.component.scss']
})
export class TsMenuComponent implements OnInit {
  
  isScreenSmall = false;

  ts_list = of(features.split(','));
  ts_sublist = subTopics; // gives indiv arrays
  
  ts_strArr: string[] = [];
  ts_subStrArr: string[6][] = [];
  
  tsFeatureIndex = 0;
  tsFeatureSubIndex = 0;

  tsInfo: string = ``;

  constructor() { }

  ngOnInit(): void {
      console.log('ngOnInit()');
      let arr = this.ts_sublist;
  }

  getInfo(i: number, j: number){
      this.tsInfo = subTopicsInfo[i][j];       
      this.tsFeatureSubIndex = j;
  }

  removeQuote(str: string): string{
      return str.replace(/'/g,'');
  }

  showTSFeatures(inx: number){
      this.tsFeatureIndex = inx;
  }
}
