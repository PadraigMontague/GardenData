import React from 'react';

class BrowserState extends React.Component{
    constructor(props) {
        super(props);
    }

    setBrowserState(itemname, data) {
        localStorage.setItem(itemname, JSON.stringify(data));
    }

    getBrowserState(itemname) {
        return localStorage.getItem(itemname);
    }

    removeBrowserState(itemname) {
        localStorage.removeItem(itemname);
    }

    clearBrowserState() {
        localStorage.clear();
    }
}

export default BrowserState;