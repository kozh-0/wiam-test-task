import { Form, Slider } from "antd";
import { requiredValidator } from "./validation";

export const LoanParamsStep = () => (
  <>
    <Form.Item
      name="amount"
      label="Сумма займа ($):"
      rules={[{ validator: requiredValidator }]}
      initialValue={200}
    >
      <Slider
        min={200}
        max={1000}
        step={100}
        marks={{
          200: "$200",
          500: "$500",
          1000: "$1000",
        }}
      />
    </Form.Item>

    <Form.Item
      name="term"
      label="Срок займа (дней):"
      rules={[{ validator: requiredValidator }]}
      initialValue={10}
    >
      <Slider
        min={10}
        max={30}
        marks={{
          10: "10",
          20: "20",
          30: "30",
        }}
      />
    </Form.Item>
  </>
);
