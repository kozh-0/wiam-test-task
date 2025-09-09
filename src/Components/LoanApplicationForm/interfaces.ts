interface PersonalDataI {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
}

interface AddressDataI {
  workplace: string;
  address: string;
}

interface LoanDataI {
  amount: number;
  term: number;
}

export interface FormDataI extends PersonalDataI, AddressDataI, LoanDataI {}
