const cds = require('@sap/cds');

module.exports = async function () {
  const db = await cds.connect.to('db');
  const { Users } = db.entities;

  // Function to insert demo data
  const insertDemoData = async () => {
    const demoData = [
      {
        Full_name: 'John Doe',
        Email: 'john.doe@example.com',
        Office: 'Office A',
        Role: 'User',
        Password: 'hashed_password', // Replace with a hashed password
        Created_at: new Date(),
        Updated_at: new Date(),
        Last_login: new Date(),
        Account_status: 1, // Replace with a valid status
      },
      {
        Full_name: 'Jane Doe',
        Email: 'jane.doe@example.com',
        Office: 'Office B',
        Role: 'Admin',
        Password: 'hashed_password', // Replace with a hashed password
        Created_at: new Date(),
        Updated_at: new Date(),
        Last_login: new Date(),
        Account_status: 1, // Replace with a valid status
      },
      // Add more demo data as needed
    ];

    const existingRecords = await SELECT.from(Users).then((result) => result.length);

    if (existingRecords === 0) {
      for (const data of demoData) {
        console.log(data);
        await INSERT.into(Users).entries(data);
      }
    }
  };

  // Insert demo data before processing any read operation
  await insertDemoData();

  // Handle READ operation
  this.on('READ', 'Users', async (req) => {
    const result = await SELECT.from(Users);
    return result;
  });

  // Handle CREATE operation
  this.on('CREATE', 'Users', async (req) => {
    const data = req.data;
    console.log(data);

    const newUser = await INSERT.into(Users).entries(data);
    return newUser;
  });
};
