import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/actionCreate'
import '../register/register';
import { Button, Form, Input, notification, Col, Row } from 'antd';

const Login = () => {
    const dashboardNavigate = useNavigate();
    const dispatch = useDispatch();

    //Login User
    const onFinish = (values) => {
        (async () => {
            const rawResponse = await fetch('https://admin-app-bdsu.onrender.com/api/v1/admin/login', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                })
            });
            const content = await rawResponse.json();

            if (content.success) {
                const value = content.data;

                //Login success notification !
                notification.success(
                    {
                        message: "Login Success",
                        description:
                            "Welcome  !",
                    }
                )
                dispatch(userLogin(value))
                dashboardNavigate("/dashboard")
            }
            //Error message notification !
            else {
                notification.error({
                    message: "Error",
                    description:
                        "Need to create an account",
                })
            }
        })();
    };

    return (
        <>
            <Row justify="center" >
                <Col span={7} >
                    <Form className='login' layout='vertical' onFinish={(values) => onFinish(values)}>
                        <h1>Login</h1>
                        
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Please enter valid email!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    pattern: /^[a-zA-Z0-9`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]{5,}$/,
                                    message: 'Password should contain atleast 5 digits'
                                },

                            ]} hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>

                        {/* <a href="" className='forget_password'>Forget password?</a> */}

                        <Button className='submit-btn' type="primary" htmlType="submit"   >Submit</Button>

                        <p className='sign-up'>Don't have an account?<a href='/register'> sign up</a></p>
                    </Form>
                </Col>
            </Row>
        </>
    )
}

export default Login;