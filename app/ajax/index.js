'use strict';

module.exports = {
    get
}

function get(url) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.open("GET", url);
        request.onload = () => {
            if (request.status === 200) {
                resolve(request.response);
            } else {
                reject(new Error(request.statusText));
            }
        };
 
        request.onerror = () => {
            reject(new Error("Network error"));
        };
 
        request.send();
    });
}
