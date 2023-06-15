import { Avatar, List } from "antd";
import { PageTitle } from "../../../../shared/PageTitle/Title";
import { MailOutlined } from "@ant-design/icons";
import { ApplicationContext } from "../../../../Main/main.context";
import { useContext } from "react";

export const MailingList = () => {
    const contactsList = [
        {
            email: 'deparment1@companyDomain.com',
            fullName: 'Department',
            mobile: '1234567890',
            role: 'Department'
        },
        {
            email: 'username@companymail.com',
            fullName: 'User Name',
            mobile: '1234567890',
        },
        {
            email: 'username02@companymail.com',
            fullName: 'User Name 02',
            mobile: '1234567890',
        },
        {
            email: 'username03@companymail.com',
            fullName: 'User Name 03',
            mobile: '1234567890',
        },
        {
            email: 'username04@companymail.com',
            fullName: 'User Name 04',
            mobile: '1234567890',
        }
    ];

    const {translate} = useContext(ApplicationContext)

    return (
        <div className="mail-list">
            <PageTitle title="Mailing List" />
           <div className="mailing-list">
           <List
                itemLayout="horizontal"
                dataSource={contactsList}
                renderItem={(item, index) => (
                   <>
                    <List.Item  actions={[<a key="list-loadmore-edit">{translate('Edit')}</a>, <a key="list-loadmore-more">{translate('Remove')}</a>]}>
                        <List.Item.Meta
                            avatar={<Avatar size={32} icon={<MailOutlined />} />}
                            title={<a href={`mailto:${item.email}`}>{item.email}</a>}
                            description={`Full Name: ${item?.fullName} | Mobile: ${item?.mobile} | Role: ${item?.role}`}
                        />
                    </List.Item>
                    {/* <div>Content</div> */}
                   </>
                )}
            />
            </div>
        </div>
    );
};