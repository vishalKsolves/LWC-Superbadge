import { LightningElement } from "lwc";
import { NavigationMixin } from 'lightning/navigation'; 

 export default class BoatSearch extends NavigationMixin(LightningElement) {
    _isLoading = false;
    
    handleLoading() {
        this._isLoading = true;
    }
    
    handleDoneLoading() {
        this._isLoading = false;
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { }
    
    createNewBoat() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Boat__c',
                actionName: 'new'
            }
        });
    }
  }
  