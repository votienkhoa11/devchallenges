export function load (key) {
    try {
        return JSON.parse( localStorage.getItem(key));
    } catch (err) {
        return false;
    }
}

export function save (key, value) {
    try {
        return localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        return false;
    }
}

export function remove (key) {
    try {
        return localStorage.removeItem(key)
    } catch (err) {
        return false;
    }
}

export function clear () {
    try {
        return localStorage.clear();
    } catch (err) {
        return false;
    }
}