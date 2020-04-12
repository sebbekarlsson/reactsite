import * as React from "react";

import API, { Country } from "../utils/Api";


export interface MyProps {
  title: string;
}

type MyState = { countries: Country[], selectedCountry: number };

const liSelectedStyle = {
    color: 'blue'
};

const liStyle = {
    cursor: 'pointer'
};

export class CountryList extends React.Component<MyProps, MyState>
{
    constructor(props: MyProps)
    {
        super(props);

        this.state = {countries: [], selectedCountry: -1};
    }

    componentDidMount()
    {
        API.getCountries((o: Country[]) => { this.setState({ countries: o }); });
    }

    countryClick(index: number)
    {
        this.setState({ selectedCountry: index});
    }

    render()
    {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <p>{this.state.selectedCountry > -1 ? (this.state.selectedCountry) : "No country selected"}</p>
                <ul>
                {this.state.countries.map((item, index) => (
                    <li
                        style={index == this.state.selectedCountry ? liSelectedStyle : liStyle}
                        onClick={ () => this.countryClick(index) }
                        key={ index }>
                        { item['name'] } ({ item['code'] })
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}
