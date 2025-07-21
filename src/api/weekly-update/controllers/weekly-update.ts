import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async find(ctx) {
    const { query } = ctx;
    
    const data = await strapi.entityService.findMany('api::weekly-update.weekly-update', {
      ...query,
      populate: '*',
    });

    return { data };
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    
    const data = await strapi.entityService.findOne('api::weekly-update.weekly-update', id, {
      populate: '*',
    });

    return { data };
  },

  async create(ctx) {
    const requestData = ctx.request.body.data;
    
    // Валидация поля status
    if (requestData.status && !['current', 'completed'].includes(requestData.status)) {
      return ctx.badRequest('Invalid status. Must be either "current" or "completed".');
    }
    
    // Если status не передан, устанавливаем значение по умолчанию
    if (!requestData.status) {
      requestData.status = 'current';
    }

    const data = await strapi.entityService.create('api::weekly-update.weekly-update', {
      data: requestData,
      populate: '*',
    });

    return { data };
  },

  async update(ctx) {
    const { id } = ctx.params;
    const requestData = ctx.request.body.data;
    
    // Валидация поля status при обновлении
    if (requestData.status && !['current', 'completed'].includes(requestData.status)) {
      return ctx.badRequest('Invalid status. Must be either "current" or "completed".');
    }
    
    const data = await strapi.entityService.update('api::weekly-update.weekly-update', id, {
      data: requestData,
      populate: '*',
    });

    return { data };
  },

  async delete(ctx) {
    const { id } = ctx.params;
    
    const data = await strapi.entityService.delete('api::weekly-update.weekly-update', id);

    return { data };
  },
}); 