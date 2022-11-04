import { LightningElement, wire } from 'lwc';

export default class BoatTile extends LightningElement {
    CONSTANT = {
        TILE_WRAPPER_SELECTED_CLASS : 'tile-wrapper selected',
        TILE_WRAPPER_UNSELECTED_CLASS : 'tile-wrapper'
    }

    boat;
    selectedBoatId;
    
    // Getter for dynamically setting the background image for the picture
    get backgroundStyle() { }
    
    // Getter for dynamically setting the tile class based on whether the
    // current boat is selected
    get tileClass() { }
    
    // Fires event with the Id of the boat that has been selected.
    selectBoat() { }
}  