import { Container, ItemDetails, Name } from "./cart-item.styles";

export type CartItemType = {
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  id: string;
};

type CartItemProps = {
  cartItem: CartItemType
}

const CartItem = ({ cartItem }:CartItemProps) => {
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
