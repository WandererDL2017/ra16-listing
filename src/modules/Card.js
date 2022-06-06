import React from "react";

function Card(props) {
  const { item } = props;

  const getTitle = (title) => {
    return title.length > 50 ? `${title.substring(0, 50)}...` : title; 
  };

  const getPrice = (price, currency) => {
    if (currency === 'USD') {
      return `$${price}`;
    } else if (currency === 'EUR') {
      return `€${price}`;
    } else {
      return `${price} ${currency}`;
    }
  }

  const getQuantity = (quantity) => {
    if (quantity <= 10) {
      return 'low';
    } else if (quantity <= 20) {
      return 'medium';
    } else {
      return'high';
    }
  }

  const quantityClassName = `item-quantity level-${getQuantity(item.quantity)}`;

  return item.state === 'active' ? (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.MainImage.url_570xN} alt="item" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{getTitle(item.title)}</p>
        <p className="item-price">{getPrice(item.price, item.currency_code)}</p>
        <p className={quantityClassName}>{`${item.quantity} left`}</p>
      </div>
    </div>
  ) : null;
}

export default Card;