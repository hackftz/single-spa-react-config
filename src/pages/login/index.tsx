import { Col, Row } from 'antd';
import React from 'react';
import LoginForm from '../../components/loginform';
import styles from './index.module.css';

function Login() {
  return (
    <Row className={styles.login}>
      <Col className={styles.left} span={12}></Col>
      <Col className={styles.right} span={12}>
        <LoginForm />
      </Col>
    </Row>
  );
}

export default Login;
