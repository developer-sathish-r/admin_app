import React from 'react';
import { Button, Col, Row, Layout, Image, theme, Form, Input, Select, Radio, notification } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IoIosSend } from "react-icons/io";
import axios from "axios";


// const AddUser = () => {
//     const Token = useSelector((Item) => Item.token.data.token);
//     const navigate = useNavigate();
//     const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();
//     const [values, setValue] = useState(1);
//     const [file, setfile] = useState(false);
//     const [ImageUrl, setImageUrl] = useState();
//     const [baseImage, setBaseImage] = useState();
//     const [form] = Form.useForm()
//     const [edit, setEdit] = useState([]);
//     const { id } = useParams();
    

//     //Radio btn for gender 
//     const onChange = (e) => {
//         //console.log('radio checked', e.target.value);
//         setValue(e.target.value);
//     };

//     //Covert Base 64 Image
//     const handleFileInputChange = async e => {
//         const files = e.target.files[0]
//         setfile(files);
//         const result = await getBase64(files)
//         setBaseImage(result)
//     };

//     const getBase64 = (file) =>
//         new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result);
//             reader.onerror = (error) => reject(error);
//         });


//     //Upload Image
//     const Upload = async () => {
//         const data = new FormData();
//         data.append('file', file);
//         try {
//             const response = await axios.post('https://admin-app-bdsu.onrender.com/image/uploads',
//                 data,
//                 {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                         'Authorization': `Bearer ${Token}`
//                     },
//                 }
//             );
//             setImageUrl(response.data.url)

//             if (setImageUrl) {
//                 notification.success(
//                     {
//                         message: "Success",
//                         description: " Image Uploaded !",
//                     }
//                 )
//             };
//         }

//         catch (e) {
//             //console.log("error", e)
//         }
//     }

//     //Edit User data( "Method"----->PATCH)
//     const onFinish = (values) => {
//         // console.log('Received values of form: ', values);
//         if (id) {
//             (async () => {
//                 const rawResponse = await fetch(`https://admin-app-bdsu.onrender.com/api/v1/users/${id}`,
//                     {
//                         method: 'PATCH',
//                         headers: {
//                             'Accept': 'application/json',
//                             'Content-Type': 'application/json',
//                             Authorization: `Bearer ${Token}`
//                         },

//                         body: JSON.stringify({
//                             first_name: values.first_name,
//                             last_name: values.last_name,
//                             email: values.email,
//                             imageurl: (ImageUrl) ? ImageUrl : edit.imageurl,
//                             gender: values.gender,
//                             role: values.role,
//                             address: values.address,
//                             country: values.country,
//                             state: values.state,
//                             city: values.city
//                         })
//                     });
//                 const content = await rawResponse.json();

//                 if (content.success) {
//                     //console.log(content.success)
//                     notification.success({
//                         message: "Success",
//                         description: "Edited Success !",
//                     })
//                 }
//                 navigate("/dashboard")
//             })();

//         }

//         //Added User data 
//         else {
//             (async () => {
//                 const rawResponse = await fetch('https://admin-app-bdsu.onrender.com/api/v1/users/new',
//                     {
//                         method: 'POST',
//                         headers: {
//                             'Accept': 'application/json',
//                             'Content-Type': 'application/json',
//                             Authorization: `Bearer ${Token}`
//                         },
//                         body: JSON.stringify({
//                             first_name: values.first_name,
//                             last_name: values.last_name,
//                             email: values.email,
//                             imageurl: ImageUrl,
//                             gender: values.gender,
//                             role: values.role,
//                             address: values.address,
//                             country: values.country,
//                             state: values.state,
//                             city: values.city
//                         })
//                     });
//                 const content = await rawResponse.json();

//                 if (content.success) {
//                     // console.log(content.success)
//                     notification.success({
//                         message: "Success",
//                         description: "Added User data",
//                     })
//                 }
//                 navigate("/dashboard")
//             })();
//         }
//     }

//     // Edit User 
//     const editData = () => {
//         axios.get(`https://admin-app-bdsu.onrender.com/api/v1/users/${id}`,
//             {
//                 headers: {
//                     Authorization: `Bearer ${Token}`,
//                 },
//             })
//             .then((success) => {
//                 //console.log("success", success.data.data)
//                 setEdit(success.data.data[0])
//             }
//             )
//     }



//     //Edit user to show value in the input field
//     useEffect(() => editData(), [setEdit])
//     if (id) {
//         form.setFieldsValue({
//             first_name: edit.first_name,
//             last_name: edit.last_name,
//             email: edit.email,
//             gender: edit.gender,
//             role: edit.role,
//             state: edit.state,
//             country: edit.country,
//             city: edit.city,
//             address: edit.address
//         })
//     }

//     //Edit user to add user empty in text field
//     useEffect(() => {
//         form.resetFields();
//     }, [!id])

  
// }


class AddUser extends React.Component{
    constructor(){
        super();
    }



    render(){
//     const Token = useSelector((Item) => Item.token.data.token);
//     const navigate = useNavigate();
//     const { token: { colorBgContainer, borderRadiusLG }, } = theme.useToken();

        //const [values, setValue] = useState(1);
        this.state={value:1};

        //const [file, setfile] = useState(false);
        this.state={file:(false)};

        //const [ImageUrl, setImageUrl] = useState();
        this.state={ImageUrl:null};

        //const [baseImage, setBaseImage] = useState();
        this.state={baseImage:null};

        //const [form] = Form.useForm()


        //const [edit, setEdit] = useState([]);
        this.state={edit:[]};

        //const { id } = useParams();


        const { TextArea } = Input;
        const { Content } = Layout;
        const { Header } = Layout;

        //Header for Add User and Edit user
        function header() {
            if (id) {
                return ("EDIT USER")
            }
            else { return ("ADD USER") }
        }
//==========================================================

  //Radio btn for gender 
    const onChange = (e) => {
        //console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    //Covert Base 64 Image
    const handleFileInputChange = async e => {
        const files = e.target.files[0]
        setfile(files);
        const result = await getBase64(files)
        setBaseImage(result)
    };

    const getBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });


    //Upload Image
    const Upload = async () => {
        const data = new FormData();
        data.append('file', file);
        try {
            const response = await axios.post('https://admin-app-bdsu.onrender.com/image/uploads',
                data,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${Token}`
                    },
                }
            );
            setImageUrl(response.data.url)

            if (setImageUrl) {
                notification.success(
                    {
                        message: "Success",
                        description: " Image Uploaded !",
                    }
                )
            };
        }

        catch (e) {
            //console.log("error", e)
        }
    }

    //Edit User data( "Method"----->PATCH)
    const onFinish = (values) => {
        // console.log('Received values of form: ', values);
        if (id) {
            (async () => {
                const rawResponse = await fetch(`https://admin-app-bdsu.onrender.com/api/v1/users/${id}`,
                    {
                        method: 'PATCH',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${Token}`
                        },

                        body: JSON.stringify({
                            first_name: values.first_name,
                            last_name: values.last_name,
                            email: values.email,
                            imageurl: (ImageUrl) ? ImageUrl : edit.imageurl,
                            gender: values.gender,
                            role: values.role,
                            address: values.address,
                            country: values.country,
                            state: values.state,
                            city: values.city
                        })
                    });
                const content = await rawResponse.json();

                if (content.success) {
                    //console.log(content.success)
                    notification.success({
                        message: "Success",
                        description: "Edited Success !",
                    })
                }
                navigate("/dashboard")
            })();

        }

        //Added User data 
        else {
            (async () => {
                const rawResponse = await fetch('https://admin-app-bdsu.onrender.com/api/v1/users/new',
                    {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${Token}`
                        },
                        body: JSON.stringify({
                            first_name: values.first_name,
                            last_name: values.last_name,
                            email: values.email,
                            imageurl: ImageUrl,
                            gender: values.gender,
                            role: values.role,
                            address: values.address,
                            country: values.country,
                            state: values.state,
                            city: values.city
                        })
                    });
                const content = await rawResponse.json();

                if (content.success) {
                    // console.log(content.success)
                    notification.success({
                        message: "Success",
                        description: "Added User data",
                    })
                }
                navigate("/dashboard")
            })();
        }
    }

    // Edit User 
    const editData = () => {
        axios.get(`https://admin-app-bdsu.onrender.com/api/v1/users/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            })
            .then((success) => {
                //console.log("success", success.data.data)
                setEdit(success.data.data[0])
            }
            )
    }



    //Edit user to show value in the input field
    useEffect(() => editData(), [setEdit])
    if (id) {
        form.setFieldsValue({
            first_name: edit.first_name,
            last_name: edit.last_name,
            email: edit.email,
            gender: edit.gender,
            role: edit.role,
            state: edit.state,
            country: edit.country,
            city: edit.city,
            address: edit.address
        })
    }

    //Edit user to add user empty in text field
    useEffect(() => {
        form.resetFields();
    }, [!id])






        return (
            <>
                <Layout className='addUser_layout'>
    
                    <Header style={{ paddingLeft: 30, backgroundColor: '#181818', color: 'white' }}>
                        <h1 style={{ margin: 0, }}>
                            {/* {header()} */}
                        </h1>
                    </Header>
    
                    <Content className='addUser_Content' style={{ padding: 24, minHeight: 280, backgroundColor: '#2E2E2E', }}>
                        <Form form={form} className='addUser_form' layout="vertical" onFinish={(values) => onFinish(values)} >
                            <Row  >
                                <Col span={10} >
                                    <Form.Item className='input_field'
                                        label={<label style={{ color: "white" }}>First Name</label>}
                                        name="first_name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your first name!',
                                            },
                                            {
                                                pattern: /^[A-Za-z\\s]+$/,
                                                message: "first name should contain only aplhabets"
                                            }
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
    
                                <Col span={10} offset={4}>
                                    <Form.Item className='input_field'
                                        label={<label style={{ color: "white" }}>Last Name</label>}
                                        name="last_name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your last name!',
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
    
                            </Row>
    
                            <Row>
                                <Col span={10}>
                                    <Form.Item className='input_field'
                                        label={<label style={{ color: "white" }}>Email</label>}
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter your email !',
                                            },
                                            {
                                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                                message: 'Please enter valid email!',
                                            },
                                        ]}
    
                                    >
                                        <Input />
                                    </Form.Item>
                                </Col>
    
                                <Col span={10} offset={4} >
                                    <Form.Item className='input_field'
                                        label={<label style={{ color: "white" }}>Gender</label>}
                                        name="gender"
                                        rules={[{
                                            required: true,
                                            message: 'Please select gender!',
                                        }
                                        ]}>
                                        <Radio.Group onChange={onChange}  >
                                            <Radio value={'male'}  ><p className='radio'>Male</p>  </Radio>
                                            <Radio value={'female'}><p className='radio'>Female </p> </Radio>
                                        </Radio.Group>
                                    </Form.Item>
    
                                </Col>
                            </Row>
    
                            <Row>
                                <Col span={10}>
                                    <Form.Item className='input_field'
                                        label={<label style={{ color: "white" }}>Role</label>}
                                        name="role"
                                        rules={[{
                                            required: true,
                                            message: 'Please select your role!',
                                        }
                                        ]} >
                                        <Select className='input_field'>
                                            <Select.Option value="frontend">Front End</Select.Option>
                                            <Select.Option value="backend">Back End</Select.Option>
                                            <Select.Option value="hr">HR</Select.Option>
                                            <Select.Option value="BDE">BDE</Select.Option>
                                            <Select.Option value="fullstack">Full Stack</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
    
                                <Col span={10} offset={4}>
                                    <Row>
    
                                        <Col>
                                            <Form.Item className='input_field'
                                                label={<label style={{ color: "white" }}>Image</label>}
                                                name="file" onChange={handleFileInputChange}
                                                rules={[{
                                                    message: 'Please upload image!',
                                                }
                                                ]} >
                                                <input type="file" id="myfile" max={1} name="myfile" />
                                            </Form.Item>
                                        </Col>
    
                                        <Col className='image'>
                                            {id ? <>
                                                {file ? <Image width={80} src={baseImage} /> :
                                                    <Image width={80} src={edit.imageurl} />}
                                            </>
                                                : <Image width={80} src={baseImage} />}
    
                                        </Col>
    
                                        <Col>
                                            <Button className='upload-btn' icon={<UploadOutlined />} onClick={Upload}></Button>
                                        </Col>
    
                                    </Row>
                                </Col>
                            </Row>
    
                            <Form.Item className='input_field'
                                label={<label style={{ color: "white" }}>Adress</label>}
                                name="address"
                                rules={[{
                                    required: true,
                                    message: 'Please enter your address',
                                }
                                ]} >
                                <TextArea rows={5} Col={3} placeholder="" className='textArea' />
                            </Form.Item>
    
                            <Row>
                                <Col span={7}>
                                    <Form.Item
                                        label={<label style={{ color: "white" }}>Country</label>}
                                        name="country"
                                        rules={[{
                                            required: true,
                                            message: 'Please select your country',
                                        }
                                        ]} >
                                        <Select className='input_field'>
                                            <Select.Option value="india"> India</Select.Option>
                                            <Select.Option value="china"> China</Select.Option>
                                            <Select.Option value="london">London</Select.Option>
                                            <Select.Option value="america">America</Select.Option>
                                            <Select.Option value="africa">Africa</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
    
                                <Col span={7} offset={1}>
                                    <Form.Item
                                        className='input_field'
                                        label={<label style={{ color: "white" }}>State</label>}
                                        name="state"
                                    >
                                        <Select>
                                            <Select.Option value="TN"> TamilNadu</Select.Option>
                                            <Select.Option value="kerala"> Kerala</Select.Option>
                                            <Select.Option value="delhi">Delhi</Select.Option>
                                            <Select.Option value="Mumbai">Mumbai</Select.Option>
                                            <Select.Option value="punjab">Punjab</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
    
                                <Col span={8} offset={1}>
                                    <Form.Item
                                        className='input_field'
                                        label={<label style={{ color: "white" }}>City  </label>}
                                        name="city"
                                    >
                                        <Select>
                                            <Select.Option value="chennai"> Chennai</Select.Option>
                                            <Select.Option value="salem"> Salem</Select.Option>
                                            <Select.Option value="nagapattinam">Nagapattinam</Select.Option>
                                            <Select.Option value="coimbatore">Coimbatore</Select.Option>
                                            <Select.Option value="erode">Erode</Select.Option>
                                        </Select>
                                    </Form.Item>
                                </Col>
                            </Row>
    
                            <Row >
                                <Col span={6} >
                                </Col>
    
                                <Col span={24}>
                                    <Button className='submit-addUser' type="primary" htmlType="submit" >Submit <IoIosSend /></Button>
                                </Col>
    
                            </Row>
                        </Form>
    
                    </Content>
                </Layout>
            </>
        );
    }
}

export default AddUser;