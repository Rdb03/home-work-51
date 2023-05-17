import React from "react";

interface IPersonProps {
    number: number;
}

const Person: React.FC<IPersonProps> = props => {
    return (
        <div className="person">
           <p className="numberCase">{props.number}</p>
        </div>
    );
};

export default Person;