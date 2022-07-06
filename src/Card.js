import React from "react";
import './Card.css';

export default function Card(props) {
    return (
      <div className="card mb-5 mb-lg-0">
        
        <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">{props.plan}</h5>
          <h6 className="card-price text-center">${props.price}<span className="period">/month</span></h6>
          <hr />

          <ul className="fa-ul">
            {props.description.map((value, index) => {
              return(
                <li key={index} className={value.visiblityClass}>
                  <span className="fa-li">
                    <i className={value.icon}></i>
                  </span>{value.text}
                </li>
              )
            })}
          </ul>
          <div className="d-grid">
            <button className="btn btn-primary text-uppercase" >Button</button>
          </div>
        </div>
      </div>

    )
};