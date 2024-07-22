// React
import { useNavigate } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";

// Components
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

// Styles
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";


const CartDropdown = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
    dispatch(setIsCartOpen(false))
  };

  return (
    <CartDropdownContainer>
      <CartItems>

          {
            cartItems.length ? (cartItems.map((item) => ( <CartItem key={item.id} cartItem={item} /> ))) : (<EmptyMessage>Your cart is empty</EmptyMessage>)
          }


      </CartItems>
      <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
