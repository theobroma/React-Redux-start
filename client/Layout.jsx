import React, { Component } from 'react';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <div className="site-content">
          <section>
            {React.cloneElement(this.props.children,this.props)}
          </section>
        </div>
      </div>
    );
  }
}
