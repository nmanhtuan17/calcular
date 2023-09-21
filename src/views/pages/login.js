import { useState, useContext, useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import Context from '../../store/Context';
import axios from 'axios';
const Login = () => {
    const [state, dispatch] = useContext(Context)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [allUser, setAllUser] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://calcular-server.onrender.com/api/users')
            .then(res => {
                setAllUser(res.data)
                dispatch({
                    type: 'SET_USERS',
                    users: res.data
                })
            })
    }, [])


    useEffect(() => {
        if (state.userLogin && state.userLogin.password == password) {
            console.log('login success');
        }
    }, [state.userLogin])
    const handleSubmit = () => {
        const tm = allUser.find((element) => element.username === username)
        if(tm && tm.password === password){
            dispatch({
                type: 'SET_USERLOGIN',
                userlogin: tm
            })
            navigate('/courses')
        }
        setUsername('')
        setPassword('')
    }
    return (

        <Form
            name="basic"
            labelCol={{
                span: 5,
            }}
            wrapperCol={{
                span: 8,
            }}
            style={{
                marginTop: 100,
            }}
            initialValues={{
                remember: true,
            }}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input value={username} onChange={(event) => setUsername(event.target.value)} />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password value={password} onChange={(event) => setPassword(event.target.value)} />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 5,
                    span: 8,
                }}
            >
                <Button type="primary" htmlType="submit" onClick={() => handleSubmit()}>
                    Đăng nhập
                </Button>
            </Form.Item>
        </Form>
    )
};
export default Login;
