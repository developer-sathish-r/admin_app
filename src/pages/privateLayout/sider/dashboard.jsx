import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Col, Row, Layout, theme, Flex, notification, Popconfirm, Segmented, Divider, Table, Tag, Modal, Badge, Card, Space } from 'antd';
import { GoPeople } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsStack, BsFillPersonCheckFill } from "react-icons/bs";
import { LuDollarSign } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import { LuServer, LuUser } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Column from 'antd/es/table/Column';
import { MdOutlineMale, MdOutlineFemale, } from "react-icons/md";

const Dashboard = () => {
  const Token = useSelector((Item) => Item.token.data.token);
  const navigate = useNavigate();
  const { Header, Content } = Layout;
  const { Meta } = Card;
  const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelDetails, setModelDetails] = useState(null);
  const [card, setCard] = useState('User_Card');
  const [DeleteData, setDeleteData] = useState();
  const [male, setMale] = useState([]);
  const [female, setFemale] = useState([]);
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [hr, setHr] = useState([]);
  const [bde, setBDE] = useState([]);
  const [fullstack, setFulstack] = useState([]);
  const [AllUsersData, setAllUsersData] = useState([]);

  //Card toggle btn
  const handleToggle = () => {
    setCard(!card);
  }

  //Model view
  const showModal = (values) => {
    //console.log("values", values.id)
    setModelDetails(values)
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  //Dynamically to show in the card
  useEffect(() => {
    axios.get("https://admin-app-bdsu.onrender.com/api/v1/users",
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((success) => {
        const val = success.data.data;
        setAllUsersData(val);
        setMale(val.filter((data) => data.gender === "male"));
        setFemale(val.filter((data) => data.gender === "female"));
        setFrontend(val.filter((data) => data.role === "frontend"));
        setBackend(val.filter((data) => data.role === "backend"));
        setHr(val.filter((data) => data.role === "hr"));
        setBDE(val.filter((data) => data.role === "BDE"));
        setFulstack(val.filter((data) => data.role === "fullstack"));
      })
    //   .catch((error) => 
    //     console.log("error -->", error)
    // )
  }, [DeleteData]);

  //Delete addUser Card
  async function deleteUser(id) {
    try {
      const response = await axios.delete(`https://admin-app-bdsu.onrender.com/api/v1/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        })
      //console.log("response", response)
      setDeleteData(response)
      if (response) {
        notification.success({
          message: 'Success',
          description: 'User deleted successfully',
        });
      }
    }
    catch (error) {
      //console.log("error", error)
    }
  }

  //Edit user navigation
  const editUser = (id) => {
    navigate(`/edit/${id}`)
  }

  //Count total in the dashboard card
  const total = (male.length) + (female.length);

  return (
    <>
      <Header style={{ paddingLeft: 30, backgroundColor: '#181818', color: 'white', }}>
        <h1 style={{ margin: 0, }}>  DASHBOARD    </h1>
      </Header>

      <Content style={{ padding: 24, minHeight: 280, backgroundColor: 'black' }}>
        <Row className='card-row' >
          <Col span={6} >
            <Card bordered={false} className='card'>
              <Row justify="space-around">
                <span className='logo'><GoPeople /></span>
                <span className='count'>{total}</span>
              </Row>
              <span className='value'>Total</span>
            </Card>
          </Col>

          <Col span={6}>
            <Card bordered={false} className='card'>
              <Flex justify="space-around">
                <span className='logo'><LuUser /></span>
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-around"
                >
                  <span className='count'>{male.length}</span>
                </Flex>
              </Flex>
              <span className='value'>Male</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false} className='card'>
              <Flex justify="space-around">
                <span className='logo'><LuUser /></span>
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-around"
                >
                  <span className='count'>{female.length}</span>
                </Flex>
              </Flex>
              <span className='value'>Female</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false} className='card'>
              <Flex justify="space-around">
                <span className='logo'><MdOutlineSpaceDashboard /></span>
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-around"
                >
                  <span className='count'>{frontend.length}</span>
                </Flex>
              </Flex>
              <span className='value'>Front End</span>
            </Card>
          </Col>

          <Col span={6}>
            <Card bordered={false} className='card'>
              <Flex justify="space-around">
                <span className='logo'><LuServer /></span>
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-around"
                >
                  <span className='count'>{backend.length}</span>
                </Flex>
              </Flex>
              <span className='value'>Back End</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false} className='card'>
              <Flex justify="space-around">
                <span className='logo'><SlSocialLinkedin /></span>
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-around"
                >
                  <span className='count'>{hr.length}</span>
                </Flex>
              </Flex>
              <span className='value'>HR</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false} className='card'>
              <Flex justify="space-around">
                <span className='logo'><LuDollarSign /></span>
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-around"
                >
                  <span className='count'>{bde.length}</span>
                </Flex>
              </Flex>
              <span className='value'>BDE</span>
            </Card>
          </Col>
          <Col span={6}>
            <Card bordered={false} className='card'>
              <Flex justify="space-around">
                <span className='logo'><BsStack /></span>
                <Flex
                  vertical
                  align="flex-end"
                  justify="space-around"
                >
                  <span className='count'>{fullstack.length}</span>
                </Flex>
              </Flex>
              <span className='value'>Full Stack</span>
            </Card>
          </Col>
        </Row>

        {/* -----------Added user data  horizontal row------------------ */}
        <Divider
          style={{
            borderColor: '#2b2b2b',
          }}
        />

        <Row justify="space-between" className='toggle'>
          <h1 className='users'>USERS</h1>

          {/* ---------------Toggle btn --------------------*/}
          <Segmented className='toggle-btn'
            onChange={(value) => { setCard(value) }}
            selected={'List'}
            options={[
              {
                value: 'User_Card',
                icon: <RxDashboard />,
              },
              {
                value: 'User_Table',
                icon: <MdOutlineSpaceDashboard />,
              },
            ]}
          />
        </Row>

        {/* Card view */}
        {card === 'User_Card' ?
          <>
            {/* -----------------Added User Card --------------------*/}
            {AllUsersData.map((values) => {
              return (
                <>
                  <Space size={[16, 16]} wrap  >
                    <Card className='user-card-row' key={values.id}>

                      <Row justify='center'>
                        <img src={values.imageurl} onClick={() => showModal(values)} className='user-profile' alt="profile" width={60} height={60} />
                      </Row>

                      <Row justify='center' >
                        <p className='user-card-data-name' >  {values.first_name + " " + values.last_name} </p>
                      </Row>

                      <Row justify='center'>
                        <p className='user-card-data-email' style={{ fontSize: '13px', margin: 0, }}><u>{values.email}</u></p>
                      </Row>

                      <Row justify="space-around" className='card-btn'>
                        <Button
                          onClick={() => editUser(values.id)}
                          className='user-logo-edit'><FiEdit /></Button>
                        <Popconfirm
                          title="Delete the user"
                          description="Are you sure to delete this User?"
                          okText="Yes"
                          cancelText="No"
                          onConfirm={() => deleteUser(values.id)}
                        >
                          <Button
                            className='user-logo-delete'><RiDeleteBinLine />
                          </Button>
                        </Popconfirm>
                      </Row>

                      <Row className='inner-card'>
                      </Row>
                    </Card>
                  </Space>
                </>)
            })}
          </>
          :
          // Table view
          <>
            <Table dataSource={AllUsersData} >
              <Column title='Name' dataIndex='first_name' key='first_name' />
              <Column title='Email' dataIndex='email' key='email' />
              <Column title='Address' dataIndex='address' key='address' />
              <Column
                title='Gender'
                dataIndex='gender'
                key='gender'
                render={(values) => (
                  <>
                    {[values].map((value) => {
                      let color = value.length > 5 ? "female-table" : "male-table";
                      return (<Tag className={color} key={value}>
                        {value.toUpperCase()}
                      </Tag>)
                    })}
                  </>
                )
                } />
              <Column title='Role' dataIndex='role' key='role' />
              <Column title="Action"
                render={(AllUsersData) => (
                  <Row justify="space-around">
                    <Button
                      onClick={() => editUser(AllUsersData.id)}
                      className='user-logo-edit-table'><FiEdit /></Button>
                    <Button
                      onClick={() => deleteUser(AllUsersData.id)}
                      className='user-logo-delete-table'><RiDeleteBinLine /></Button>
                  </Row>
                )}
              />
            </Table>
          </>}

        {/* -----------Model View--------------- */}
        <Modal classNames='model' open={isModalOpen} okButtonProps={{ style: { display: 'none' } }} onOk={handleOk} onCancel={handleCancel} cancelButtonProps={{ style: { display: 'none' } }}>
          <p className='userModel' style={{ fontSize: '30px', margin: 0 }}  > {modelDetails?.first_name + " " + modelDetails?.last_name}  <Tag className=' tagName' color="#626AC8"><BsFillPersonCheckFill /> {(modelDetails?.role)?.toUpperCase()}</Tag></p><br />
          <Badge.Ribbon text={modelDetails?.gender === "male" ? <MdOutlineMale /> : <MdOutlineFemale />} color={modelDetails?.gender === "male" ? "purple" : "pink"}>
            <Card className='user-card-row-model' style={{ width: 423, backgroundColor: "black", height: 200, }} key={modelDetails?.id}>
              <img src={modelDetails?.imageurl} className='user-profile-model' alt="profile" width={90} height={90} /><br />
              <p className='userModel'  >Email : {modelDetails?.email}</p>
              <p className='userModel ' >Address :{modelDetails?.address}</p>
              <p className='userModel ' >Created at :{modelDetails?.created_at
              }</p>
              <Row justify="space-between">
                <Button
                  onClick={() => editUser(modelDetails?.id)}
                  className='user-logo-edit-model'><FiEdit />Edit</Button>
                <Popconfirm
                  title="Delete the user"
                  description="Are you sure to delete this User?"
                  okText="Yes"
                  cancelText="No"
                  onConfirm={() => deleteUser(modelDetails?.id)}
                >
                  <Button
                    className='user-logo-delete-model'><RiDeleteBinLine />Delete
                  </Button>
                </Popconfirm>
              </Row>
            </Card>
          </Badge.Ribbon>
        </Modal>
      </Content>
    </>
  );
}

export default Dashboard;