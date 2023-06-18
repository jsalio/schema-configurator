import {
  PlusOutlined,
  SearchOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { List, Button, Col, Input, Row } from "antd";
import React from "react";
import { FC } from "react";
import { PageTitle } from "../PageTitle/Title";
import "./index.css";
import { NewMailRow } from "../../../pages/Configuration/Section/Mailing/components/NewMailRow";
import { SmtpSettingsForm } from "../../../pages/Configuration/Section/Mailing/components/EditMailRow";

export interface IScrolableListProps {
  data: Array<any>;
  renderRow?: (item: any, index: number) => React.ReactNode;
  extra?: {
    edit?: boolean;
    add?: boolean;
    setting?: boolean;
    search?: boolean;
    dividerSpace?: number;
    searchPlaceholder?: string;
    searchStyle?: React.CSSProperties | undefined;
  };
  title?: string;
  listStyle?: React.CSSProperties | undefined;
  listClassName?: string | undefined;
}

export const ScrollableList: FC<IScrolableListProps> = (props) => {
  const [searchText, setSearchText] = React.useState<string>("");
  const defaultDividerSpace = 3;

  const filterData = () => {
    const filteredData = props.data.filter((item) => {
      return item.email.toLowerCase().includes(searchText.toLowerCase());
    });
    return filteredData;
  };

  const renderExtra = () => {
    const { extra } = props;
    if (extra) {
      return (
        <Row justify="space-between" align="middle">
          <Col span={12}>
            {extra.search && (
              <Input
                addonBefore={<SearchOutlined />}
                placeholder={props.extra?.searchPlaceholder}
                style={props.extra?.searchStyle}
                onChange={(e) => setSearchText(e.target.value)}
              />
            )}
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            {extra.add && (
              <NewMailRow callback={() => console.log("new row")} />
            )}
            {extra.setting && (
                <SmtpSettingsForm  />
            //   <Button
            //     type="primary"
            //     className="add-new-btn"
            //     icon={<SettingOutlined />}
            //   />
            )}
          </Col>
        </Row>
      );
    }
  };

  return (
    <div className="mail-list">
      <PageTitle title={props.title} extra={renderExtra()} />
      <div
        style={{ margin: props.extra?.dividerSpace || defaultDividerSpace }}
      />
      <div className="mailing-list">
        <List
          itemLayout="horizontal"
          dataSource={filterData()}
          renderItem={props.renderRow}
        />
      </div>
    </div>
  );
};
