// API configuration utility
const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || 'http://localhost:8000';

export const apiConfig = {
  baseURL: API_BASE_URL,
  endpoints: {
    profileSummary: '/api/profile-summary/',
    projects: '/api/projects/',
    skills: '/api/skills/',
    experiences: '/api/experiences/',
    sendMessage: '/api/send-message/',
  }
};

// Helper function to get full API URL
export const getApiUrl = (endpoint: string) => {
  return `${apiConfig.baseURL}${endpoint}`;
};
