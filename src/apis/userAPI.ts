import User from "../models/user"
import Cookies from 'js-cookie'
const userAPI = {
    async register(user:User):Promise<void>{
        const result = await fetch(`http://localhost:50907/api/user/v1/register`,
        {
            method:'POST',
            body:JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
        })
        
    },

    async login(loginDetails:any):Promise<User>{
        const result = await fetch(`http://localhost:50907/api/user/v1/login`,
        {
            method:'POST',
            body:JSON.stringify(loginDetails),
            headers: { 'Content-Type': 'application/json' },
        })
        var body = await result.json()
        var user = body as User
        Cookies.set("user",JSON.stringify(user));
        return user
        
    }
}

export default userAPI