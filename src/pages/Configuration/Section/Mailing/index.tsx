import { Avatar, List } from "antd";
import { MailOutlined } from "@ant-design/icons";
import { ApplicationContext } from "../../../../Main/main.context";
import { useContext, useEffect } from "react";
import "./index.css";
import React from "react";
import { ScrollableList } from "../../../../shared/components/list/scrollable-list";
import { contactsList } from "../../../../shared/api/mail-settings";
import { EditMailRow } from "./components/EditMailRow";
import { DeleteOption } from "./components/deleteOption";


export const MailingList = () => {
  const { translate } = useContext(ApplicationContext);
  const [dataSet, setDataSet] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setDataSet(contactsList);
    }, 1000);
  }, []);

  const confirmRowChanges = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  return (
    <>
      <ScrollableList
        data={dataSet}
        title="Mailing List"
        renderRow={(item, index) => (
          <List.Item
            actions={[
              <EditMailRow mailContact={item} callback={confirmRowChanges} />,
              <DeleteOption callback={confirmRowChanges} />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar size={32} icon={<MailOutlined />} />}
              title={<a href={`mailto:${item.email}`}>{item.email}</a>}
              description={`Full Name: ${item?.fullName} | Mobile: ${item?.mobile} | Role: ${item?.role}`}
            />
          </List.Item>
        )}
        extra={{
          add: true,
          setting: true,
          search: true,
          searchPlaceholder: "Search by email",
          searchStyle: { width: 400 },
          dividerSpace: 3,
        }}
      />
    </>
  );
};


