// ES6 Class Syntax
import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import SelectionPopover from './SelectionPopover'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showPopover: false,
      showCommentForm:false
    };
  }


  render() {
    return (
      <div style={{
        position: 'relative'
      }}>
        <div data-selectable>
          <p>
            This is the first selectable paragraph. Looking pretty good.
          </p>
          <p>
              Donut lemon drops toffee chupa chups pastry wafer ice cream biscuit. Fruitcake candy canes bonbon biscuit jelly beans. Donut icing marzipan marzipan chocolate cake jelly beans danish. Gummi bears powder sugar plum gummi bears macaroon liquorice chocolate cake marzipan tootsie roll. Sweet gummies cotton candy carrot cake sweet jelly toffee liquorice oat cake. Danish tiramisu carrot cake caramels cake. Croissant apple pie donut gummi bears. Jelly danish bonbon powder sweet roll toffee gummies. Tiramisu muffin marshmallow muffin danish gummi bears. Tiramisu tootsie roll pastry lemon drops fruitcake bear claw chocolate bar tiramisu. Gingerbread oat cake lemon drops wafer croissant macaroon. Wafer fruitcake muffin.
            Chocolate bar macaroon soufflé donut croissant. Marshmallow sesame snaps ice cream chocolate bar wafer jelly jujubes. Brownie cake bear claw soufflé. Dragée sugar plum bonbon jelly tootsie roll carrot cake liquorice sesame snaps. Sweet roll fruitcake gummies. Gummi bears carrot cake tiramisu chupa chups cupcake brownie. Cheesecake ice cream carrot cake apple pie cheesecake brownie wafer cupcake. Topping icing cake fruitcake chocolate bar jelly-o fruitcake marshmallow carrot cake. Candy chocolate cake cheesecake sweet biscuit dragée sweet. Gingerbread candy gingerbread tart. Icing cupcake bonbon fruitcake icing brownie. Apple pie liquorice pudding liquorice brownie sweet bear claw. Apple pie bear claw fruitcake.
            Pastry wafer croissant dragée marshmallow marshmallow sweet soufflé cotton candy. Cheesecake jelly-o caramels donut carrot cake liquorice cake. Powder toffee cheesecake biscuit pastry. Tart croissant pie cookie icing. Wafer gummies danish. Oat cake croissant sugar plum pie ice cream oat cake. Brownie lollipop jujubes marzipan gummies oat cake carrot cake sweet roll. Marshmallow apple pie dessert candy powder sweet chocolate cake. Brownie gingerbread tootsie roll gummies chocolate cake soufflé. Sweet roll sweet roll tiramisu marzipan chocolate bar fruitcake. Jelly-o icing gingerbread muffin apple pie fruitcake. Cake sugar plum marzipan candy jujubes gingerbread cake. Candy canes jelly-o pudding chupa chups sesame snaps brownie marzipan. Chocolate gummies candy chocolate cake toffee marshmallow dragée.
          </p>
        </div>
        <SelectionPopover
          showPopover={this.state.showPopover}
          onSelect={() => {this.setState({showPopover: true})}}
          onDeselect={() => {this.setState({showPopover: false})}}
        >
          <button>mark</button>
          <button>comment</button>
        </SelectionPopover>
      </div>
    )
  }
}
