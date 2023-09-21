import {  useContext, useEffect, useState } from "react";
import '../../styles/style.scss'
import Context from "../../store/Context";
import axios from "axios";
const CalcularTuition = () => {
    const [state, dispatch] = useContext(Context)
    // const tuitions = state.tuitions
    const [tuitions, setTuitions] = useState([])
    const yourTuitions = tuitions.filter((item) => item.user == state.userLogin.username)
    let stt = 1
    useEffect(() => {
        axios.get('https://calcular-server.onrender.com/api/semester')
                .then(res => setTuitions(res.data))
    }, [])

    useEffect(() => {
        if (tuitions) {
            dispatch({
                type: 'SET_TUITIONS',
                payload: tuitions
            })
        }
    }, [tuitions])
    let total = 0
    let soTin = 0
    yourTuitions.map(item => {
        return total += item.hocPhi
    })
    yourTuitions.map(item => {
        return soTin += item.soTin
    })
    let soMon = 0
    yourTuitions.map(item => {
        return soMon += item.soMon
    })
    return (
        <div className="mt-5 me-5">
            <div className=" mb-5 text-center fw-bold fs-3">Hệ thống tra cứu học phí</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th scope="col">Học kỳ</th>
                        <th scope="col">Số môn</th>
                        <th scope="col">Số tín</th>
                        <th scope="col">Số tiền học phí</th>
                    </tr>
                </thead>
                <tbody>
                    {yourTuitions.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{stt++}</td>
                                <td>{`Học kỳ ${item.hocKy} nhóm ${item.nhom} năm ${item.nam}`}</td>
                                <td>{item.soMon}</td>
                                <td>{item.soTin}</td>
                                <td>{item.hocPhi}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="row mt-3">
                <div className="col">Tổng học phí: {total}</div>
                <div className="col">Tổng số môn: {soMon}</div>
                <div className="col">Tổng số tín: {soTin}</div>
                
            </div>
        </div>
    );
}

export default CalcularTuition;
