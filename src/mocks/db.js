import { name, datatype } from 'faker'
import { factory, primaryKey } from '@mswjs/data'



export const db = factory({
    user: {
        id: primaryKey(datatype.uuid),
        firstName: name.firstName,
        lastName: name.lastName
    }
})