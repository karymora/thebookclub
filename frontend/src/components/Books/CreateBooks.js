import React, { Component } from 'react'
import AUTH_SERVICE from '../../services/index'
import Button from '../../components/Button/Button'
import { MyContext } from '../../context'

export default class CreateBooks extends Component {
  state = {
    book: {
      title: '',
      author: '',
      date: '',
      bookGenre: '',
      description: '',
      image: ''
      // reviews: '',
      // stars: ''
    },
    response: undefined
  }

  handleInput = e => {
    this.setState({
      book: {
        ...this.state.book,
        [e.target.name]: e.target.value
      }
    })
  }

  addBook = e => {
    e.preventDefault()
    AUTH_SERVICE.addbook(this.state.book)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('de aquí no')
      })
  }

  render() {
    let { book } = this.state
    console.log(this.state.book)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh'
        }}
      >
        <div className={{ width: '80vw' }}>
          <form onSubmit={this.addBook}>
            <div
              className="container sign-up-total"
              style={{
                display: 'flex',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div
                className="col-md-12"
                style={{
                  display: 'inline-block',
                  marginTop: '20px'
                }}
              >
                {/* Title */}

                <div className="form-group">
                  <label for="formGroupExampleInput">Title</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="text"
                    className="form-control"
                    onChange={this.handleInput}
                    name="title"
                    value={book.title}
                  />
                </div>

                {/* Author*/}

                <div className="form-group">
                  <label for="formGroupExampleInput">Author</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="text"
                    className="form-control"
                    onChange={this.handleInput}
                    name="author"
                    value={book.author}
                  />
                </div>

                {/* Image*/}
                <div className="form-group">
                  <label for="formGroupExampleInput">Image</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    className="form-control"
                    onChange={this.handleInput}
                    type="text"
                    name="imageBook"
                    placeholder="Image URL"
                    value={book.imageBook}
                  />
                </div>

                {/* Date */}

                <div className="form-group">
                  <label for="formGroupExampleInput">
                    {' '}
                    Date of publication{' '}
                  </label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="date"
                    className="form-control"
                    onChange={this.handleInput}
                    name="date"
                    value={book.date}
                  />
                </div>
                {/* Genre */}

                <div className="form-group">
                  <label for="formGroupExampleInput"> Genre </label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="text"
                    className="form-control"
                    onChange={this.handleInput}
                    name="bookGenre"
                    value={book.bookGenre}
                  />
                </div>
                {/* Description */}

                <div className="form-group">
                  <label for="formGroupExampleInput">Description</label>
                  <input
                    style={{
                      height: '40px',
                      backgroundColor: '#EEEEEE',
                      border: 'none',
                      borderStyle: 'none'
                    }}
                    type="text"
                    className="form-control"
                    onChange={this.handleInput}
                    value={book.description}
                    name="description"
                  />
                </div>

                <Button bg="black" htmlType="submit">
                  Add Book
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

CreateBooks.contextType = MyContext
