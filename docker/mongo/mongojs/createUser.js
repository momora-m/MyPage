const adminUser = {
    user: 'root',
    pwd: 'root',
    roles: [
        {
            role: 'root',
            db: 'admin'
        }
    ]
};

db.createUser(adminUser);