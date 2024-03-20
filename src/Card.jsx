import React from 'react'
import './App.css'

function Card({items}) {
    return (
        <>
            <div class="col-md-4">
                <div class="card" style={{ width: "20rem" }}>
                    <img src={items.imagesource} class="card-img-top" alt="..." style={{ height: "15rem" }}/>
                    <div class="card-body">
                        <p class="card-text">{items.Name}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card