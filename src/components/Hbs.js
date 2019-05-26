import React, { Component } from "react";
import axios from "axios";
import Hb from "./Hb";
import Add from "./Add";


class Hbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hbs: [],
            loading: true,
            error: ""
        };
        this.updateHbs = this.updateHbs.bind(this);
    }
    componentDidMount() {
        axios.get("/api/hbs/")
        .then(response => {
            console.log(response.data)
            this.setState({hbs: response.data});
        })
        .catch(error => {
            console.log(error);
            this.setState({loading: false, error: "An error occurred"});
        });
    }
 
    updateHbs(newHbs) {
      this.setState({ hbs: newHbs });
    }

    render() {
        
        const { hbs } = this.state;
        
        return(
            <div>
            <section className="hbs">
                
            
                {hbs.map((hb, index) => {
                   return(
                    <Hb key={index} index={index} hb={hb} updateHbs={this.updateHbs}/>
                   )}
                   
                )}
                
            </section>
            <Add updateHbs = {this.updateHbs}/>
            </div>
        );
    }
}




export default Hbs;