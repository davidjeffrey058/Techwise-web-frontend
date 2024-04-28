import { url2 } from "./urls";

const addUser = (user) => {
    fetch(`${url2}/exist/${user.uid}`, {
        body: JSON.stringify({
            uid: user.uid,
            name: user.displayName,
            email: user.email
        }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

export default addUser;