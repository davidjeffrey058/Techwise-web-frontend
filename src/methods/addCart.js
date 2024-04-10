const { url2 } = require('./urls');

function addOrRemoveCart(uid, body) {
    fetch(`${url2}/cart/${uid}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: body
        }).then(res => { })
        .catch(err => { })
}

module.exports = addOrRemoveCart;