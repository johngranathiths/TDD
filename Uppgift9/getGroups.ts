export const groupList = (function getGroups() {
    return new Promise((resolve) => {
        const groups = [
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
        ]
        resolve(groups)
    })
});
