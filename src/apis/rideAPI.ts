import User from "../models/user"
import Cookies from 'js-cookie'
import Ride from "../models/ride"
const rideAPI = {
    async getRides():Promise<Ride[]>{
        const result = await fetch(`http://localhost:50907/api/ride/v1`,
        {
            method:'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        var body = await result.json()
        var rides = body as Ride[]
        return rides
    },

   
}

export default rideAPI