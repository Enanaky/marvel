import React from 'react';

export default function CarouselCard(props) {
  
  return (
    <div className="bd-example" id="carousel">
      <div id={props.initialRandomData.name} className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target={`#${props.initialRandomData.name}`} data-slide-to="0" className="active"></li>
          <li data-target={`#${props.initialRandomData.name}`} data-slide-to="1"></li>
          <li data-target={`#${props.initialRandomData.name}`} data-slide-to="2"></li>
      </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={props.initialRandomData.data[0].img} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.initialRandomData.data[0].name}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.initialRandomData.data[1].img} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.initialRandomData.data[1].name}</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={props.initialRandomData.data[2].img} className="d-block w-100" alt="..."></img>
            <div className="carousel-caption d-none d-md-block">
              <h5>{props.initialRandomData.data[2].name}</h5>
            </div>
          </div>
        </div>
        <div className="carousel-control-prev-container">
          <a className="carousel-control-prev" href="..." data-target={`#${props.initialRandomData.name}`} role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
        </div>
        <div className="carousel-control-next-container">
          <a className="carousel-control-next" href="..." data-target={`#${props.initialRandomData.name}`} role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  );
}