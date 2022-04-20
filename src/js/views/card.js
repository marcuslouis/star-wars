import React, {useContext} from "react";
import {Context} from "../store/appContext";
import {Link} from "react-router-dom";


export const Card = () => {
    const {store, actions} = useContext(Context)
  
    return(
        <>
{store.demo.results && store.demo.results.map((element, index) => {
	return (
		
    <div key={index} className="row row-cols-1 row-cols-md-3 g-5">
        <div className="card col-5" style={{width: "18rem"}}>
  <img src={store.img + element.uid + ".jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{element.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to={"/details/"+ element.uid} className="btn btn-primary">Go somewhere</Link>
    <button type="button" className="btn btn-outline-warning">♥</button>
  </div>
</div>
</div>
	
	);
})}
</>
    )
}