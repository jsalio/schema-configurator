import React, { useState } from 'react';
import { Form, Input, Button, Spin } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css';
import { useAppNavigation } from '../../utils/Navigator';

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const {navigateTo} = useAppNavigation();
  navigateTo('/app/dashboard');

  const handleSubmit = (values:any) => {
    setLoading(true);
    // Simulate API call or login process
    setTimeout(() => {
      setLoading(false);
      console.log('Logged in successfully!', values);
        navigateTo('/app/dashboard');
    }, 2000);
  };

  return (
    <div className="login-screen">
      <Form onFinish={handleSubmit} className="login-form">
        <h1>Login</h1>
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            {loading ? <Spin /> : 'Log in'}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginScreen;