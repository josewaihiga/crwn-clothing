// React
import { Fragment } from "react";
import { Outlet } from "react-router-dom";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentDisplayName, selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

// Components
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-drop-down/cart-dropdown.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown-logo.svg";

// Utils
import { signOutStart } from "../../store/user/user.action";

// Styles
import { NavigationContainer, LogoContainer, NavLinks, NavLink, DisplayName, Wave } from "./navigation.style";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const displayName = useSelector(selectCurrentDisplayName);

  const dispatch = useDispatch();

  const signOutUser = () => {
    dispatch(signOutStart());
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          
          {displayName && (
            <DisplayName draggable="true" as="span">
              <Wave>👋</Wave> {displayName}
            </DisplayName>
          )}

          <NavLink to="/shop">SHOP</NavLink>

          {
            currentUser ? (

              <NavLink as="span" onClick={signOutUser}>
                SIGN OUT
              </NavLink>
              
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )
          }

          <CartIcon />
        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
