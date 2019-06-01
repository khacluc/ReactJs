import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Date } from 'core-js';



class Mybook extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    // lifeCycly
    componentDidMount() {
        this.timeID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState(
            { date: new Date() }
        );
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className=' col-lg-7'>
                        <h1 className='header'>My Book</h1>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th className='content-text'>STT</th>
                                    <th className='content-text'> Type of Book</th>
                                    <th className='content-text'>Name Book</th>
                                    <th className='content-text'>Date Time</th>
                                    <th className='content-text'>Author</th>
                                    <th className='content-text'>Issue</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='content-text'>1</td>
                                    <td className='content-text'>Autobiography</td>
                                    <td className='content-text'>Gone with the Wind</td>
                                    <td className='content-text'>May, 12</td>
                                    <td className='content-text'>...</td>
                                    <td className='content-text'>...</td>
                                </tr>
                                <tr>
                                    <td className='content-text'>2</td>
                                    <td className='content-text'>Epic</td>
                                    <td className='content-text'>Game of throne</td>
                                    <td className='content-text'>June, 03</td>
                                    <td className='content-text'>...</td>
                                    <td className='content-text'>...</td>
                                </tr>
                                <tr>
                                    <td className='content-text'>3</td>
                                    <td className='content-text'>Epic</td>
                                    <td className='content-text'>The Lord of the Ring</td>
                                    <td className='content-text'>July, 14</td>
                                    <td className='content-text'>...</td>
                                    <td className='content-text'>...</td>
                                </tr>
                                <tr>
                                    <td className='content-text'>4</td>
                                    <td className='content-text'>Detective</td>
                                    <td className='content-text'>The broken Windown</td>
                                    <td className='content-text'>March, 21</td>
                                    <td className='content-text'>...</td>
                                    <td className='content-text'>...</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    <div className='input-myBook col-lg-5'>
                        <h1 className='header'>  Input information My book</h1>
                        <h6>Time: {this.state.date.toLocaleTimeString()}.</h6>
                        <form>
                            <div className='text-form row'>
                                <span className='text-input col-lg-4'>Type of Book:</span>
                                <input className='col-lg-8' type='text' ></input>
                            </div>
                            <div className='text-form row'>
                                <span className='text-input col-lg-4'>Name book:</span>
                                <input className='col-lg-8' type='text' ></input>
                            </div>
                            <div className='text-form row'>
                                <span className='text-input col-lg-4'>Date time:</span>
                                <input className='col-lg-8' type='text' ></input>
                            </div>
                            <div className='text-form row'>
                                <span className='text-input col-lg-4'>Authur:</span>
                                <input className='col-lg-8' type='text' ></input>
                            </div>
                            <div className='text-button'>
                                <input type='button' value='Save'></input>
                                <input type='button' value='Edit'></input>
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Mybook />, document.getElementById('root'));
