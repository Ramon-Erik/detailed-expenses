import { loggerService } from '@/shared/services/logger_service'
import { useCredentialStore } from '../stores/credentials_store'
import { templatesRepository } from '../repositories/templates_repository'
import type { RawTemplate } from '../dtos/templates_dto'

export default class TemplatesService {
  private store = useCredentialStore()

  async loadTemplates() {
    this.store.loading = true

    try {
      const response = await templatesRepository.getTemplates()

      this.store.templates = response.data
    } catch (error) {
      loggerService.axiosError('get template', error)
    } finally {
      this.store.loading = false
    }
  }

  async submitNewAccount(template: RawTemplate) {
    this.store.loading = true

    try {
      await templatesRepository.createNewTemplate(template)
      this.loadTemplates()
    } catch (error) {
      loggerService.axiosError('create template', error)
    } finally {
      this.store.loading = false
    }
  }

  async submitDeleteTemplate(id: string) {
    this.store.loading = true

    try {
      await templatesRepository.deleteTemplate(id)
      this.loadTemplates()
    } catch (error) {
      loggerService.axiosError('delete template', error)
    } finally {
      this.store.loading = false
    }
  }
}
