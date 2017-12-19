import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from './components/Router/AsyncComponent';
import { AuthenticatedRoute } from './components/Router/AuthenticatedRoute';
import { UnauthenticatedRoute } from './components/Router/UnauthenticatedRoute';

// Dynamic Imports added in ts 2.4.1, to be removed once 2.4 @types fixed in create-react-app-typescript
// https://github.com/Microsoft/TypeScript/issues/12364
declare global {
  interface System {
    import(request: string): Promise<any>;
  }
  var System: System;
}

const importHome = () => System.import('./pages/Home');
const importAuthors = () => System.import('./pages/Authors');
const importSpins = () => System.import('./pages/Spins');
const importProfile = () => System.import('./pages/Profile')
const importNotFound = () => System.import('./pages/NotFound');


interface Props {
  childProps: any;
}
export const Routes: React.StatelessComponent<Props> = props => {
  return (
    <Switch>
      <UnauthenticatedRoute
        path="/"
        exact
        component={asyncComponent(importHome)}
        props={props.childProps}
      />
      <UnauthenticatedRoute
        path="/authors"
        exact
        component={asyncComponent(importAuthors)}
        props={props.childProps}
      />
      <UnauthenticatedRoute
        path="/spins"
        exact
        component={asyncComponent(importSpins)}
        props={props.childProps}
      />
      <AuthenticatedRoute
        path="/prifle"
        exact
        component={asyncComponent(importProfile)}
        props={props.childProps}
      />      
      {/* Finally, catch all unmatched routes */}
      <Route component={asyncComponent(importNotFound)} />
    </Switch>
  );
};
