import React, { Component, Fragment } from 'react';
import './App.css';

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    number: 10,
    inc: () => {
      this.setState({
        number: this.state.number + 1
      })
    },
    dec: () => {
      this.setState({
        number: this.state.number - 1
      })
    }
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>

        {this.props.children}

      </AppContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <AppProvider>

        <Blue />

      </AppProvider>
    );
  }
}

const Blue = () => {
  return (
    <Fragment>
      <AppContext.Consumer>
        {context => (
          <div>
            <button onClick={context.inc}>INC</button>
            <button onClick={context.dec}>DEC</button>
            <h1>{context.number}</h1>
          </div>
        )
        }

      </AppContext.Consumer>

        <Green />

    </Fragment>
  );
}


const Green = () => {
  return (
    <AppContext.Consumer>

      {context => context.number}

    </AppContext.Consumer>
  );
}

export default App;
