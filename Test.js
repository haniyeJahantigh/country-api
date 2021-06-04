import React, {Component} from 'react';

export default class Test extends Component {
    state={
        citys :[]
    }
    
    componentDidMount(){    
        fetch("https://restcountries.eu/rest/v2/")
      .then(res => res.json())
      .then((res)=>{
          console.log(res);
          this.setState({ citys : res });
      })
    }
    handleCountry=(e)=>{
        console.log(e.target.id);
        fetch(`https://restcountries.eu/rest/v2/name/${e.target.id}`)
        .then(res => res.json())
        .then((res) =>{
            console.log("sjdkhjsd" , res);
            this.setState({ citys : res });
        })
      }
    render() {
        return (
            <div>
                <ul>
                    {this.state.citys.map(item =>{
                        return(
                        <li id={item.name} onClick={this.handleCountry}>{item.name}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}