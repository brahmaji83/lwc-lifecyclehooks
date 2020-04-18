import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {

    message = 'child';

    constructor(){
        super();
        console.log('constructor - child');
    }

    connectedCallback(){
        console.log('connectedcallback - child');
    }

    renderedCallback(){
        console.log('renderedCallback - child');
    }

    disconnectedCallback(){

    }
    
    errorCallback(error, stack){
        console.log('errorcallback' + error );
        console.log(stack);
    }
}