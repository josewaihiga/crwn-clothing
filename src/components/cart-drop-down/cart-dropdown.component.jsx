import { CartContext } from "../../contexts/cart.context"
import Button from "../button/button.component"
import "./cart-dropdown.styles.scss"
import { useContext } from "react"


const CartDropdown = () => {

    const {cart} = useContext(CartContext)

    return (
        <div className={`cart-dropdown-container ${cart?.open ? "opened" : "closed"}`}>
            <div className="cart-items"/>
            <Button>Go to checkout  </Button>
        </div>
    )
}

export default CartDropdown