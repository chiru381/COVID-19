import React,{Component} from 'react';
import Axios from 'axios';

class World extends Component{
    constructor(){
        super();
        this.state={
            data: [],
            errMessage: "",
        }
    }
    componentDidMount(){
        Axios.get('https://corona.lmao.ninja/v2/countries')
        .then((response)=>{
            this.setState({
                data: response.data,
            })
        })
        .catch((err)=>{
            this.setState({
                errMessage: err,
            })
        })
    }
    render(){
        return<>
        <div className="row">
            <div className="col-md-12">
                <table className="table table-primary">
                    <thead>
                        <tr>
                            <th><h5>Country Name</h5></th>
                            <th><h5>Country Image</h5></th>
                            <th><h5>Total Cases</h5></th>
                            <th><h5>Recovered</h5></th>
                            <th><h5>Deaths</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((itm,ky)=>{
                            return(
                                <tr>
                                    <td>{itm.country}</td>
                                    <td><img src={itm.countryInfo.flag} style={{width: '64px', marginLeft: '10px'}} /></td>
                                    <td>{itm.cases}</td>
                                    <td>{itm.recovered}</td>
                                    <td>{itm.deaths}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    }
}
export default World;