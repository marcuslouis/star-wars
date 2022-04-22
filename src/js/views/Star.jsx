import React, {useContext} from "react";
import { Character } from "../component/Character.jsx";
import {Context} from "../store/appContext";


export const Star = () => {
	const {store, actions} = useContext(Context)
  console.log("this", store)
	return(
		
<>
<div>
    <Character />
</div>
	</>
	)
};
