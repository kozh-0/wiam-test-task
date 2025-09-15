import { DollarOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { AddressWorkStep } from "./AddressWorkStep";
import { LoanParamsStep } from "./LoanParamsStep";
import { PersonalDataStep } from "./PersonalDataStep";

export const loanFormSteps = [
  {
    title: "Personal data",
    icon: <UserOutlined />,
    component: PersonalDataStep,
  },
  {
    title: "Address and work",
    icon: <HomeOutlined />,
    component: AddressWorkStep,
  },
  {
    title: "Loan params",
    icon: <DollarOutlined />,
    component: LoanParamsStep,
  },
];
