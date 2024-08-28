
const AddOrRemCart = (url2, uid, pid, added = true, callbackMethod) => {
    fetch(`${url2}/cart/${uid}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: pid, added: added })
    }).then(Response => callbackMethod())

        .catch(() => alert('Unable to add to wishlist'));
}

export default AddOrRemCart