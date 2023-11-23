interface userDto  {
    id?:        Exclude<any, null | undefined>
    name:       Exclude<any, null | undefined> 
    email:      Exclude<any, null | undefined>
    password:   Exclude<any, null | undefined>
    age:        Exclude<any, null | undefined>
}

export default userDto