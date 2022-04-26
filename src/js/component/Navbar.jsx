import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
import "../../styles/home.css";
export const Navbar = () => {
	const {store, actions} = useContext(Context)
	
	return (
		<><nav className="navbar navbar-light bg-light mb-3">
	<div className="font">
	STAR WARS	
			</div>
			<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">{store.list.map((item, index) => {
					return (
						<ul  >
							<li key={index} className="mr-2">
							<Link to={"/details/" + item.uid}>
                  <button
                    onClick={() => {
                      actions.data(item.uid);
                    }}
                    className="btn btn-primary"
                  >
                    {item.name}
                  </button>
                </Link>
								
								
							</li>
							<a
									className="m1-2 btn btn-danger"
									onClick={() => {
										actions.delete(index);
									}}>
									<i className="fa fa-trash" aria-hidden="true"></i>

								</a>
						</ul>
					);
				})}</a></li>
    
  </ul>
</div>

		</nav>
		</>
	);
};
