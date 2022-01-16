import { current } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { edit } from "features/user-login/userLoginSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

export default function UserEditPage() {
    const user = useAppSelector(state => state.userLogin);
    const [userName, setUserName] = useState(user.userName);
    const [phone, setphone] = useState(user.phone);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleChange = (input: string, value: string) => {
        switch(input) {
            case 'userName':
                setUserName(value);
                return;
            case 'phone':
                setphone(value);
                return;
            default:
                throw new Error('no match');
        }
    }

    const handleSubmit = () => {
        dispatch(edit({userName, phone}));
        navigate('/');
    }

    return (
        <div className="container">
            <h3 className="mt-5">Edit user</h3>
            <Form >
                <FormGroup row>
                    <Label
                        for="userName"
                        sm={1}
                    >
                        User name
                    </Label>
                    <Col sm={11}>
                        <Input
                            id="userName"
                            name="userName"
                            placeholder="with a placeholder"
                            type="text"
                            value={userName}
                            onChange={(e) => handleChange('userName', e.target.value)}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                        for="phone"
                        sm={1}
                    >
                        Phone
                    </Label>
                    <Col sm={11}>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="password placeholder"
                            type="text"
                            value={phone}
                            onChange={(e) => handleChange('phone', e.target.value)}
                        />
                    </Col>
                </FormGroup>
                <div className="offset-1">
                    <button type="button" className="btn btn-sm btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </Form >
        </div>
    );
}
