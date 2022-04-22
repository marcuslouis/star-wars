import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
export const Navbar = () => {
	const {store, actions} = useContext(Context)
	
	return (
		<><nav className="navbar navbar-light bg-light mb-3">
	<div>
				
			</div>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Dropdown button
					</button>


				</div>
			</div>

		</nav>
		{store.list.map((item, index) => {
					return (
						<ul  >
							<li key={index} className="mr-2">
								{item.name}
							</li>
							<a
									className="m1-2 btn btn-danger"
									onClick={() => {
										actions.delete(index);
									}}>
									X
								</a>
									
						</ul>
					);
				})}
		</>
	);
};
