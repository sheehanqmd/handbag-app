import React from "react";
import axios from "axios";

function Hb(props) {
    console.log(props)

    const { hb, index } = props
    return (
    <article key={props.index} className="hb">
        {hb 
            ? 
                <div>
                    <img src={hb.image} alt={hb.description}/>
                <section>
                    <h3>{hb.price}</h3>
                    <h3>{hb.description}</h3>
                    <h3>{hb.contact}</h3>
                    <button id="deleteButton"
                        onClick={() => {
                            axios.delete("/api/hbs/" + hb.description).then(response => {
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