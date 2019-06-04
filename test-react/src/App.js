import React from 'react';
import logo from './logo.svg';
import './App.css';

// component display user and guest with handing
const UserGreeting = () => {
  return <h3>Please sing in</h3>
}
const GuestGreeting = () => {
  return <h3>Welcome back!</h3>
}

// using null diplay warning
const WarningBanner = (props) => {
  // console.log(!props.warn)
  if (!props.warn) {
    return null;
  } else {
    return (
      <div className='warning'>Warning!</div>
    );
  }

}

// exam using map()
const Exam_map = (props) => {
  // let key = 0;
  const numbers = ['author', 'comic', 'english', 'gozila'];
  // const listItem = numbers.map((number, index) => <li key={index}>{number}</li>);
  return numbers[3];
}

// lifting state up
const BoilingVerdict = (props) => {
  if (props.cecius > 100) {
    return <p> The water would boil</p>
  } else {
    return <p>The water would not boil</p>
  }
}


// app main
class App extends React.Component {

  // constructor with props and state
  constructor(props) {
    super(props);
    this.state = {
      seacrchText: '',
      seacrchCount: 0,
      resultCount: 0,
      isToggleOn: true,
      name: 'Kavin',
      showWarning: true,
      numbers: ['author', 'comic', 'english', 'gozila'],
      tempurater: '',
    }
  }

  // push value in text box
  changeSeacrchText(e) {
    let varible = e.target.value;
    this.setState({ seacrchText: varible });
  }

  // function logictis searchCount and resultCount
  doSearch() {
    this.setState(
      (prevState, props) => {
        var count = this.state.seacrchText.length * 3;
        return {
          seacrchCount: prevState.seacrchCount + 1,
          resultCount: count
        };
      }
    );
  }

  // button on off
  doChange() {

    this.setState({
      isToggleOn: !this.state.isToggleOn
    });
  }

  // funtion diplay uerGreeting and guestGreeting
  greeting = () => {
    if (this.state.isToggleOn) {
      return <UserGreeting />;
    } else {
      return <GuestGreeting />;
    }

  }

  // function exam pind
  obj = () => {
    if (this.state.isToggleOn)
      return <p>{"See you again " + this.state.name + '!'}</p>

  }

  // exam using warnning
  handleToggleClick = () => {
    this.setState(
      () => {
        return { showWarning: !this.state.showWarning }
      }
    );
  }

  // lifting state up
  handleChange(e) {
    this.setState(
      {
        tempurater: e.target.value
      }
    )
  }



  // render app
  render() {
    return (
      <div>
        <h1>State example:</h1>
        {this.greeting()}
        <button onClick={this.doChange.bind(this)}>{this.state.isToggleOn ? 'Login' : 'Logout'}</button>
        <div>
          <input type='text' value={this.state.seacrchText} onChange={this.changeSeacrchText.bind(this)}></input>
          <input type='button' value='Search' onClick={this.doSearch.bind(this)}></input>
        </div>
        <div>Search Text:{this.state.seacrchText}</div>
        <div>Search Count:{this.state.seacrchCount}</div>
        <div>result Count:{this.state.resultCount}</div>
        <br />
        {this.obj()}

        {/* show warning */}
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick.bind(this)}>
          {this.state.showWarning ? 'hide' : 'show'}

        </button>
        <br />
        <div>
          {this.state.numbers.map((item, index) => (
            <li key={index}>{item + index}</li>
          ))}
        </div>
        <div>
          Enter tempurature in Celius:
            <input value={this.state.tempurater} type='text' onChange={this.handleChange.bind(this)}></input>
          <BoilingVerdict cecius={parseFloat(this.state.tempurater)} />
        </div>

      </div>
    )
  }

}

export default App;
