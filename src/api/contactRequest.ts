import { IContact, IContactOnlyEmail } from '@interfaces/contact'
import { instanceLocal } from './instance'

const contact = async ({ data }: { data: IContact | IContactOnlyEmail }) => {
  await instanceLocal.post('contacts', data)
}

export { contact }
