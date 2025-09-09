import { Form, Select, Input, message } from "antd";
import { requiredValidator } from "./validation";
import { useCategories } from "../hooks/useCategories";

export const AddressWorkStep = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { categories, loading } = useCategories(messageApi);

  return (
    <>
      {contextHolder}
      <Form.Item name="workplace" label="Место работы:" rules={[{ validator: requiredValidator }]}>
        <Select placeholder="Выберите место работы:" loading={loading} options={categories} />
      </Form.Item>

      <Form.Item
        name="address"
        label="Адрес проживания:"
        rules={[{ validator: requiredValidator }]}
      >
        <Input.TextArea rows={3} placeholder="Введите ваш адрес:" />
      </Form.Item>
    </>
  );
};
