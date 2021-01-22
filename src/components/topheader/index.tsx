import styles from './index.module.css';

import { Layout } from 'antd';
const { Header } = Layout;

function TopHeader() {
  return (
    <Header className={styles.TopHeader}>
      <div className="logo" />
    </Header>
  );
}

export default TopHeader;
