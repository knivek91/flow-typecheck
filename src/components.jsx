// @flow
import React, { PureComponent, useState, useEffect } from "react";

import type {
  TShowResult,
  TComponentProps,
  TComponentState,
  THookProps
} from "./types";

export const ShowResult = ({ result }: TShowResult) => (
  <h1>Passing dump parameter: {result}</h1>
);

export class ComponentWithPropsAndState extends PureComponent<
  TComponentProps,
  TComponentState
> {
  constructor(props: TComponentProps) {
    super(props);
    this.state = {
      currentNumber: this.props.initialValue,
      internalId: null
    };
  }

  componentDidMount() {
    const id = setInterval(() => {
      this.setState(({ currentNumber }: TComponentState) => ({
        currentNumber: currentNumber + 1
      }));
    }, 1000);
    this.setState({ internalId: id });
  }

  componentWillUnmount() {
    clearInterval(this.state.internalId);
  }

  render() {
    return <h1>ComponentWithPropsAndState {this.state.currentNumber}</h1>;
  }
}

export const HooksPropsState = (props: THookProps) => {
  const [value, setValue] = useState<number>(props.initialValue);
  const [id, setId] = useState<?IntervalID>(null);

  const createInternal = (
    cb: (value: number) => mixed,
    value: number
  ): IntervalID =>
    setInterval(() => {
      cb(value + 1);
    }, 1000);

  useEffect(() => {
    setId(createInternal(setValue, value));
    return () => {
      clearInterval(id);
    };
  }, [value]);

  return <h1>ComponentWithPropsAndState {value}</h1>;
};
