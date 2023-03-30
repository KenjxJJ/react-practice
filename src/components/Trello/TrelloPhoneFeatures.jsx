import React from "react";
import Card from "../Card/Card";
import MoreOptionsButton from "../MoreOptionsButton/MoreOptionsButton";
import "./TrelloPhoneFeatures.css";

const TrelloPhoneFeatures = ({ items }) => {
  return (
    <div className="trello-phone-features-section">
      <section className="header">
        <h1>Phone Features</h1>
        <MoreOptionsButton />
      </section>
      <section className="card-item-section">
        {items.map(({ title }) => (
          <Card title={title} />
        ))}
      </section>
      <section className="add-card-section">
        <p className="add-card">Add a card...</p>
      </section>
    </div>
  );
};

export default TrelloPhoneFeatures;
