export const userList = (function getUsers() {
    return new Promise((resolve) => {
        const users = [
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
        ]
        resolve(users)
    })
});
