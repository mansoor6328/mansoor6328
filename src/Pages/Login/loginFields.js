import Input from '../../components/Input';

export const loginFields = [
  {
    name: 'email',
    component: Input,
    label: 'Email',
    type: 'email',
    validate: (value) => {
      if (!value) {
        return 'Email is required.';
      }
      return '';
    },
  },
  {
    name: 'password',
    component: Input,
    label: 'Password',
    type: 'password',
    validate: (value) => {
      if (!value) {
        return 'Password is required.';
      }
      return '';
    },
  },
];

export const loginInitialValues = {
  email: '',
  password: '',
};
