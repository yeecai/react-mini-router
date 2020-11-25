import { parsePath, Path} from './utils';

export type Listener = (location: Location) => void;
export type State = object | null;

export interface Location<S extends State = State> extends Path {
    state: S;
} 

function getLocaion (): Location{
    const { pathname, search, hash} = window.location;
    return Object.freeze({
        pathname,
        search,
        hash,
        state : null,
    })
}

function getNextLocation(to: string, state: State = null) {
    return Object.freeze({
        ...parsePath(to),
        state
    })
}

let location = getLocaion();
function push(to: string, state?: State){
    location = getNextLocation(to, state);
    window.history.pushState(state, '', to);
    listeners.forEach(callback => callback(location))
}

let listeners: Listener[] = [];
function listen (callback: Listener) {
    listeners.push(callback);
    // return a callback to unregister listener
    return function() {
        const fn = callback; // in case closure
        listeners = listeners.filter(listener => listener !== fn)
    }
} 

export const history = {
    get location() {
        return location;
    },
    push,
    listen,
};