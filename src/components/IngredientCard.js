import React, { Component } from 'react'
import { Button, Dimmer, Header, Image, Car } from 'semantic-ui-react'

class IngredientCard extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
          {this.props.ingredient.name}
        </Header>
        {!this.props.selectedIngredients.includes(this.props.ingredient.name)?
          <Button primary onClick={()=>this.props.handleClick(this.props.ingredient.name)}>Add</Button>
          :
          null
        }
      </div>
    )

    return (

      <Dimmer.Dimmable
        as={Image}
        dimmed={active}
        dimmer={{ active, content }}
        onMouseEnter={this.handleShow}
        onMouseLeave={this.handleHide}
        size='medium'
        src={this.props.ingredient.imgUrl}
        bordered
        rounded
        style={{
          "paddingLeft": "7px",
          "paddingBottom": "10px"
        }}
      />
    )

  }

}
// <Card>
//   <Image src={} />
//   <Card.Content>
//     <Card.Header>{this.props.ingredient.name}</Card.Header>
//   </Card.Content>y
// </Card>

export default IngredientCard;
