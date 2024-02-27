import {Container, ItemDetails, Name} from "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <Container>
      <img src={imageUrl} alt={`${name}`} />

      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">{quantity} x ${price}</span>
      </ItemDetails>
    </Container>
  );
};

export default CartItem;
