import Input from '../../components/Input';

export const loginFields = [
  {
    name: 'username',
    component: Input,
    label: 'Username',
    validate: (value) => {
      if (!value) {
        return 'Username is required.';
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
  username: '',
  password: '',
};
