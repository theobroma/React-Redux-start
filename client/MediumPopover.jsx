// ES6 Class Syntax
import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import { connect } from 'react-redux'
import ContentEditable from "react-contenteditable"
import classnames from 'classnames'
import ReactQuill, { Quill } from 'react-quill'
import { onGetSelection } from './actions/mediumActions';
import SelectionPopover from './SelectionPopover'
import MediumComments from './MediumComments'
import ResponseForm from './ResponseForm'
import myText  from './myText.json'

class MediumPopover extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopover: false,
      showCommentForm:false,
      contentEditableState:false,
      text: ""

    };
    this.getSelection = this.getSelection.bind(this);
    this.onPublishUI = this.onPublishUI.bind(this);
    this.formHandleClickOutside = this.formHandleClickOutside.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePencil = this.handlePencil.bind(this);
    this.surroundSelection = this.surroundSelection.bind(this);
  }

  componentWillMount() {
      this.setState({
        text: myText.text
      });
  }

  handleChange(value) {
    this.setState({ text: value })
  }
  handlePencil() {
    this.setState({ contentEditableState:true });
    this.surroundSelection() ;
    this.setState({ contentEditableState:false });
    console.log('test');
  }

  getSelection () {
    const selectionText = window.getSelection().toString();
    this.props.onGetSelection(selectionText);
    this.setState({ showCommentForm: true });
  }

  onPublishUI(){
     this.setState({ showCommentForm: false });
  }

  formHandleClickOutside = evt => {
    this.setState({ showCommentForm: false });
  }

  surroundSelection() {
    if (window.getSelection) {
        var sel = window.getSelection();
        if (sel.rangeCount > 0) {
            var range = sel.getRangeAt(0);
            var startNode = range.startContainer, startOffset = range.startOffset;
            var boundaryRange = range.cloneRange();
            var newNode = document.createElement("span");
            newNode.className = "is-highlight";
            boundaryRange.surroundContents(newNode);
            // Reselect the original text
            sel.removeAllRanges();
            sel.addRange(range);
        }
    }
}
  render() {
    const { showCommentForm, showPopover } = this.state;
    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div  data-selectable className="selectable-text column is-12" contentEditable={this.state.contentEditableState}>
                {this.state.text}
              </div>
              <SelectionPopover
                showPopover={showPopover}
                onSelect={() => {this.setState({showPopover: true})}}
                onDeselect={() => {this.setState({showPopover: false})}}
              >
              <ul className="popover-list" >
                <li>
                  <button className="btn-popover" onClick = {this.handlePencil}>
                    <i className="fa fa-pencil"></i>
                  </button>
                </li>
                <li>
                  <button className="btn-popover" onClick={this.getSelection}>
                    <i className="fa fa-comment-o"></i>
                  </button>
                </li>
              </ul>
              <div className="arrow-clip">
                <span className="arrow-clip-in"></span>
              </div>
              </SelectionPopover>
              <div className={classnames('response-form-wrap', { 'is-fadeOut': this.state.showCommentForm })}>
                <ResponseForm onPublishUI={this.onPublishUI} formHandleClickOutside = {this.formHandleClickOutside}/>
              </div>
            </div>
          </div>
        </section>
        <MediumComments/>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    medium: state.medium
  };
}

export default connect(mapStateToProps,{onGetSelection})(MediumPopover);
