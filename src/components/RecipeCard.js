import React from 'react';

const RecipeCard = () => {
  return(
    <div class="ui special cards">
      <div class="card">
        <div class="blurring dimmable image">
          <div class="ui dimmer">
            <div class="content">
              <div class="center">
                <div class="ui inverted button">Add</div>
              </div>
            </div>
          </div>
          <img src="/images/avatar/large/elliot.jpg" alt=""/>
        </div>
        <div class="content">
          <a class="header">Recipe Cards</a>
          <div class="meta">
            <span class="date">Created in Flatiron</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;
