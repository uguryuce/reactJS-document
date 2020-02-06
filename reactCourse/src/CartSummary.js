import React, { Component } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink
} from "reactstrap";

export default class CartSummary extends Component {
  renderSummary() {
      return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        Options - {this.props.cart.length}
      </DropdownToggle>
      <DropdownMenu right>
        {this.props.cart.map(cartItem => (
          <DropdownItem>
            
            <Badge color="danger" onClick={()=>this.props.removeFromCart(cartItem.product)}>x</Badge>
            {cartItem.product.productName}
            <Badge color="dark">{cartItem.quantity}</Badge>
          </DropdownItem>
        ))}

        <DropdownItem>Option 1</DropdownItem>

        <DropdownItem divider />
        <DropdownItem>Reset</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>)
  }

  renderEmptyCart(){
      return (
      <NavItem>
          <NavLink>Emty Cart</NavLink>
      </NavItem>
      )
  }
  render() {
    return <div>
        {this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}
    </div>;
  }
}
