import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(params: any) {
    return await strapi.entityService.findMany('api::weekly-update.weekly-update', {
      ...params,
      populate: '*',
    });
  },

  async findOne(id: string | number) {
    return await strapi.entityService.findOne('api::weekly-update.weekly-update', id, {
      populate: '*',
    });
  },

  async create(data: any) {
    return await strapi.entityService.create('api::weekly-update.weekly-update', {
      data,
      populate: '*',
    });
  },

  async update(id: string | number, data: any) {
    return await strapi.entityService.update('api::weekly-update.weekly-update', id, {
      data,
      populate: '*',
    });
  },

  async delete(id: string | number) {
    return await strapi.entityService.delete('api::weekly-update.weekly-update', id);
  },
}); 