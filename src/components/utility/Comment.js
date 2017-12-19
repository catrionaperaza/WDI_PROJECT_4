import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';

class Comment extends React.Component {

  state = {

    comment: {
      body: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/dinners/${this.props.match.params.id}`)
      .then(res => this.setState({ comment: res.data }))
      .catch(err => console.log(err));

    const newComment = Object.assign({}, this.state.comment, { comments: this.state.chat.comments.concat(newComment)});
    this.setState({ comment: { body: '' } });
  }

  handleCommentChange = ({ target: { value }}) => {
    this.setState({ comment: { body: value } });
  }

  handleCommentSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/dinners/:id/comments', this.state.comment, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="comments">
          <h1 className="comment">Comments</h1>
        </div>
        <div className="comment-div">
          { this.state.comments && this.state.comments.map((comment, i) =>
            <div key={i}>
              <p><span><strong>{ comment.user.username }:</strong> { comment.body }</span></p>
            </div>
          )}
        </div>
        <hr />
        <div className="comment-container">
          {Auth.isAuthenticated() && <form onSubmit={this.handleCommentSubmit}>
            <input className="comment-input" onChange={this.handleCommentChange} type="text" name="content" value={this.state.comment.body} />
            <input type="submit" value="Send" />
          </form>}
        </div>
      </div>
    );
  }
}

export default Comment;
