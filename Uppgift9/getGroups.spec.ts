import { groupList } from './getGroups';

describe('getGroups.ts tests', () => {
    it('retruns group list with group id and name as a promise', async () => {
        const groups = await groupList();
        expect(groups).toEqual([
            {
                "id": 1,
                "groupName": "Hajarna"
            },
            {
                "id": 2,
                "groupName": "Valarna"
            },
            {
                "id": 3,
                "groupName": "Zebrorna"
            }
        ]);
    }, 9000);
});
