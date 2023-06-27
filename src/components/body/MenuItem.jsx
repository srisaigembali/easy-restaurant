import React from 'react';
import { Card } from 'react-bootstrap';

const MenuItem = (props) => {
  return (
    <div>
      <Card style={{ width: '25rem', marginTop: '15px' }}>
        <Card.Img
          variant="top"
          src={props.dish.image}
          style={{ cursor: 'pointer' }}
          onClick={() => props.DishSelect(props.dish)}
        />
        <Card.Body>
          <Card.Title
            style={{ cursor: 'pointer' }}
            onClick={() => props.DishSelect(props.dish)}
          >
            {props.dish.name}
          </Card.Title>
          {/* <Card.Text>{props.dish.description.slice(0, 50)}...</Card.Text> */}
          <p>
            <b>Price: ${props.dish.price}</b>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuItem;
