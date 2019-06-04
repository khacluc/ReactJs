import React from 'react';
import './App.css';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
}

// display boil
const BoilingVerdict = (props) => {
  if (props.celius >= 100) {
    return <p className='boil'>The water would boil</p>
  } else {
    return <p >The water would not boil</p>
  }
}

// convert celsius with fahrenhit
function toCelius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// if input is NaN
function tryConvert(temperature, convert) {
  var input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  } else {
    const output = convert(input);
    const round = Math.round(output * 1000) / 1000;
    return round.toString();
  }
}


class TemperatureInput extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   tempeture: '',
    // };
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    const temperature = this.props.temperature;
    return (
      <div className="scaleNames">
        Enter temperature in {scaleNames[this.props.scale]}:
        <input type='text' value={temperature} onChange={this.handleChange.bind(this)} ></input>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenhietChange = this.handleFahrenhietChange.bind(this);
    this.state = {
      temperature: '',
      scale: '',
    }
  }

  handleCelsiusChange(temperature) {
    console.log(temperature)
    this.setState({
      scale: 'c',
      temperature,
    }
    )
  }

  handleFahrenhietChange(temperature) {
    console.log(temperature)
    this.setState(
      {
        scale: 'f',
        temperature,
      }
    )
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale == 'f' ? tryConvert(temperature, toCelius) : temperature;
    const fahrenheit = scale == 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div className='my-temperature'>
        <h1>My Temperature</h1>
        <TemperatureInput
          scale='c'
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale='f'
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenhietChange}
        />
        <BoilingVerdict celius={temperature} />
      </div>

    );
  }

}

export default App;
