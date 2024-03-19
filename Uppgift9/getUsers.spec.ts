import { userList } from './getUsers';

describe('getUsers.ts tests', () => {
    it('retruns user list with group number as a promise', async () => {
        const users = await userList();
        expect(users).toEqual([
            { 
                'name': 'Lisa', 
                'group': 2
            },
            { 
                'name': 'Hampus', 
                'group': 2
            },
            { 
                'name': 'Linda', 
                'group': 3
            },
            { 
                'name': 'Eva', 
                'group': 1
            },
            { 
                'name': 'Anna', 
                'group': 3
            }
        ]);
    }, 9000);
});
