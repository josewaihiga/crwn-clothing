import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  
  const {cart, setCart} = useContext(CartContext)
  
  const toggleCart = () => {

    if(cart.open){

      setCart({...cart, open:false})
    
    } else {
      setCart({...cart, open:true})

    }
 
  }

  return (
  <div className="cart-icon-container" onClick={toggleCart}>

    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">10</span>
  </div>
    )
};

export default CartIcon;
