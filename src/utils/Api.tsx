import axios from 'axios';


export type Country = { code: string, name: string };

export default class API {
    static getCountries(callback: (o: Country[]) => any)
    {
        return axios({
            url: '/api/countries.json',
            method: 'get'
        }).then(response => {
            callback(response.data);
        });
    }
}
