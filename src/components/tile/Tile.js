import React from 'react';

export class Tile extends React.Component {
    render() {
        return (
            <div className="tile-container">
                {Object.values(this.props.tile).map((value, index) => (
                    <p className={`${index === 0 ? "tile-title" : ""} tile`} >{value}</p>
                ))}
            </div>
        )
    }
}