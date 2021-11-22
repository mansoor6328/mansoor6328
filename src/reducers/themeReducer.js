const initialThemeState = 'light';

const themeReducer = (state = initialThemeState, { type, payload }) => {
  switch (type) {
    case 'change_theme':
      return payload;

    default:
      return state;
  }
};

export default themeReducer;
hidjakna