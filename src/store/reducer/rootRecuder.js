const initState = {
    users : [
        {id: 1, name: 'John'},
        {id: 2, name: 'Quân'},
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users
            users = users.filter((item)=> item.id !== action.payload.id)
            return {...state, users}
        case 'ADD_USER':
            let idnewUser = Math.floor(Math.random() * 100001)
            let user = {
                id : idnewUser,
                name : `random - ${idnewUser}` 
            }
            return {...state,users: [...state.users,user]}
        default:
            return state
    }
    
}

export default rootReducer