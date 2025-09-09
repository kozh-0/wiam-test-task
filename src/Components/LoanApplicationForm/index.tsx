import { useState } from "react";
import { Steps, Form, Button, Card, Space, message, Modal } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { useFormSubmission } from "./hooks/useFormSubmission";
import { loanFormSteps } from "./FormSteps";
import type { FormDataI } from "./interfaces";

export default function LoanApplicationForm() {
  const [messageApi, contextHolderMessage] = message.useMessage();
  const [modal, contextHolderModal] = Modal.useModal();
  const [currentStep, setCurrentStep] = useState(0);
  const [form] = Form.useForm();
  const [formData, setFormData] = useState<FormDataI>();

  const { loading, submitForm } = useFormSubmission(messageApi);

  const nextStep = async () => {
    try {
      const values = await form.validateFields();
      setFormData((prev) => ({ ...prev, ...values }));
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Ошибка валидации:", error);
    }
  };

  const prevStep = () => {
    const values = form.getFieldsValue();
    setFormData((prev) => ({ ...prev, ...values }));
    setCurrentStep(currentStep - 1);
  };

  const onFinish = async (values: FormDataI) => {
    const allFormData = { ...formData, ...values };
    const res = await submitForm(allFormData);
    console.log(res);

    modal.success({
      title: "Заявка одобрена!",
      content: (
        <p>
          Поздравляем, {res.title}. Вам одобрена сумма ${values.amount} на {values.term} дней.
        </p>
      ),
    });
  };

  const CurrentStepComponent = loanFormSteps[currentStep].component;

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
      <Steps current={currentStep} items={loanFormSteps} style={{ marginBottom: "24px" }} />

      {contextHolderMessage}
      {contextHolderModal}
      <Card>
        <Form
          form={form}
          layout="vertical"
          disabled={loading}
          onFinish={onFinish}
          initialValues={formData}
          onValuesChange={(changedValues) => {
            setFormData((prev) => ({ ...prev, ...changedValues }));
          }}
        >
          <CurrentStepComponent />

          <Space style={{ marginTop: "24px", width: "100%", justifyContent: "space-between" }}>
            {currentStep > 0 && (
              <Button icon={<ArrowLeftOutlined />} onClick={prevStep}>
                Назад
              </Button>
            )}

            {currentStep < loanFormSteps.length - 1 ? (
              <Button type="primary" icon={<ArrowRightOutlined />} onClick={nextStep}>
                Далее
              </Button>
            ) : (
              <Button type="primary" loading={loading} onClick={() => form.submit()}>
                Подать заявку
              </Button>
            )}
          </Space>
        </Form>
      </Card>
    </div>
  );
}
