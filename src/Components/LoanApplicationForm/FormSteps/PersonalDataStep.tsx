import { Form, Input, Select } from "antd";
import { phoneValidator, requiredValidator } from "./validation";

export const PersonalDataStep = () => (
  <>
    <Form.Item name="firstName" label="Имя:" rules={[{ validator: requiredValidator }]}>
      <Input />
    </Form.Item>

    <Form.Item name="lastName" label="Фамилия:" rules={[{ validator: requiredValidator }]}>
      <Input />
    </Form.Item>

    <Form.Item name="gender" label="Пол:" rules={[{ validator: requiredValidator }]}>
      <Select
        placeholder="Выберите пол"
        options={[
          { label: "Мужской", value: "male" },
          { label: "Женский", value: "female" },
        ]}
      />
    </Form.Item>

    <Form.Item name="phone" label="Телефон:" rules={[{ validator: phoneValidator }]}>
      <Input placeholder="0XXX XXX XXX" />
    </Form.Item>
  </>
);
