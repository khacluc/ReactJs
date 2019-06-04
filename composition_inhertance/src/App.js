import React from 'react';

import './App.css';

const FancyBorder = (props) => {
  return (
    <div className={"fancyBorder " + props.color} >
      {props.children}
    </div >
  )
}

class WelcomeDialog extends React.Component {
  render() {
    return (
      <FancyBorder color="blue">
        <h1>Welcome</h1>
        <p>Thank you for visiting our spacecraft!</p>
      </FancyBorder>

    );
  }
}




class App extends React.Component {
  render() {
    return (
      // output in react
      <WelcomeDialog />
    );
  }

}
export default App;
