const Item = (props) => {
  const { items, handleAddToCart } = props;
  return (
    <ul className="items">
      {
        items.map((item) => {
          return (
            <li className="item" key={item.id}>
              <img src="https://media.steelseriescdn.com/thumbs/catalogue/products/00981-rival-650-wireless/a0fdbba64b844bce8bdf77c801ada302.png.350x280_q100_crop-fit_optimize.png" />
              <h2>{item.name}</h2>
              <div className="price">$ {item.price}</div>
              <div className="description">{item.description}</div>
              <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              </li>
          );
        })
      }
    </ul>
  )

};

export default Item;
