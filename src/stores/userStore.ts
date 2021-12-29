import { makeAutoObservable, observable } from "mobx"
import User from "../models/user"


export class UserStore {
    
    @observable user: User = { password: '',
        email: '',
        firstName: '',
        lastName: '',
        age: 0,
        userType: 2}

    constructor() {
        makeAutoObservable(this)


    }

    setCoronaStatus = (user: User) => {
        this.user = user
    }

  
  
}

const userStore = new UserStore()

export default userStore