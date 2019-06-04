import React from 'react';
import './App.css';



class BookItem extends React.Component {

  constructor(props) {
    super(props)

  }

  // function push ID throught handle onClick
  handleDelete = () => {
    let ID = this.props.id;
    this.props.delete(ID);

  }

  // handle edit and push value table row
  handleEdit = () => {
    let ID = this.props.id;
    let name = this.props.name;
    let author = this.props.author;
    this.props.edit(ID, name, author);
  }

  // render table row
  render() {
    return (
      <tr>
        <th>{this.props.id}</th>
        <td>{this.props.name}</td>
        <td>{this.props.author}</td>
        <td>
          <button name="delete" id="delete" onClick={this.handleDelete}>Delete</button>
          <button name="edit" id="edit" onClick={this.handleEdit}>Edit</button>
        </td>
      </tr>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [
        {
          ID: '1',
          nameBook: 'Game of throne',
          author: 'R.king',
        },
        {
          ID: '2',
          nameBook: 'Theo broken windown',
          author: 'Daver',
        },
        {
          ID: '3',
          nameBook: 'The Lord of the ring',
          author: 'Covey',
        }
      ]
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
  }

  // get data from form table
  handleOnChange = (event) => {
    let target = event.target;
    let value = target.value;
    const name = target.name;// 'nameBook' || "authur"
    this.setState({ [name]: value });
    // this.setState({ ["nameBook"]: value });
    // this.setState ({ nameBook: value});
    // this.setState({nameBook: value});
    // this.setState({authur: value})
    // this.state.name = 'linh'
    // this.state.value = '9'
    // console.log(name)

  }


  handleAdd = () => {

    let kt = false;
    let books = this.state.books;
    let newBook = {
      ID: this.state.ID,
      nameBook: this.state.nameBook,
      author: this.state.author,
    }
    for (var index = 0; index < books.length; index++) {
      let element = books[index];
      if (newBook.ID === element.ID) {
        element.ID = newBook.ID;
        element.nameBook = newBook.nameBook;
        element.author = newBook.author;
        kt = true;
      }
    }
    if (kt) {
      this.setState({ books });
    } else {
      books.push(newBook);
      this.setState({ books });
    }
  }

  deleteRow = (ID) => {
    let books = this.state.books;

    for (var index = 0; index < books.length; index++) {
      const element = books[index]
      if (element.ID === ID) {
        books.splice(index, 1);
      }
    }
    this.setState({ books })
  }

  handleCancel = () => {
    let ID = "";
    this.setState({ ID, nameBook: '', author: '' })


  }

  editRow = (ID, nameBook, author) => {
    this.setState({ ID: ID, nameBook: nameBook, author: author })
  }

  render() {

    const listBooks = this.state.books.map(e => (
      < BookItem key={e.ID} id={e.ID} name={e.nameBook}
        author={e.author} delete={this.deleteRow} edit={this.editRow} />
    ));
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h1 className='listBook'>My Books List</h1>
            <table className='table table-striped'>
              <thead>
                <tr className=" bg-secondary">
                  <th className="ID">ID</th>
                  <th className="nameBook">nameBook</th>
                  <th className="author">author</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody className="table-striped">
                {listBooks}
              </tbody>
            </table>
          </div>
          <div className="col-lg-5">
            <h1 className='header'>  Input information My book</h1>
            <form>
              <div className='text-form row'>
                <span className='text-input col-lg-4'>ID:</span>
                <input className='col-lg-8' type='text' placeholder="...." value={this.state.ID} name="ID" id="ID" onChange={this.handleOnChange} />
              </div>

              <div className='text-form row'>
                <span className='text-input col-lg-4'>Name book:</span>
                <input className='col-lg-8' type='text' placeholder="...." value={this.state.nameBook} name="nameBook" id="nameBook" onChange={this.handleOnChange} />
              </div>

              <div className='text-form row'>
                <span className='text-input col-lg-4'>Authur:</span>
                <input className='col-lg-8' type='text' name="author" value={this.state.author} placeholder="...." id="author" onChange={this.handleOnChange} />
              </div>
              <div className='text-button'>
                <input type='button' value='Save' onClick={this.handleAdd}></input>
                <input type='button' value='Cancel' onClick={this.handleCancel}></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
