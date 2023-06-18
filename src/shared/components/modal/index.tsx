import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export const WindowModal: React.FC<{isOpen:boolean, title:string, onConfirm:() => void, onCancel:() => void,children?:any,size:'large'|'medium'|'small'|undefined}> = (props) => {

    const windowSize = () => {
        const withSize = {
            ['large']: '1000px',
            ['medium']: '600px',
            ['small']: '300px'
        }
        return withSize[props.size || 'small'];
    };
  return (
    <>
      <Modal
        title={props.title}
        centered
        open={props.isOpen}
        onOk={props.onConfirm}
        onCancel={props.onCancel}
        width={windowSize()}
      >
        {props.children}
      </Modal>
    </>
  );
}