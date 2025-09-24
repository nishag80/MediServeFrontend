import axiosInstance from './axiosInstance';

// Utility to get token from localStorage/session/cookies
const getToken = () => {
  return localStorage.getItem('authToken');
};

// Optional: Refresh token handler (if you're using refresh tokens)
const refreshToken = async () => {
  // hit refresh endpoint and update localStorage
};

const setupInterceptors = () => {
  // Request Interceptor
  axiosInstance.interceptors.request.use(
    (config) => {
        
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  // Response Interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
        console.log("fy7873uiecfur3iejcnfuhirijcen3iurc8234237947239472938479238479823489237492374982379823743947283");
        
        return response},
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401) {
        // Optional: Add token refresh logic here

        // Logout and redirect to login
        localStorage.clear();
        // if (navigate) navigate('/login');
      }

      if (error.response?.status === 403) {
        console.warn('Access Denied');
      }

      return Promise.reject(error);
    }
  );
};

export default setupInterceptors;
