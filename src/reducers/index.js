import { combineReducers } from 'redux';
import localeReducer from './localeReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  locale: localeReducer,
  theme: themeReducer,
});

export default rootReducer;
