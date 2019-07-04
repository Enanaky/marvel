import React from 'react';

export default function CarouselCard(props) {
  
  return (
    <div className="bd-example" id="carousel">
      <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner-left">
          <div className="carousel-item active">
            <img src={props.heroes[12].img} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.heroes[12].name}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.heroes[13].img} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.heroes[13].name}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.heroes[11].img} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.heroes[11].name}</h5>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </a>
      </div>
    </div>
  );
}