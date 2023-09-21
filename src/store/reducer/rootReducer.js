
const initState = {
    courses: [],
    tuitions: [],
    users: [],
    userLogin: {},
    mucPhi: 450000

}

const rootReducer = (state = initState, action) => {
    let data = action.payload
    switch (action.type) {
        case 'UPDATE_DVT':
            return {
                ...state, mucPhi: data.mucPhi
            }
        case 'SET_COURSES':
            return {
                ...state, courses: data
            }
        case 'SET_USERS':
            return {
                ...state, users: action.users
            }
        case 'SET_USERLOGIN':
            return {
                ...state, userLogin: {...action.userlogin}
            }

        case 'SET_TUITIONS':
            return {
                ...state, tuitions: data
            }
        default:
            return state
    }
}
export { initState }
export default rootReducer