import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContentEditable from "react-contenteditable"
import onClickOutside from 'react-onclickoutside'
import api from './api'
import { onResponseChange,clearCommentData,onPublish } from './actions/mediumActions'

class ResponseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: "<b>Hello</b>"
    };
    this.focus = () => this.refs.editor.focus();
    this.handleChange = this.handleChange.bind(this);
    this.handlePublish = this.handlePublish.bind(this);
  }
  //don't rename;need for "react-onclickoutside"
  handleClickOutside = evt => {
    this.props.formHandleClickOutside(evt);
  }

  handleChange(evt){
    this.props.onResponseChange(evt.target.value);
  }

  handlePublish(){
    /*api.publishComment(this.props.medium);*/ //need rewrite usin Redux
    this.props.onPublishUI();
    this.props.onPublish(this.props.medium);
    this.props.clearCommentData();

  }
  render () {
    return (
      <div className="response-form-inner">
        {/*<pre>{JSON.stringify(this.props, '', 4)}</pre>*/}
        <div className="response-form-top">
          <div className="response-form-header">
            Responses
          </div>
          <ContentEditable
            ref="editor"
            className="response-form-input"
            html={this.props.medium.response} // innerHTML of the editable div
            disabled={false}       // use true to disable edition
            onChange={this.handleChange} // handle innerHTML change
          />
        </div>
        <div className="response-form-footer">
          <a className="button is-primary" onClick={this.handlePublish}>Publish</a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    medium: state.medium
  };
}

export default connect(mapStateToProps,{onResponseChange,clearCommentData,onPublish})(onClickOutside(ResponseForm));
