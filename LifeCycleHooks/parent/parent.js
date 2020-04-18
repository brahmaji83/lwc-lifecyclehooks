import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {
    status = 'set';

    constructor(){
        super();
        console.log('constructor');
    }

    connectedCallback(){
        console.log('connectedcallback');
    }

    renderedCallback(){
        console.log('renderedCallback');
    }

    disconnectedCallback(){

    }
    
    errorCallback(error, stack){
        console.log('errorcallback' + error );
        //console.log(stack);
    }
}
