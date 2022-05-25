import React from "react";
import styled from "styled-components";

const ContainMain = styled.div`
  width: 50vw;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background-color: darkred;
  margin-left: 20vw;
  border-radius: 10px;
  color: pink;
  box-shadow: 5px 5px 3px black;

  h2 {
    font-size: 6vw;
  }

  div {
    width:80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1vw;

    button {
      font-size: 3vw;
      color: pink;
      background-color: darkred;
      border-radius: 5px;
      border: none;
      &:hover {
        cursor: pointer;
        background-color: pink;
        color: darkred;
        transition: background-color 0.8s;
        transition: color 0.8s;
      }
    }
  }
`;

export default class App extends React.Component {
  state = {
    cont: 0
  };

  Start = () => {
    const Parar = setInterval(() => {
      this.setState({
        cont: this.state.cont + 1
      });
    }, 1000);

    this.Stop = () => {
      clearInterval(Parar);
    };
  };

  Restart = () => {
    this.setState({
      cont: 0
    });
  };

  render() {
    return (
      <ContainMain>
        <h1>Cronômetro</h1>
        <h2>{this.state.cont}</h2>
        <div>
          <button onClick={this.Start}>Start</button>
          <button onClick={this.Restart}>Restart</button>
          <button onClick={this.Stop}>Stop</button>
        </div>
      </ContainMain>
    );
  }
}
