import React from 'react';

const Smurfs = (props) => {
    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => {
                return (
                    <div className="smurf" key={smurf.name}>
                        <p><strong>{smurf.name}</strong></p>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Smurfs;