import React, { useContext } from "react";
import { ApplicationContext } from "../../../../../Main/main.context";
import { WindowModal } from "../../../../../shared/components/modal";
;

export const DeleteOption: React.FC<{callback:() => void}> = (props) => {
  const { translate } = useContext(ApplicationContext);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleDelete = () => {
    setIsOpen(false);
    props.callback();
  };

  const handleCancel = () => {
    setIsOpen(false);
  }

  return (
    <>
      <a onClick={() => setIsOpen(true)}>{translate("Remove")}</a>
      <WindowModal
        isOpen={isOpen}
        title={translate("Remove")}
        size="small"
        onConfirm={handleDelete}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to remove this item?</p>
      </WindowModal>
    </>
  );
};
