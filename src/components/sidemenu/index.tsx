import React from 'react';

import { Menu } from 'antd';

import styles from './index.module.css';
import { Link, useHistory } from 'react-router-dom';

const { SubMenu } = Menu;

function SideMenu() {
  let history = useHistory();

  const menuItemClick = (menuItemInfo: any) => {
    const { item, key, keyPath } = menuItemInfo;
    console.log(item, key, keyPath);
  };

  const menuList = [
    {
      key: '1',
      title: 'funs',
      data: [
        {
          key: '1-1',
          title: 'react-app',
          to: '/react-app',
        },
        {
          key: '1-2',
          title: 'react-func-virtualized',
          to: '/react-func-virtualized',
        },
      ],
    },
  ];

  return (
    <Menu className={styles.sideMenu} mode="inline" defaultSelectedKeys={[]} defaultOpenKeys={[]} style={{ height: '100%', borderRight: 0 }} onClick={menuItemClick}>
      {menuList.map(item => (
        <SubMenu key={item.key} title={item.title}>
          {item.data.map(itm => (
            <Menu.Item key={itm.key}>
              <Link to={itm.to}>{itm.title}</Link>
            </Menu.Item>
          ))}
        </SubMenu>
      ))}
    </Menu>
  );
}

export default SideMenu;
