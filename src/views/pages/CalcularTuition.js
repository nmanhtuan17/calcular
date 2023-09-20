import {  useContext, useEffect } from "react";
import '../../styles/style.scss'
import Context from "../../store/Context";
const CalcularTuition = () => {
    const [state, dispatch] = useContext(Context)
    const tuitions = state.tuitions
    let total = 0
    tuitions.map(item => {
        return total += item.hocPhi
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
                        <th scope="col">Tình trạng</th>
                    </tr>
                </thead>
                <tbody>
                    {tuitions.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{`Học kỳ ${item.hocKy} nhóm ${item.nhom} năm ${item.nam}`}</td>
                                <td>{item.soMon}</td>
                                <td>{item.soTin}</td>
                                <td>{item.hocPhi}</td>
                                <td>{item.tinhTrang}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="row mt-3">
                <div className="col">Tổng học phí: {total}</div>
                <div className="col">Tổng số tín: 100</div>
            </div>
        </div>
    );
}

export default CalcularTuition;
