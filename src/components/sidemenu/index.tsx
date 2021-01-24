import { Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import styles from './index.module.css';
import { useHistory } from 'react-router-dom';

const { SubMenu } = Menu;

function SideMenu() {
  let history = useHistory();

  const menuItemClick = (menuItemInfo: any) => {
    const { item, key, keyPath } = menuItemInfo;
    console.log(item, key, keyPath);
    history.push('/react-app');
  };

  return (
    <Menu className={styles.sideMenu} mode="inline" defaultSelectedKeys={[]} defaultOpenKeys={[]} style={{ height: '100%', borderRight: 0 }} onClick={menuItemClick}>
      <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
        <Menu.Item key="1">option1</Menu.Item>
        <Menu.Item key="2">option2</Menu.Item>
        <Menu.Item key="3">option3</Menu.Item>
        <Menu.Item key="4">option4</Menu.Item>
      </SubMenu>
      {/* <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
        <Menu.Item key="5">option5</Menu.Item>
        <Menu.Item key="6">option6</Menu.Item>
        <Menu.Item key="7">option7</Menu.Item>
        <Menu.Item key="8">option8</Menu.Item>
      </SubMenu>
      <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
        <Menu.Item key="9">option9</Menu.Item>
        <Menu.Item key="10">option10</Menu.Item>
        <Menu.Item key="11">option11</Menu.Item>
        <Menu.Item key="12">option12</Menu.Item>
      </SubMenu> */}
    </Menu>
  );
}

export default SideMenu;
