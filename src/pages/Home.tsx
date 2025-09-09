import { Typography } from "antd";
import LoanApplicationForm from "../Components/LoanApplicationForm";

export const Home = () => {
  return (
    <div>
      <Typography.Title level={2}>Заявка на займ</Typography.Title>

      <LoanApplicationForm />
    </div>
  );
};
