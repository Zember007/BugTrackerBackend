import axios from 'axios';

const EMAIL_OCTOPUS_API_KEY = process.env.EMAIL_OCTOPUS_API_TOKEN;
const EMAIL_OCTOPUS_BASE_URL = 'https://emailoctopus.com/api/1.6';
const LIST_ID = '3b44bbc4-63c3-11f0-bba8-cbe0e90485d3';

const emailOctopusApi = axios.create({
  baseURL: EMAIL_OCTOPUS_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getListInfo = async () => {
  if (!EMAIL_OCTOPUS_API_KEY) return null;
  const response = await emailOctopusApi.get(`/lists/${LIST_ID}`, {
    params: { api_key: EMAIL_OCTOPUS_API_KEY },
  });
  return response.data.counts;
};

const getSubscribedContacts = async (limit = 50) => {
  if (!EMAIL_OCTOPUS_API_KEY) return null;
  const response = await emailOctopusApi.get(`/lists/${LIST_ID}/contacts`, {
    params: { api_key: EMAIL_OCTOPUS_API_KEY, limit: Math.min(limit, 100) },
  });
  const subscribedContacts = response.data.data.filter(c => c.status === 'SUBSCRIBED');
  return {
    count: subscribedContacts.length,
    contacts: subscribedContacts,
  };
};

export default {
  getListInfo,
  getSubscribedContacts,
}; 