import React, { Component } from "react";

type CounterState = {
  count: number;
};

export class Counter extends React.Component<{}, CounterState> {
  state: CounterState = {
    count: 0,
  };
  
  render() {
    return <div>Counter</div>;
  }
}
