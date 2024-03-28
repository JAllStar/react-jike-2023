import './index.scss'
import { Card, Form, Input, Button } from 'antd'
import logo from '@/assets/logo.png'

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };


  return (
    <div className="login">
      <Card className="login-container">
        {/* logo图标(极客圆) */}
        <img className="login-logo" src={logo} alt="" />

        {/* 登录表单 */}
        <Form 
          validateTrigger="onBlur"
          onFinish={onFinish}
        >

          {/* 手机号 */}
          <Form.Item        
            name="mobile"
            rules={[
              {
                required: true,
                message: '请输入手机号',
              }, 
              {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确的手机号格式'
              }
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>

          {/* 验证码 */}
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码',
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>

          {/* 登录按钮 */}
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>

        </Form>
      </Card>
    </div>
  )
}

export default Login