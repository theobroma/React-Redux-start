import React, { Component } from 'react';
import { connect } from 'react-redux'
import shortid from 'shortid';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import api from './api';
import MediumCommentsItem from './MediumCommentsItem';
import { loadComments,deleteComments } from './actions/mediumActions';

class MediumComments extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.loadComments();
  }

  handleDelete(){
    this.props.deleteComments();
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            <div className="comments-title column is-12">
              Responses
              <a className="button is-warning" onClick={this.handleDelete}>Delete comments</a>
            </div>
            <div className="comment-list column is-12">
              <div className="columns is-multiline">
                <CSSTransitionGroup
                  transitionName="example"
                  transitionLeave={true}
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={300}>
                  {this.props.comments.data.reverse().map(item => (<MediumCommentsItem key={shortid.generate()} item={item} />))}
                </CSSTransitionGroup>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


function mapStateToProps(state) {
  return {
    comments: state.comments
  };
}

export default connect(mapStateToProps,{loadComments,deleteComments})(MediumComments);
