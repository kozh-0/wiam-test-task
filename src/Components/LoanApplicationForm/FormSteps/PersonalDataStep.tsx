import { Form, Input, Select } from "antd";
import { phoneValidator, requiredValidator } from "./validation";

export const PersonalDataStep = () => (
  <>
    <Form.Item name="firstName" label="Name:" rules={[{ validator: requiredValidator }]}>
      <Input />
    </Form.Item>

    <Form.Item name="lastName" label="Family name:" rules={[{ validator: requiredValidator }]}>
      <Input />
    </Form.Item>

    <Form.Item name="gender" label="Sex:" rules={[{ validator: requiredValidator }]}>
      <Select
        placeholder="Choose your sex"
        options={[
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
        ]}
      />
    </Form.Item>

    <Form.Item name="phone" label="Phone:" rules={[{ validator: phoneValidator }]}>
      <Input placeholder="0XXX XXX XXX" />
    </Form.Item>
  </>
);
