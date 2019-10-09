import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/SimpleButton'
import TopBar from '../TopBar'

export default class BooksAll extends Component {
  state = {
    books: [],
    user: {
      username: '',
      email: '',
      genres: '',
      description: '',
      contacts: [],
      booksRead: []
    },
    user: JSON.parse(localStorage.getItem('user'))
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/books/allbooks')
      .then(response => {
        this.setState({ books: response.data.book })
        // console.log(this.state.books)
      })
      .catch(error => {
        console.log(error)
      })
  }
  deleteBook = id => {
    axios
      .delete(`http://localhost:3000/books/allbooks/${id}`)
      .then(response => {
        this.setState(prevState => {
          return {
            ...prevState,
            books: prevState.books.filter(e => e._id !== response.data.book._id)
          }
        })
      })
      .catch(err => console.log(err))
  }

  readBook = async book => {
    const userReadId = this.state.user._id
    // console.log('user Id ', userReadId)
    // console.log('this is the book Id ' + book)
    // console.log('Este el user Id ', userReadId)

    const { data } = await axios.post(
      `http://localhost:3000/users/${userReadId}/addToBookshelf`,
      { id: book }
    )
    // console.log('this is data', data)
    this.setState(prevState => {
      return this.props.history.push('/profile', { new: true })
    })
  }

  editBook = id => {
    this.props.history.push(`/allbooks/edit/${id}`)
  }

  render() {
    let { books } = this.state
    console.log(books)

    return (
      <div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            width: '100vw',
            height: '100vh',
            marginTop: '40px'
          }}
        >
          <div className="header-new">
            <div className="header2">
              <h1>Encuentra tu nuevo libro favorito </h1>
            </div>
            <div>
              <div className="header2">
                <Link to={`/addbook`}>
                  <h2>Añade libro</h2>
                </Link>
              </div>
            </div>
          </div>

          {books.map((book, i) => (
            // <div className="user-container col-md-4 offset-md-4" key={i}>
            //   <div className="container">{user.email}</div>
            // </div>

            <Card
              title={book.title}
              key={book._id}
              style={{ width: '15%' }}
              cover={
                <img
                  src={book.imageBook}
                  alt={book.title}
                  height="500px"
                  width="350px"
                />
              }
              actions={[
                <Icon
                  type="delete"
                  key="delete"
                  onClick={() => this.deleteBook(book._id)}
                />,
                <Icon
                  type="edit"
                  key="edit"
                  onClick={() => this.editBook(book._id)}
                />
              ]}
            >
              <Button color="black" onClick={() => this.readBook(book._id)}>
                Add to my Books
              </Button>
            </Card>
          ))}
        </div>
      </div>
    )
  }
}
