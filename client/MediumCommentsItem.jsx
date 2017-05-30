import React, { Component } from 'react';
import moment from 'moment';

export default class MediumCommentsItem extends Component {

  render() {
    const {username, content, excerption, createdAt} = this.props.item;
    return (
      <div className="comment-item column is-12">
        <div className="columns is-multiline">
          <div className="comment-header column is-12">
            <div className="comment-author">{username}</div>
            <div className="comment-date">{moment(createdAt).format('LLL')}</div>
          </div>
          <div className="comment-excerption column is-12">{excerption}</div>
          <div className="comment-content column is-12"><span>{content}</span></div>
        </div>
      </div>
    );
  }
}
