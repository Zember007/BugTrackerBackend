import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(params: any) {
    return await strapi.entityService.findMany('api::faq-item.faq-item', {
      ...params,
      populate: '*',
    });
  },

  async findOne(id: string | number) {
    return await strapi.entityService.findOne('api::faq-item.faq-item', id, {
      populate: '*',
    });
  },

  async create(data: any) {
    return await strapi.entityService.create('api::faq-item.faq-item', {
      data,
      populate: '*',
    });
  },

  async update(id: string | number, data: any) {
    return await strapi.entityService.update('api::faq-item.faq-item', id, {
      data,
      populate: '*',
    });
  },

  async delete(id: string | number) {
    return await strapi.entityService.delete('api::faq-item.faq-item', id);
  },
}); 