import React, {useContext} from "react";
import { Character } from "../component/Character.jsx";
import {Context} from "../store/appContext";
import "../../styles/home.css";


export const Star = () => {
	const {store, actions} = useContext(Context)
  console.log("this", store)
	return(
		
<>
<div className="d-flex justify-content-center">
    <Character />
</div>
	</>
	)
};
