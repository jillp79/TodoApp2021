import React , { useState } from 'react';
import { Form, Input , Button , Tabs } from "antd";
import ContactItem from "./ContactList.js";

const { TabPane } = Tabs;

function Contacts(props) {

    const [contacts, setContacts] = useState([]);

    //Form Functions
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };
      
      const validateMessages = {
        required: '${label} is required!',
        types: {
          email: '${label} is not a valid email!'
        }
      };

      const onFinish = (e) => {
        setContacts(contacts => [...contacts,e.user]);
      };

    return (
        <div className={'p-5 border m-5 md:m-12 lg:m-20'}>

                <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name={['user', 'firstname']} label="First Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'lastname']} label="Last Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'comments']} label="Comments">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                        Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div>
                    <Tabs defaultActiveKey="1" type={'card'}>
                        <TabPane tab="Contacts" key="1">
                            <body class="font-sans container">
                                <div class="w-full md:w-3/5 mx-auto p-8">
                                    <div className={'bg-gray-100 mt-5 p-5'}>
                                            {contacts.map((contact, index) => {
                                                return <ContactItem contact={contact} index={index}/>
                                            })}
                                    </div>
                                </div>                       
                            </body>           
                        </TabPane>
                    </Tabs>
                 </div>
        </div>
    );
}

export default Contacts;