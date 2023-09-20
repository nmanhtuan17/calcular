
const initState = {
    courses: [
        {
            id: 1,
            maMH: 'abc',
            name: 'HTTT',
            tinChi: 3,
            heSo: 1.6
        },
        {
            id: 2,
            maMH: 'xyz',
            name: 'APP',
            tinChi: 2,
            heSo: 1.6
        },
        {
            id: 3,
            maMH: 'bcd',
            name: 'Test',
            tinChi: 3,
            heSo: 1.4
        },
    ],
    tuitions: [

        {
            id: 1,
            hocKy: 1,
            nhom: 2,
            nam: '2023-2034',
            hocPhi: 9000000,
            tinhTrang: 'DA_THU',
            soTin: 15,
            soMon: 4
        }, 
        {
            id: 2,
            hocKy: 2,
            nhom: 2,
            nam: '2023-2034',
            hocPhi: 1000000,
            tinhTrang: 'DA_THU',
            soTin: 15,
            soMon: 4
        },
        {
            id: 3,
            hocKy: 3,
            nhom: 2,
            nam: '2023-2034',
            hocPhi: 9700000,
            tinhTrang: 'DA_THU',
            soTin: 15,
            soMon: 4
        },
    ],
    mucPhi: 450000

}

const rootReducer = (state = initState, action) => {
    let data = action.payload
    switch (action.type) {
        case 'ADD_COURSE':
            
            let id = Math.random()
            let newCourse = {
                id: id,
                maMH: data.maMH,
                name: data.name,
                tinChi: data.tinChi,
                heSo: data.heSo
            }

            return {
                ...state, courses: [...state.courses, newCourse]
            }
        case 'UPDATE_DVT':
            return {
                ...state, mucPhi: data.mucPhi
            }
        default:
            return state
    }
}
export { initState }
export default rootReducer