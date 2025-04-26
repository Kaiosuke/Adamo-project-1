interface IContact {
  name: string
  email: string
  phoneNumber: number
  message: string
}

type IContactOnlyEmail = Omit<IContact, 'name' | 'phoneNumber' | 'message'>

export type { IContact, IContactOnlyEmail }
