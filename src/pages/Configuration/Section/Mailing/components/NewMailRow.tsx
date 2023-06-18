import { FC, useContext } from "react";
import React from "react";
import { ContactForm } from "./contactForm";
import { ApplicationContext } from "../../../../../Main/main.context";
import { WindowModal } from "../../../../../shared/components/modal";
import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";


export const NewMailRow: FC<{ callback: () => void; }> = (props) => {
  const { translate } = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const [contactForm, setContactForm] = React.useState<{
    email: string;
    fullName: string;
    lastName: string;
    mobile: string;
    role: string;
  }>({ email: "", fullName: "", lastName: "", mobile: "", role: "" });

  const handleConfirm = () => {
    setIsOpen(false);
    props.callback();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button
        type="primary"
        className="add-new-btn"
        icon={<PlusOutlined />}
        onClick={() => setIsOpen(true)} />
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
