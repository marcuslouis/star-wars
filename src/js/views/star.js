import React, {useContext} from "react";
import {Context} from "../store/appContext";


export const Star = () => {
	const {store, actions} = useContext(Context)
  console.log("this", store)
	return(
		
<>
<div>
<div class="card mb-3" style={{width: "540px"}}>
  <div class="row g-0">
    <div class="col-md-4">
    <img src={store.img + store.single.result.uid + ".jpg"}class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{store.single.result.properties.name}
</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
	</>
	)
};
