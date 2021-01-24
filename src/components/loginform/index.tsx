import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';

import ActionEnums from '../../utils/actionEnums';

import styles from './index.module.css';

function LoginForm(props: any) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  let history = useHistory();

  const { dispatch } = props;

  const onFinish = (values: any) => {
    console.log('Success:', values);
    if (values.username === 'admin' && values.password === 'admin123456') {
      dispatch({
        type: ActionEnums.LOGIN,
      });
      history.push('/');
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form className={styles.LoginForm} {...layout} name="basic" initialValues={{ remember: true, username: 'admin', password: 'admin123456' }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default connect()(LoginForm);
