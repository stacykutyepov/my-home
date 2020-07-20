import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import HeartIcon from "../heart-icon/heart-icon.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";

import { auth } from "../../firebase/firebase.utils";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
      <LogoContainer to="/">myhome</LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">Shopping</OptionLink>
        <OptionLink to="/shop">Contacts</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to="/signin">Sign In</OptionLink>
        )}
        <OptionLink to="/favorite">
          <HeartIcon />
        </OptionLink>
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
