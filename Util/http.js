import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/users'
export async function GetUserData(){
    const response = await axios.get(URL)
    return response.data
}