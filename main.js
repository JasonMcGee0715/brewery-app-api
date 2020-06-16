// require('dotenv').config()

window.onload = () => {
    getLocation();
}

const getLocation = () => {
    fetch('https://api.brewerydb.com/v2/brewery/random/?key=456c069a108bcae9db40e3e0dac4b87c')
    .then(resp => resp.json())
    .then(data => console.log(data))
}

