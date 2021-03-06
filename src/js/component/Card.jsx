import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";


export const Card = () => {
    const {store, actions} = useContext(Context)
    console.log(store)
  
    return(
        <>
{store.demo.results && store.demo.results.map((element, index) => {
	return (
		
    <div key={index} className="row row-cols-1 row-cols-md-3 g-5">
        <div className="card col-5" style={{width: "18rem"}}>
  <img src={store.img + element.uid + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text"></p>
    <Link to={"/details/" + element.uid}>
                  <button
                    onClick={() => {
                      actions.data(element.uid);
                    }}
                    className="btn btn-primary"
                  >
                    Learn More
                  </button>
                </Link>
    <button onClick={() => {
     { if(store.list.includes(element)){
        alert('you already added this character')
      } 
      else{
        actions.favorite(element)

         }
    }}} type="button" className="btn btn-outline-warning">♥</button>
  </div>
</div>
</div>
	
	);
})}
</>
    )
}