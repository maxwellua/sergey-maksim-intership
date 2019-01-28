async function getUser(id) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    let data = await response.json();
    return data
    // return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    //     .then(response => response.json() )
}

async function main() {
    let user = await getUser(1);

    console.log(user)
}

main();