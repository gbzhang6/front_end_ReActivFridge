import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const IngredientCard = (props) => {
  return (
    <Card>
      <Image src={props.ingredient.imgUrl} />
      <Card.Content>
        <Card.Header>{props.ingredient.name}</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default IngredientCard;
