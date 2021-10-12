import React from "react";
import mechanic1 from "../../images/mechanic/mechanic-1.jpg";
import mechanic2 from "../../images/mechanic/mechanic-2.jpg";
import mechanic3 from "../../images/mechanic/mechanic-3.jpg";
import mechanic4 from "../../images/mechanic/mechanic-4.jpg";
import mechanic5 from "../../images/mechanic/mechanic-5.jpg";
import mechanic6 from "../../images/mechanic/mechanic-6.jpg";
import Expert from "./Expert";

const experts = [
    {
        id: 1,
        img: mechanic1,
        name: "Andrew Smith",
        expertize: "-Engine Expert-",
    },
    {
        id: 2,
        img: mechanic2,
        name: "John Anderson",
        expertize: "-Polish Expert-",
    },
    {
        id: 3,
        img: mechanic3,
        name: "Hugh Hawkins",
        expertize: "-Interior Expert-",
    },
    {
        id: 4,
        img: mechanic4,
        name: "Brandon Johnson",
        expertize: "-Coloring Expert-",
    },
    {
        id: 5,
        img: mechanic5,
        name: "Darrel Evans",
        expertize: "-Allround Expert-",
    },
    {
        id: 6,
        img: mechanic6,
        name: "Anthony Miller",
        expertize: "-Diagnosis Expert-",
    },
];

const Experts = () => {
    return (
        <div className="container my-3">
            <h1 className="mb-3 text-success">All mechanics</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {experts.map((expert) => (
                    <Expert key={expert.id} expert={expert}></Expert>
                ))}
            </div>
        </div>
    );
};

export default Experts;
