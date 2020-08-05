const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUserName = state => state.auth.user.name;

const getAuthError = state => state.auth.error;

export default { getIsAuthenticated, getUserName, getAuthError };
