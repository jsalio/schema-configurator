import { FC, useContext } from "react";
import React from "react";
import { ContactForm } from "./contactForm";
import { ApplicationContext } from "../../../../../Main/main.context";
import { WindowModal } from "../../../../../shared/components/modal";
import { Row, Col, Input, Button } from "antd";
import { SettingOutlined } from "@ant-design/icons";

export const EditMailRow: FC<{ mailContact: any; callback: () => void }> = (
  props
) => {
  const { translate } = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [contactForm, setContactForm] = React.useState<{
    email: string;
    fullName: string;
    lastName: string;
    mobile: string;
    role: string;
  }>({ email: "sampleMail@gmail.com", fullName: "name user", lastName: "user name", mobile: "+1 8099 54788 210", role: "Administrator" });

  const handleConfirm = () => {
    setIsOpen(false);
    props.callback();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <a onClick={() => setIsOpen(true)}>{translate("Edit")}</a>
      <WindowModal
        isOpen={isOpen}
        title={translate("Edit")}
        size="medium"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
      <ContactForm form={contactForm} onFormChange={setContactForm} />
      </WindowModal>
    </>
  );
};

export const SmtpSettingsForm = (data:any|undefined) => {
  const { translate } = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleConfirm = () => {
    setIsOpen(false);
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return(
    <>
               <Button
                 type="primary"
                 className="add-new-btn"
                 icon={<SettingOutlined 
                 onClick={() => setIsOpen(true)} />}
               />
     <WindowModal
        isOpen={isOpen}
        title={translate("smtpSettings")}
        size="medium"
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      >
    <div>
      <Row>
        <Col>
          <label> Account </label>
        </Col>
        <Col>
          <Input size={"small"} width={"500px"} placeholder="Basic usage" value={data.email} />
        </Col>
      </Row>
      <Row>
        <Col>
          <label> Password </label>
        </Col>
        <Col>
          <Input size={"small"} width={"500px"} placeholder="Basic usage" value={data.email} />
        </Col>
      </Row>
      <Row>
        <Col>
          <label> smtp provider </label>
        </Col>
        <Col>
          <Input size={"small"} width={"500px"} placeholder="Basic usage" value={data.email} />
        </Col>
      </Row>
      <Row>
        <Col>
          <label> Port </label>
        </Col>
        <Col>
          <Input size={"small"} width={"500px"} placeholder="Basic usage" value={data.email} />
        </Col>
      </Row>
      <Row>
        <Col>
          <label> Alias </label>
        </Col>
        <Col>
          <Input size={"small"} width={"500px"} placeholder="Basic usage" value={data.email} />
        </Col>
      </Row>
    </div>
    </WindowModal>
    </>
  )
}