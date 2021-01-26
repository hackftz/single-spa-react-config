import React, { useEffect } from 'react';

import { Layout } from 'antd';
import styles from './index.module.css';

import { start } from 'single-spa';

import TopHeader from '../topheader';
import SideMenu from '../sidemenu';

const { Content, Sider } = Layout;

function Dashboard() {
  useEffect(() => {
    // Update the document title using the browser API
    start();
  }, []);

  return (
    <Layout className={styles.layout}>
      <TopHeader />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <SideMenu />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div id="singleApp"></div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
