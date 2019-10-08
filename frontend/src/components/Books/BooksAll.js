import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import axios from 'axios'
import Button from '../../components/Button/SimpleButton'

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
        console.log(this.state.books)
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

  readBook = async bookId => {
    const userReadId = this.state.user._id
    console.log('user Id ', userReadId)
    console.log('this is the book Id ' + bookId)
    console.log('Este el user Id ', userReadId)

    const { data } = await axios.post(
      `http://localhost:3000/users/${userReadId}/addToBookshelf`,
      { id: bookId }
    )
    console.log('this is data', data)
  }

  editBook = id => {
    this.props.history.push(`/allbooks/edit/${id}`)
  }

  render() {
    let { books } = this.state
    console.log(books)

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '80vw',
          height: '100vh'
        }}
      >
        {books.map((book, i) => (
          // <div className="user-container col-md-4 offset-md-4" key={i}>
          //   <div className="container">{user.email}</div>
          // </div>

          <Card
            title={book.title}
            key={book._id}
            style={{ width: '25%' }}
            cover={<img src={book.imageBook} alt={book.title} height="500px" />}
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
    )
  }
}
