import React from "react";
import Terminator from '../terminator/terminator.components';

const TerminatorList = ({ models }) => {

    return (
        <div>
            {models.map((model) => {

                return (
                    <Terminator
                        key={model.id}
                        id={model.id}
                        name={model.name}
                        serialNumber={model.seralNumber} />
                )
            })}
        </div>
    )
};

export default TerminatorList;