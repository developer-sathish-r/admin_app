import { Routes, Route } from "react-router-dom";
import React, { Suspense, useState } from 'react';
import { MenuOutlined, AppstoreOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Col, Row, Layout, Menu, theme, notification, Spin } from 'antd';
import profile from '../../assert/Image/profile.jpg'

//import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../redux/actionCreate';
import { PrivateRoutes } from "./privateRouter";
import { connect } from 'react-redux';
import { collapseToast } from "react-toastify";

// const Private_Layout = () => {

//     const navigate = useNavigate();
//     const [collapsed, setCollapsed] = useState(false);
//     const { Header, Sider } = Layout;
//     const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
//     const loginnavigate = useNavigate();

//     //Profile-sider
//     const Profile = useSelector(
//         (item) =>
//             item.token.data
//     );

//     return (
//         <Layout className='layout'>
//             <Sider className='sider' width={270} trigger={null} collapsible collapsed={collapsed}>
//                 <Row>
//                     {!collapsed ?
//                         <>
//                             <Col span={6}>
//                                 <img src={profile} className='profile' alt="profile" width={60} />
//                             </Col>

//                             <Col span={12} className='user'>
//                                 <h5 className="profile-name">
//                                     {Profile.first_name + " " + Profile.last_name}  </h5>
//                                 <p className="profile-email">{Profile.email}</p>
//                             </Col>
//                         </> : " "
//                     }

//                     <Col span={4}  >
//                         <Button className="burger-btn"
//                             type="text"
//                             icon={collapsed ? <MenuOutlined className="aside" /> : <MenuOutlined />}
//                             onClick={() => setCollapsed(!collapsed)}
//                         />
//                     </Col>
//                 </Row>

//                 <Menu theme="dark" className='menu'
//                     onClick={(value) => navigate(value.key)}
//                     mode="inline"
//                     defaultSelectedKeys={['/dashboard']}
//                     items={[
//                         {
//                             key: '/dashboard',
//                             icon: <AppstoreOutlined />,
//                             label: 'Dashboard',
//                         },
//                         {
//                             key: '/addUser',
//                             icon: <UserAddOutlined />,
//                             label: 'Add User',
//                         },
//                     ]} />

//                 <Button
//                     block
//                     icon={collapsed ? <FiLogOut /> : <>  <FiLogOut /> Logout</>}
//                     className='logout-btn'
//                     onClick={() => {
//                         dispatch(userLogout());
//                         notification.success({
//                             message: "Logout",
//                             description: "Logout Successfully!",
//                         })
//                         loginnavigate("/")
//                     }
//                     }>
//                 </Button>
//             </Sider>

//             {/* Layout */}
//             <Layout className="layout">
//                 <Routes>
//                     {PrivateRoutes.map((route, index) => {
//                         let Component = route.component;
//                         return (
//                             <Route
//                                 key={`route-${index}`}
//                                 path={route.path}
//                                 element={
//                                     <Suspense
//                                         fallback={
//                                             <Row
//                                                 justify="center"
//                                                 style={{ lineHeight: "697px" }}
//                                             >
//                                                 <Col>
//                                                     <Spin size="large" />
//                                                 </Col>
//                                             </Row>
//                                         }
//                                     >
//                                         <Component />
//                                     </Suspense>
//                                 }
//                             />
//                         );
//                     })}
//                 </Routes>
//             </Layout>
//         </Layout>
//     );
// };




class Private_Layout extends React.Component{
    constructor(props){
        super(props);

        //const [state, setState] = useState("/dashboard")
        this.state={count:"/dashboard"};

       //const [collapsed, setCollapsed] = useState(false);
       this.state={collapsed:(false)}
    }
 
    render(){
        //const { Header, Sider } = Layout;
        const { Header, Sider } = Layout;

       
        return (
            <Layout className='layout'>
                <Sider className='sider' width={270} trigger={null} collapsible collapsed={this.state.collapsed}>
                    <Row>
                        {!this.state.collapsed ?
                            <>
                                <Col span={6}>
                                    <img src={mapStateToProps} className='profile' alt="profile" width={60} />
                                </Col>
    
                                <Col span={12} className='user'>
                                    <h5 className="profile-name">
                                        {mapStateToProps.first_name + " " + mapStateToProps.last_name}  </h5>
                                    <p className="profile-email">{mapStateToProps.email}</p>
                                </Col>
                            </> : " "
                        }
    
                        <Col span={4}  >
                            <Button className="burger-btn"
                                type="text"
                                icon={this.state.collapsed ? <MenuOutlined className="aside" /> : <MenuOutlined />}
                                onClick={() => this.setCollapsed(!collapsed)}
                            />
                        </Col>
                    </Row>
    
                    <Menu theme="dark" className='menu'
                        onClick={(value) => navigate(value.key)}
                        mode="inline"
                        defaultSelectedKeys={['/dashboard']}
                        items={[
                            {
                                key: '/dashboard',
                                icon: <AppstoreOutlined />,
                                label: 'Dashboard',
                            },
                            {
                                key: '/addUser',
                                icon: <UserAddOutlined />,
                                label: 'Add User',
                            },
                        ]} />
    
                    <Button
                        block
                        icon={this.state.collapsed ? <FiLogOut /> : <>  <FiLogOut /> Logout</>}
                        className='logout-btn'
                        onClick={() => {

                            //dispatch(userLogout());
                            this.props.userLogout()
                        
                            notification.success({
                                message: "Logout",
                                description: "Logout Successfully!",
                            })
                            loginnavigate("/")
                        }
                        }>
                    </Button>
                </Sider>
    
                {/* Layout */}
                <Layout className="layout">
                    <Routes>
                        {PrivateRoutes.map((route, index) => {
                            let Component = route.component;
                            return (
                                <Route
                                    key={`route-${index}`}
                                    path={route.path}
                                    element={
                                        <Suspense
                                            fallback={
                                                <Row
                                                    justify="center"
                                                    style={{ lineHeight: "697px" }}
                                                >
                                                    <Col>
                                                        <Spin size="large" />
                                                    </Col>
                                                </Row>
                                            }
                                        >
                                            <Component />
                                        </Suspense>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </Layout>
            </Layout>
        );
    }
}


  //Profile-sider
//     const Profile = useSelector(
//         (item) =>
//             item.token.data
//     );

const mapStateToProps = state => ({
    state: state.token.data
});


 // const dispatch = useDispatch();
const mapDispatchToProps = (dispatch) => {
    return {
        userLogout: () => dispatch(userLogout())
    }
};

export default  connect( mapStateToProps, mapDispatchToProps() ) (Private_Layout);