import decode from 'jwt-decode'
import axios from 'axios'


//const REST_ENDPOINT = 'http://localhost:3000/'
const AUTH_TOKEN_KEY = 'authToken'

// to get the user info in the frontend
export let userInfo = '';

export function loginUser(email, password) {
    return new Promise(async (resolve, reject) => {
        try {

            //console.log(email)

            let res = await axios({
                //url: `${REST_ENDPOINT}api/v1/auth/token`,
                url: 'http://localhost:5000/authentication/login',
                method: 'POST',
                data: {
                    email: email,
                    password: password
                    //grant_type: 'password'
                }
            })

             // check response 
             //console.log(res)
             userInfo = res;

            //setAuthToken(res.data.token)
            setAuthToken(res.data.jwtToken)
            resolve()
        }
        catch (err) {
            console.error('Caught an error during login:', err)
            reject(err)
        }
    })
}


// Register Function

// to get the user info in the frontend
export let newUserInfo = '';

export function registerUser(name, email, password) {
    return new Promise(async (resolve, reject) => {
        try {

            //console.log(name)

            let res = await axios({
                //url: `${REST_ENDPOINT}api/v1/auth/token`,
                url: 'http://localhost:5000/authentication/register',
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                data: {
                    name: name,
                    email: email,
                    password: password
                    //grant_type: 'password'
                },

                //body: JSON.stringify(data)

            })

             // check response 
             //console.log(res)
             newUserInfo = res;

             //const parseRes = await res.json();

             if (res.data.jwtToken) {

                //setAuthToken(res.data.token)
                setAuthToken(res.data.jwtToken)
                resolve()

               //localStorage.setItem("token", res.data.jwtToken);
               
              
             } else {
               
               console.log(res);
             }
           } catch (err) {
             console.error(err.message);
             reject(err)
           }
    })
}



// call this function when user logsout
export function logoutUser() {
    clearAuthToken()
}

export function setAuthToken(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    localStorage.setItem(AUTH_TOKEN_KEY, token)
}

export function getAuthToken() {
    return localStorage.getItem(AUTH_TOKEN_KEY)    
}

// clear the token in localstorage
export function clearAuthToken() {
    axios.defaults.headers.common['Authorization'] = ''
    localStorage.removeItem(AUTH_TOKEN_KEY)
}

// to check if user is logged in
export function isLoggedIn() {
    let authToken = getAuthToken()
    return !!authToken && !isTokenExpired(authToken)
}

export function getUserInfo() {
    if (isLoggedIn()) {
        return decode(getAuthToken())
    }
}

function getTokenExpirationDate(encodedToken) {
    let token = decode(encodedToken)
    if (!token.exp) {
        return null
    }
  
    let date = new Date(0)
    date.setUTCSeconds(token.exp)
  
    return date
}
  
function isTokenExpired(token) {
    let expirationDate = getTokenExpirationDate(token)
    return expirationDate < new Date()
}