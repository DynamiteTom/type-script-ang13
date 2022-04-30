import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArraysComponent } from './copy-array/arrays/arrays.component';
import { ShallowCopyArrayComponent } from './copy-array/shallow-copy-array/shallow-copy-array.component';
import { DeepCopyArrayComponent } from './copy-array/deep-copy-array/deep-copy-array.component';

import { LetBlockComponent } from './const-let-var/let-block/let-block.component';
import { ConstBlockComponent } from './const-let-var/const-block/const-block.component';
import { VarGlobComponent } from './const-let-var/var-glob/var-glob.component';

import { ClassDefnComponent } from './interf-class/class-defn/class-defn.component';
import { InterfaceDefnComponent } from './interf-class/interface-defn/interface-defn.component';
import { InheritClassComponent } from './interf-class/inherit-class/inherit-class.component';

import { StrongTypesComponent } from './types/strong-types/strong-types.component';
import { TypeGenericsComponent } from './types/type-generics/type-generics.component';
import { TypeInferenceComponent } from './types/type-inference/type-inference.component';
import { DestructuringTypesComponent } from './types/destructuring-types/destructuring-types.component';
import { StaticTypeCheckingComponent } from './types/static-type-checking/static-type-checking.component';
import { ReadOnlyPropsComponent } from './types/read-only-props/read-only-props.component';
import { ReadOnlyTuplesComponent } from './types/read-only-tuples/read-only-tuples.component';
import { IntersectionTypesComponent } from './types/intersection-types/intersection-types.component';
import { NarrowingComponent } from './types/narrowing/narrowing.component';
import { PartialTypesComponent } from './types/partial-types/partial-types.component';

import { RestDotsComponent } from './dots/rest-dots/rest-dots.component';
import { SpreadDotsComponent } from './dots/spread-dots/spread-dots.component';
import { TscTranspilesJsComponent } from './ts-other/tsc-transpiles-js/tsc-transpiles-js.component';

import { TsconfigJsonComponent } from './ts-other/tsconfig-json/tsconfig-json.component';
import { TscToolingComponent } from './ts-other/tsc-tooling/tsc-tooling.component';
import { EsAllBrowsersComponent } from './ts-other/es-all-browsers/es-all-browsers.component';
import { GetterSetterComponent } from './ts-other/getter-setter/getter-setter.component';
import { NullishCoalescingComponent } from './ts-other/nullish-coalescing/nullish-coalescing.component';
import { CatchBugsEarlyComponent } from './ts-other/catch-bugs-early/catch-bugs-early.component';

@NgModule({
  declarations: [
    AppComponent,

    ArraysComponent,
    ShallowCopyArrayComponent,
    DeepCopyArrayComponent,

    LetBlockComponent,
    ConstBlockComponent,
    VarGlobComponent,

    ClassDefnComponent,
    InterfaceDefnComponent,
    InheritClassComponent,

    StrongTypesComponent,
    TypeGenericsComponent,
    TypeInferenceComponent,
    DestructuringTypesComponent,
    StaticTypeCheckingComponent,
    ReadOnlyPropsComponent,
    ReadOnlyTuplesComponent,
    IntersectionTypesComponent,

    RestDotsComponent,
    SpreadDotsComponent,
    
    TscTranspilesJsComponent,
    TsconfigJsonComponent,
    TscToolingComponent,
    EsAllBrowsersComponent,
    CatchBugsEarlyComponent,
    DestructuringTypesComponent,
    NarrowingComponent,
    PartialTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
