const CartItem = (props) => {
  const {item, handleDeleteFromCart} = props;
  return (
    <li className="cart-item" key={item.id}>
      <div className="name">{item.name}</div>
      <div className="price">@ ${item.price}</div>
      <button onClick={() => handleDeleteFromCart(item.id)} ><i className="far fa-times-circle"></i></button>
    </li>
  );
}
 
export default CartItem;