import React from 'react';
import './App.css';
import Card from './Card';
import data  from './pricing.json';

function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {data.map((value, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <Card
                    plan = {value.plan}
                    price = {value.price}
                    description = {value.description}
                  />
                </div>
              )  
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
