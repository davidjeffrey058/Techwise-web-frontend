
const AddOrRemWish = (uid, pid, added = true, callbackMethod, url) => {
    fetch(`${url}/list/${uid}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product: pid, added: added })
    }).then(Response => callbackMethod())

        .catch(() => alert('Unable to add to wishlist'));
}

export default AddOrRemWish