import React from "react";
import axios from "axios";

function Hb(props) {
    console.log(props)
    return (
    <article key={props.index} className="hb">
        {props.hb 
            ? 
                <div>
                    <img src={props.hb.image} alt={props.hb.description}/>
                <section>
                    <h3>{props.hb.price}</h3>
                    <h3>{props.hb.description}</h3>
                    <h3>{props.hb.contact}</h3>
                    <button id="deleteButton"
                        onClick={() => {
                            axios.delete("/api/hbs/" + props.hb.description).then(response => {
                                props.updateHbs(response.data);  
                                 
                            });
                        }}
                    >Delete</button>
                 </section>
                </div>
            : 
                null 
        }
        
        </article>
     );
}





export default Hb; 