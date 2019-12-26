export type TShowResult = {
  result: number
};

export interface TComponentProps {
  initialValue: number;
}

export type THookProps = TInitialValue & {};

export type TComponentState = {
  currentNumber: number,
  internalId: ?IntervalID
};

type TInitialValue = {
  initialValue: number
};
