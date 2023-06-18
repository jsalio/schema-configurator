import { Col, Input, Row } from "antd";
import { FC, useState } from "react";

export interface IContactForm {
    email: string;
    fullName: string;
    lastName: string;
    mobile: string;
    role: string;
}


export const ContactForm: FC<{form: IContactForm;onFormChange: (set:IContactForm ) => void}> = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [contactForm, setContactForm] = useState<IContactForm>(props.form);
    console.log(contactForm);

    const updateContact = (key: string, value: string) => {
        setContactForm({ ...contactForm, [key]: value });
        props.onFormChange(contactForm);
    };

    return (
        <>
            <Row>
                <Col>
                    <label> Email </label>
                </Col>
                <Col>
                    <Input
                        size={"small"}
                        width={"500px"}
                        placeholder="Basic usage"
                        value={contactForm.email}
                        onChange={(e) => updateContact("email", e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label> Name </label>
                    <Input
                        size={"small"}
                        value={contactForm.fullName}
                        placeholder="Basic usage"
                        onChange={(e) => updateContact("fullName", e.target.value)} />
                </Col>
                <Col>
                    <label> LastName </label>
                    <Input
                        size={"small"}
                        value={contactForm.lastName}
                        placeholder="Basic usage"
                        onChange={(e) => updateContact("lastName", e.target.value)} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <label> Mobile </label>
                    <Input
                        size={"small"}
                        value={contactForm.mobile}
                        placeholder="Basic usage"
                        onChange={(e) => updateContact("mobile", e.target.value)} />
                </Col>
                <Col>
                    <label> Role </label>
                    <Input
                    value={contactForm.role}
                        size={"small"}
                        placeholder="Basic usage"
                        onChange={(e) => updateContact("role", e.target.value)} />
                </Col>
            </Row>
        </>
    );
};
