import React, {useContext}from "react"
import {Context} from "../store/appContext";


export const Character = () => {
    const {store, actions} = useContext(Context)
    console.log(store.data)
    return(
           		
        <>
        {
            store.data.result ?
            <div>
            <div className="card mb-3" style={{width: "70%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={store.img + store.data.result.uid + ".jpg"}className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{store.data.result.properties.name}</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <h1>loading...</h1>
        }
           
        </>
    )
}