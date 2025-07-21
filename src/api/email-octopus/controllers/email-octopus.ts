import type { Core } from '@strapi/strapi';
import emailOctopusService from '../services/email-octopus';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async listInfo(ctx) {
    ctx.body = await emailOctopusService.getListInfo();
  },
  async subscribedContacts(ctx) {
    const limit = ctx.query.limit ? parseInt(ctx.query.limit, 10) : 50;
    return await emailOctopusService.getSubscribedContacts(limit);
  },
}); 