import React, { Component } from 'react'
import { Button, Dimmer, Header, Image } from 'semantic-ui-react'

class RecipeCard extends Component {
  state = {}

  handleShow = () => this.setState({ active: true })
  handleHide = () => this.setState({ active: false })

  render() {
    const { active } = this.state
    const content = (
      <div>
        <Header as='h2' inverted>
          {this.props.recipe.recipeName}
        </Header>
          <Button primary onClick={()=>this.props.handleClick(this.props.recipe.recipeName)}>See Recipe</Button>
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
        src={this.props.recipe.smallImageUrls[0].replace("=s90","")}
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


export default RecipeCard;
