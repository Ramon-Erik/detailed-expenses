import BaseRepository from '@/shared/repositories/base_repository'
import type { CreateTemplatesResponse, RawTemplate, Template, TemplatesResponse } from '../dtos/templates_dto'

export class TemplatesRepository extends BaseRepository {
  async getTemplates() {
    return await this.get<TemplatesResponse>('/presets')
  }

  async createNewTemplate(template: RawTemplate) {
    console.log(template)

    return await this.post<CreateTemplatesResponse>('/presets', template)
  }

  async deleteTemplate(id: string) {
    return await this.delete(`/presets/${id}`)
  }
}

export const templatesRepository = new TemplatesRepository()
