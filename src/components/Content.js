import React, { Component } from "react";
import arrayCity from "./Data";
import Cards from "./Cards";
import "../styles.css";

export default class Content extends Component {
  render() {
    const DisplayCity = arrayCity.map(city => {
      return (
        <Cards key={city.id} img={city.img} city={city.name} text={city.text} />
      );
    });
    return <div className="Main">{DisplayCity}</div>;
  }
}
