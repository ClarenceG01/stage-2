import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import "./creditcard.css";

const CreditCard = ({ onCardDetailsChange }) => {
  console.log(onCardDetailsChange);
  const [card, setCard] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCard((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (e) => {
    setCard((prev) => ({ ...prev, focus: e.target.name }));
  };
  useEffect(() => {
    onCardDetailsChange(card);
  }, [card, onCardDetailsChange]);
  return (
    <section id="credit-card">
      <Cards
        number={card.number}
        expiry={card.expiry}
        cvc={card.cvc}
        name={card.name}
        focused={card.focus}
      />
      <form>
        <input
          type="text"
          name="number"
          placeholder="Card Number"
          value={card.number}
          maxLength="16"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={card.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY Expiry"
          value={card.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={card.cvc}
          maxLength="3"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </section>
  );
};

export default CreditCard;
