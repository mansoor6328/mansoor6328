export const storeUserDetails = (data) => {
  sessionStorage.setItem('token', data.accessToken);
  localStorage.setItem('user', JSON.stringify(data.user));
};

export const clearUserDetails = () => {
  sessionStorage.clear();
  localStorage.clear();
};
