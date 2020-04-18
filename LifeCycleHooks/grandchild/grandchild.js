import { LightningElement, track, api } from 'lwc';

export default class App extends LightningElement {

    message = 'anotherchild';

    constructor(){
        super();
        console.log('constructor - grand child');
    }

    connectedCallback(){
        console.log('connectedcallback - grand child');
    }

    renderedCallback(){
        console.log('renderedCallback - grand child');
    }

    disconnectedCallback(){

    }
    
    errorCallback(error, stack){
        console.log('errorcallback' + error );
        console.log(stack);
    }
}