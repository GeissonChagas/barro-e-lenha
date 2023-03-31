import React from 'react';
import './ServicosComponent.css';
import ServicosComponent from './ServicosComponent';

const ServicosComponent = ({ items }) => {
  return (
    <div className="servicos">
      {items.map((item) => (
        <ServicosComponent key={item.id} image={item.image} description={item.description} />
      ))}
    </div>
  );
};

export default ServicosComponent;

