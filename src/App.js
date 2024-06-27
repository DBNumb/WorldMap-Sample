import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorldMap from "react-svg-worldmap";
import {CountryContext} from "react-svg-worldmap";
import * as React from "react";
import json_data from "./common/country.json"


const Data = json_data.Test

const getStyle = ({
                      countryValue,
                      countryCode,
                      minValue,
                      maxValue,
                      color,
                  }: CountryContext) => {
    const foundElement=Data.find(elem => elem.country === countryCode.toLowerCase());
    return {
        fill: foundElement===undefined?"white": foundElement.color,
        fillOpacity:countryValue? 0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue): 0,
        stroke:"green",
        strokeWidth:1,
        strokeOpacity:0.2,
        cursor:"pointer",
    };
};


function App() {


    const country_data = Data.map(data => {
        return {
            country: data.country,
            value: data.value
        }
    })
    return (
        <div className="App">
            <WorldMap
                color="red"
                title="World Map"
                value-suffix="people"
                size="responsive"
                data={country_data}
                styleFunction={getStyle}
            />
        </div>
    );
}

export default App;
