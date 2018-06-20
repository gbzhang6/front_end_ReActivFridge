import React from 'react';

const IngredientCard = () => {

  return(
    
    <div className="ui special cards">
      <div className="card">
        <div className="blurring dimmable image">
          <div className="ui dimmer">
            <div className="content">
              <div className="center">
                <div className="ui inverted button">Add</div>
              </div>
            </div>
          </div>
          <img src="/images/avatar/large/elliot.jpg" alt=""/>
        </div>
        <div className="content">
          <a className="header">Team Fu</a>
          <div className="meta">
            <span className="date">Created in Sep 2014</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IngredientCard;
