import { Form, Slider } from "antd";
import { requiredValidator } from "./validation";

export const LoanParamsStep = () => (
  <>
    <Form.Item
      name="amount"
      label="Loan amount ($):"
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
      label="Loan term (in days):"
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
