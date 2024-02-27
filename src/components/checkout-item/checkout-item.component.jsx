import {CheckoutItemContainer, ImageContainer, ItemName, ItemQuantity, ItemPrice, ItemArrow, ItemValue, RemoveButton} from "./checkout-item.styles";

import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);

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
