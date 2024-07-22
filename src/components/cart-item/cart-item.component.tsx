import { FC } from "react";
import { Container, ItemDetails, Name } from "./cart-item.styles";
import {CartItem as TCartItem} from "../../store/cart/cart.types"


type CartItemProps = {
  cartItem: TCartItem
}

const CartItem:FC<CartItemProps> = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />

      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </Container>
  );
};

export default CartItem;
