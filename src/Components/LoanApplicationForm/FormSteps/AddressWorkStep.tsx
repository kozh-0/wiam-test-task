import { Form, Select, Input, message } from "antd";
import { requiredValidator } from "./validation";
import { useCategories } from "../hooks/useCategories";

export const AddressWorkStep = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { categories, loading } = useCategories(messageApi);

  return (
    <>
      {contextHolder}
      <Form.Item name="workplace" label="Workplace:" rules={[{ validator: requiredValidator }]}>
        <Select placeholder="Choose a workplace:" loading={loading} options={categories} />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address:"
        rules={[{ validator: requiredValidator }]}
      >
        <Input.TextArea rows={3} placeholder="Enter your address:" />
      </Form.Item>
    </>
  );
};
