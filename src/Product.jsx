import React from "react";
import { useState } from "react";

function Product({ item }) {
  const [disable, setDisable] = useState(false);
  const [buttonText, setButtonText] = useState("Добавить в корзину");
  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setDisable(true);
    console.log("hello");
    setButtonText("уже в корзине");
  };

  const handleDelete = () => {
    setDisable(false);
    setButtonText("Добавить в корзину");
  };
  const handleDetails = () => {
    setModal(!modal);
  };

  return (
    <div className="product">
      <div className="card__image">
        <img src={item.image} alt="sneaker" />
      </div>
      <div className="details">
        <div className="name_price_info">
          <p className="name">{item.name}</p>
          <p className="price">{item.price}</p>
        </div>
        <button onClick={handleDetails}>Детали</button>
        {modal && (
          <div className="modal">
            <div className="modal__content">
              <span className="close_btn" onClick={handleDetails}>
                &times;
              </span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
                ipsa!
              </p>
            </div>
          </div>
        )}
      </div>

      <hr />
      <div className="lorem_korb">
        <p className="lorem">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          consequatur!
        </p>
        <button onClick={handleClick} disabled={disable}>
          {buttonText}
        </button>
        {disable && (
          <div className="delete_text" onClick={handleDelete}>
            Удалить из корзины
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
