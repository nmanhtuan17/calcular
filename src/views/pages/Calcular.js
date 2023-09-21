import React, { useEffect, useMemo } from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../store/Context';
import axios from 'axios';
const Calcular = () => {
    const [state, dispatch] = useContext(Context)
    const mucPhi = state.mucPhi
    const [hocKy, setHocKy] = useState()
    const [nhom, setNhom] = useState()
    const [nam, setNam] = useState()
    const [maMH, setMaMH] = useState('')
    const [nameCourse, setNameCourse] = useState('')
    const [tinChi, setTinChi] = useState(null)
    const [heSo, setHeSo] = useState(null)
    const [tuition, setTuition] = useState({})
    const [reCalcular, setreCalcular] = useState(false)
    let sum = useMemo(() => {
        let temp = 0
        if (reCalcular && tuition && tuition.monHoc) {

            tuition.monHoc.map((item) => {
                return temp += (item.tinChi * item.heSo).toFixed(1) * mucPhi
            })
        }
        console.log(temp);
        return temp
    }, [reCalcular])
    let stt = 1


    const handleAddTime = () => {
        setTuition({
            monHoc: [],
            hocKy: hocKy,
            nhom: nhom,
            nam: nam
        })
        setHocKy(null)
        setNhom(null)
        setNam(null)
    }

    const handleAddCourse = () => {
        const newCourse = {
            maMH: maMH,
            name: nameCourse,
            tinChi: tinChi,
            heSo: heSo
        }
        setTuition({
            monHoc: [...tuition.monHoc, newCourse],
            hocKy: tuition.hocKy,
            nhom: tuition.nhom,
            nam: tuition.nam
        })
        setMaMH('')
        setNameCourse('')
        setTinChi(null)
        setHeSo(null)
    }
    const handleCalcular = () => {
        setreCalcular(true)
        let total = 0
        let soTin = 0
        tuition.monHoc.map((item) => {
            return total += (item.tinChi * item.heSo).toFixed(1) * mucPhi
        })
        tuition.monHoc.map((item) => {
            return soTin += item.tinChi * 1
        })
        const newTuition = {
            hocKy: tuition.hocKy,
            nhom: tuition.nhom,
            nam: tuition.nam,
            hocPhi: total,
            soTin: soTin,
            soMon: tuition.monHoc.length,
            user: state.userLogin.username
        }
        axios.post('https://calcular-server.onrender.com/api/semester/addTuition', newTuition)
            .then(response => console.log(response))
            .catch(error => {
                console.error('There was an error!', error);
            });
        
    }
    return (
        <div className="mt-5 me-5">
            <div className=" mb-5 text-center fw-bold fs-3">Hệ thống tính học phí</div>
            {tuition.monHoc &&
                <div>
                    <div>Đợt thu: {`Học kỳ ${tuition.hocKy} nhóm ${tuition.nhom} năm ${tuition.nam}`}</div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Mã môn</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Đơn vị tính</th>
                                <th scope="col">Thành tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tuition.monHoc.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{stt++}</td>
                                        <td>{`${item.maMH} (${item.name})`}</td>
                                        <td>{(item.heSo * item.tinChi).toFixed(1)}</td>
                                        <td>{mucPhi}</td>
                                        <td>{(item.heSo * item.tinChi).toFixed(1) * mucPhi}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div>Tổng học phí: {sum}</div>
                </div>}
            <div className='row mt-5'>
                {(!tuition.hocKy && !tuition.nhom && !tuition.nam) ?
                    <div className='row'>
                        <div className='mb-3 fs-5 fw-5'>Nhập thông tin kỳ học</div>
                        <div className='col-lg-3'>
                            <label htmlFor='hocky'>Học kỳ</label>
                            <input value={tuition.hocKy} type="number" id='hocky' className='form-control' onChange={(e) => setHocKy(e.target.value)} />
                        </div>
                        <div className='col-lg-3'>
                            <label htmlFor='nhom'>Nhóm</label>
                            <input value={tuition.nhom} type="number" id='nhom' className='form-control' onChange={(e) => setNhom(e.target.value)} />
                        </div>
                        <div className='col-lg-3'>
                            <label htmlFor='namhoc'>Năm học</label>
                            <input value={tuition.nam} type="text" id='namhoc' className='form-control' onChange={(e) => setNam(e.target.value)} />
                        </div>
                        <div className='col-lg-3'>
                            <label htmlFor='dvt'>Đơn vị tính</label>
                            <input value={mucPhi} type="number" id='dvt' className='form-control' onChange={(e) => dispatch({
                                type: 'UPDATE_DVT',
                                payload: { mucPhi: e.target.value }
                            })} />
                        </div>
                        <button className='mt-4 btn btn-primary col-lg-1 ms-2' onClick={() => handleAddTime()}>Thêm</button>
                    </div>
                    :
                    <div className='row mt-3'>
                        <div className='col-lg-4'>
                            <label htmlFor='maMH'>Mã môn</label>
                            <input value={maMH} type="text" id='maMH' className='form-control' onChange={(e) => setMaMH(e.target.value)} />
                        </div>
                        <div className='col-lg-4'>
                            <label htmlFor='monhoc'>Môn học</label>
                            <input value={nameCourse} type="text" id='monhoc' className='form-control' onChange={(e) => setNameCourse(e.target.value)} />
                        </div>
                        <div className='col-lg-2'>
                            <label htmlFor='tinchi'>Tín chỉ</label>
                            <input value={tinChi} type="number" id='tinchi' className='form-control' onChange={(e) => setTinChi(e.target.value)} />
                        </div>
                        <div className='col-lg-2'>
                            <label htmlFor='heso'>Hệ số</label>
                            <input value={heSo} type="number" id='heso' className='form-control' onChange={(e) => setHeSo(e.target.value)} />
                        </div>
                        <button className='mt-4 btn btn-primary col-lg-2 ms-2' onClick={() => handleAddCourse()}>Thêm môn học</button>
                        <button className='mt-4 btn btn-primary col-lg-2 ms-2' onClick={() => handleCalcular()}>Tính tổng học phí</button>
                    </div>
                }
            </div>

        </div>
    );
}

export default Calcular;
