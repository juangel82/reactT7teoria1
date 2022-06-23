// STORE - El estado global de la aplicación.
import {createStore} from 'redux'
import { mensajes } from './reducer';


 let store = createStore(
    mensajes,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__);
    
