import React, {Component} from "react";
import axios from "axios";

class Edit extends Component
  constructor(props) {
      super(props)
      this.state = {
        hb: [],
        loading: true,
        error: ""
    };

      this.handleChange = this.handleChange.bind(this);
  }

        updateHb={this.state.hb}
        this.setState({ hb: updateHb });

  render(){
      return(
          <div> 
              <button id="Edit"
              onclick={() => 

                axios.put("/api/hbs/" + props.hb.description).then(response => {
                props.updateHbs(response.data);  
                 
            });
        }}
        >Edit Info</button>
          </div>
          }
        
  


export default Edit;