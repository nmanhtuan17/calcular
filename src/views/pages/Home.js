
import { useState, useContext, useEffect } from 'react';
import axios from 'axios'
import { IoAdd } from 'react-icons/io5'
import '../../styles/style.scss'
import { toast } from 'react-toastify';
import Context from '../../store/Context';
const Home = () => {
    const [state, dispatch] = useContext(Context)
    const [courses, setCourses] = useState([])
    const [shouldFetchData, setShouldFetchData] = useState(true);
    const [isAdd, setIsAdd] = useState(false)
    const [maMH, setMaMH] = useState()
    const [nameCourse, setNameCourse] = useState()
    const [heSo, setHeSo] = useState()
    const [tinChi, setTinChi] = useState()
    useEffect(() => {
        if (shouldFetchData) {
        }
        axios.get('https://calcular-server.onrender.com/api/courses')
            .then(res => setCourses(res.data))
        
    })

    useEffect(() => {
        if (courses) {
            dispatch({
                type: 'SET_COURSES',
                payload: courses
            })
        }
    }, [courses])
    const handleAddCourse = () => {
        let newCourse = {
            maMH: maMH,
            nameCourse: nameCourse,
            tinChi: tinChi,
            heSo: heSo
        }
        axios.post('https://calcular-server.onrender.com/api/courses/addCourse', newCourse)
            .then(response => setShouldFetchData(true))
            .catch(error => {
                console.error('There was an error!', error);
            });
        setIsAdd(false)
        toast.success('Thêm thành công')
    }
    return (
        <div className='home'>
            <div className="mb-5 text-center fw-bold fs-3">Danh sách môn học</div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Mã môn</th>
                        <th scope="col">Môn học</th>
                        <th scope="col">Tín chỉ</th>
                        <th scope="col">Hệ số</th>
                    </tr>
                </thead>
                <tbody>
                    {courses && courses.map((item, index) => {
                        return (
                            <tr key={item._id}>
                                <td>{item.maMH}</td>
                                <td>{item.nameCourse}</td>
                                <td>{item.tinChi}</td>
                                <td>{item.heSo}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {!isAdd === true ?
                <button className="add-btn" onClick={() => setIsAdd(true)}>
                    <IoAdd />
                </button>
                :
                <div className="add-form row">
                    <div className='mb-5 text-center fw-bold fs-3'>Thêm môn học</div>
                    <div className="mb-3 col-lg-6  row">
                        <label htmlFor='maMH' className='col-md-3'>Mã môn: </label>
                        <input type="text" id='maMH' className='col-md-6' onChange={(event) => setMaMH(event.target.value)} />
                    </div>
                    <div className="mb-3 col-lg-6  row">
                        <label htmlFor='name' className='col-md-3'>Tên môn: </label>
                        <input type="text" id='name' className='col-md-6' onChange={(event) => setNameCourse(event.target.value)} />
                    </div>
                    <div className="mb-3 col-lg-6 row">
                        <label htmlFor='tinChi' className='col-md-3'>Tín chỉ: </label>
                        <input type="number" id='tinChi' className='col-md-6' onChange={(event) => setTinChi(event.target.value)} />
                    </div>
                    <div className="mb-3 col-lg-6 row">
                        <label htmlFor='heSo' className='col-md-3'>Hệ số: </label>
                        <input type="number" id='heSo' className='col-md-6' onChange={(event) => setHeSo(event.target.value)} />
                    </div>
                    <button className="btn btn-primary col-lg-1" onClick={() => handleAddCourse()}>Add</button>
                </div>
            }


        </div>
    );
}

export default Home;
