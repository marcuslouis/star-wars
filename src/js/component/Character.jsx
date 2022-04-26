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
            <div className="card mb-3" style={{width: "140%"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={store.img + store.data.result.uid + ".jpg"}className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{store.data.result.properties.name}</h1>
                            <p className="card-text">{store.data.result.description}</p>
                        </div>
                    </div>

                </div>
                <hr/>
                <div className="d-flex d-flex justify-content-evenly">
                    <div>
                        <h4>Eye color</h4>
                        <p>{store.data.result.properties.eye_color}</p>
                    </div>
                    <div>
                    <h4>Hair color</h4>
                        <p>{store.data.result.properties.hair_color}</p>
                    </div>
                    <div>
                    <h4>Birth year</h4>
                        <p>{store.data.result.properties.birth_year}</p>
                    </div>
                    <div>
                    <h4>Height</h4>
                        <p>{store.data.result.properties.height}</p>
                    </div>
                    <div>
                    <h4>Gender</h4>
                        <p>{store.data.result.properties.gender}</p>
                    </div>
                    <div>
                    <h4>Mass</h4>
                        <p>{store.data.result.properties.mass}</p>
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