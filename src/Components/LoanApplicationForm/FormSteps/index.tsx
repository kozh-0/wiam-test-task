import { DollarOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import { AddressWorkStep } from "./AddressWorkStep";
import { LoanParamsStep } from "./LoanParamsStep";
import { PersonalDataStep } from "./PersonalDataStep";

export const loanFormSteps = [
  {
    title: "Личные данные",
    icon: <UserOutlined />,
    component: PersonalDataStep,
  },
  {
    title: "Адрес и работа",
    icon: <HomeOutlined />,
    component: AddressWorkStep,
  },
  {
    title: "Параметры займа",
    icon: <DollarOutlined />,
    component: LoanParamsStep,
  },
];
