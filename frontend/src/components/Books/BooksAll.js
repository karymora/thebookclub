import React, { Component } from 'react'
import { Card, Icon } from 'antd'
import axios from 'axios'
import Button from '../../components/Button/Button'

export default class BooksAll extends Component {
  state = {
    books: []
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
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          width: '100vw',
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
            <Button bg="black" onClick={() => this.editBook(book._id)}>
              Add to my Books
            </Button>
          </Card>
        ))}
      </div>
    )
  }
}
