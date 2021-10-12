import React from "react";

const Expert = (props) => {
    const { name, expertize, img } = props.expert;
    return (
        <div className="col my-2">
            <div class="card">
                <img src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">{expertize}</p>
                </div>
            </div>
        </div>
    );
};

export default Expert;
