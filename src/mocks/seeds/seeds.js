import { db } from '../db'

const seedUsers = () => {
    for (let i = 0; i < 10; i++) {
        db.user.create();
    }
}
export const seedData = () => {
    seedUsers();
}