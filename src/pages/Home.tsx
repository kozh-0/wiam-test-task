import { Typography } from "antd";
import LoanApplicationForm from "../Components/LoanApplicationForm";

export const Home = () => {
  return (
    <div>
      <Typography.Title level={2}>Loan application - Test task</Typography.Title>

      <LoanApplicationForm />
    </div>
  );
};
