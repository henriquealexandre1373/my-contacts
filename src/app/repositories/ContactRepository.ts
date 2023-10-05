import { v4 } from 'uuid'

interface Contacts {
  id: string
  name: string
  email: string
  phone: string
  category_id: string
}

const contacts: Array<Contacts> = [
  {
    id: v4(),
    name: 'Henrique',
    email: 'henrique@mail.com',
    phone: '123123213',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Alexandre',
    email: 'alexandre@mail.com',
    phone: '321453566',
    category_id: v4(),
  },
]

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts)
    })
  }

  findById(id: string) {
    return new Promise((resolve) => {
      resolve(contacts.find((contact) => contact.id === id))
    })
  }
}

export default new ContactRepository()