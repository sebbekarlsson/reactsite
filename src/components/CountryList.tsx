import * as React from "react";

import API, { Country } from "../utils/Api";


export interface MyProps {
  title: string;
}

type MyState = { countries: Country[] };

export class CountryList extends React.Component<MyProps, MyState>
{
    constructor(props: MyProps)
    {
        super(props);

        this.state = {countries: []};
    }

    componentDidMount()
    {
        API.getCountries((o: Country[]) => { this.setState({ countries: o }); });
    }

    render()
    {
        return (
            <div>
                <h1>{ this.props.title }</h1>
                <ul>
                {this.state.countries.map((item, index) => (
                    <li key={ index }>{ item['name'] } ({ item['code'] })</li>
                ))}
                </ul>
            </div>
        );
    }
}
