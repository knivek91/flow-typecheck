// @flow
import React from "react";

import {
  ShowResult,
  ComponentWithPropsAndState,
  HooksPropsState
} from "./components";

const App = () => {
  return (
    <div>
      <ShowResult result={2} />
      <ComponentWithPropsAndState
        initialValue={parseInt(Math.random() * 10, 10)}
      />
      <HooksPropsState initialValue={parseInt(Math.random() * 10, 10)} />
    </div>
  );
};

export default App;
