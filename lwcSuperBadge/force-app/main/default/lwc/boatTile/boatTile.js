import { LightningElement, api } from 'lwc';

const TILE_WRAPPER_SELECTED_CLASS = 'tile-wrapper selected';
const TILE_WRAPPER_UNSELECTED_CLASS = 'tile-wrapper';

export default class BoatTile extends LightningElement {
    @api boat;
    @api selectedBoatId;
    
    get backgroundStyle() {
        return 'background-image:url("' + this.boat.Picture__c + '")';
    }
    
    get tileClass() {
        let tileClass = this.boat.Id == this.selectedBoatId ?
                        TILE_WRAPPER_SELECTED_CLASS :
                        TILE_WRAPPER_UNSELECTED_CLASS;
        return tileClass;
    }
    
    // Fires event with the Id of the boat that has been selected.
    selectBoat(event) {
        const searchEvent = new CustomEvent('boatselect', { detail: { boatId: this.boat.Id}});
        this.dispatchEvent(searchEvent);
    }
}