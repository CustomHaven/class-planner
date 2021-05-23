import React from 'react';
import { Tile } from "../tile/Tile";

export class TileList extends React.Component {
    render() {
        return (
            <div>
                {this.props.tiles.map((tile, index) => <Tile key={index} tile={tile} />)}
            </div>
        )
    }
}