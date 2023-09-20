import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    
    const handleSubmit = () => {
        setUser({
            username: username,
            password: password
        })
        setUsername('')
        setPassword('')
        navigate("/")
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
                marginTop: 100
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
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 4,
                    span: 8,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 4,
                    span: 8,
                }}
            >
                <Button type="primary" htmlType="submit" onClick={() => handleSubmit()}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
};
export default Login;
