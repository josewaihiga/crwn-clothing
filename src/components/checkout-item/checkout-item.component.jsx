// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.actions";

// Styles
import {CheckoutItemContainer, ImageContainer, ItemName, ItemQuantity, ItemPrice, ItemArrow, ItemValue, RemoveButton} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems); 

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem))
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem))
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem))

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <ItemArrow onClick={removeItemHandler}>
          &#10094;
        </ItemArrow>
        <ItemValue>{quantity}</ItemValue>
        <ItemArrow onClick={addItemHandler}>
          &#10095;
        </ItemArrow>
      </ItemQuantity>

      <ItemPrice>${price * quantity}</ItemPrice>
      <RemoveButton onClick={clearItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
