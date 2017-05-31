import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="site-content">
          <section>
            {this.props.children}
          </section>
        </div>
      </div>
    );
  }
}
