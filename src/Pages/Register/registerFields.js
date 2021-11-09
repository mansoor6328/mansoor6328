import Input from '../../components/Input';

export const registerFields = [
  {
    name: 'firstname',
    component: Input,
    label: 'First Name',
    validate: (value) => {
      if (!value) {
        return 'First Name is required.';
      }
      return '';
    },
  },
  {
    name: 'lastname',
    component: Input,
    label: 'Last Name',
    validate: (value) => {
      if (!value) {
        return 'Last Name is required.';
      }
      return '';
    },
  },
  {
    name: 'age',
    component: Input,
    label: 'Age',
    max: 100,
    min: 0,
    maxLength: 3,
    type: 'number',
    validate: (value) => {
      if (!value) {
        return 'age is required.';
      }
      if (value < 1 || value > 100) {
        return 'Please provide valid age';
      }
      return '';
    },
  },
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
  {
    name: 'confirmPassword',
    component: Input,
    label: 'Confirm Password',
    type: 'password',
    validate: (value) => {
      if (!value) {
        return 'Password is required.';
      }
      return '';
    },
  },
];

export const registerInitialValues = {
  firstname: '',
  lastname: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
};
