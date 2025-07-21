import axios from 'axios';

const EMAIL_OCTOPUS_API_KEY = process.env.EMAIL_OCTOPUS_API_TOKEN;
const EMAIL_OCTOPUS_BASE_URL = 'https://emailoctopus.com/api/1.6';
const LIST_ID = '6558e418-63c2-11f0-ae06-cbe0e90485d3';

const emailOctopusApi = axios.create({
  baseURL: EMAIL_OCTOPUS_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ({ strapi }) => ({
  async testConnection() {
    if (!EMAIL_OCTOPUS_API_KEY) {
      throw new Error('EMAIL_OCTOPUS_API_TOKEN is not configured');
    }
    
    try {
      // Простой запрос для проверки токена
      const response = await emailOctopusApi.get('/lists', {
        params: { api_key: EMAIL_OCTOPUS_API_KEY },
      });
      
      strapi.log.info('Email Octopus API connection successful');
      return {
        success: true,
        listsCount: response.data.data.length,
        lists: response.data.data.map(list => ({
          id: list.id,
          name: list.name
        }))
      };
    } catch (error) {
      strapi.log.error('Email Octopus API connection failed:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message
      });
      throw error;
    }
  },

  async getListInfo() {
    if (!EMAIL_OCTOPUS_API_KEY) {
      throw new Error('EMAIL_OCTOPUS_API_TOKEN is not configured');
    }
    
    try {
      strapi.log.info(`Fetching list info for LIST_ID: ${LIST_ID}`);
      const response = await emailOctopusApi.get(`/lists/${LIST_ID}`, {
        params: { api_key: EMAIL_OCTOPUS_API_KEY },
      });
      return response.data.counts;
    } catch (error) {
      strapi.log.error('Error fetching list info:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
        listId: LIST_ID
      });
      throw error;
    }
  },

  async getSubscribedContacts(limit = 50) {
    if (!EMAIL_OCTOPUS_API_KEY) {
      throw new Error('EMAIL_OCTOPUS_API_TOKEN is not configured');
    }
    
    try {
      strapi.log.info(`Fetching subscribed contacts for LIST_ID: ${LIST_ID}, limit: ${limit}`);
      const response = await emailOctopusApi.get(`/lists/${LIST_ID}/contacts`, {
        params: { 
          api_key: EMAIL_OCTOPUS_API_KEY, 
          limit: Math.min(limit, 100) 
        },
      });
      
      const subscribedContacts = response.data.data.filter(c => c.status === 'SUBSCRIBED');
      return {
        count: subscribedContacts.length,
        contacts: subscribedContacts,
      };
    } catch (error) {
      strapi.log.error('Error fetching subscribed contacts:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message,
        listId: LIST_ID
      });
      throw error;
    }
  },
}); 