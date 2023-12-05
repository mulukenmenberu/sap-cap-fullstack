const cds = require('@sap/cds');

module.exports = async function () {
  const db = await cds.connect.to('db');
  const { Schools } = db.entities;

  // Function to insert demo data
  const insertDemoData = async () => {
    const demoData = [
      {
        School_name: 'School A',
        Country: 'Country A',
        Creatd_at: new Date(), // Fix the typo in the attribute name
      },
      {
        School_name: 'School B',
        Country: 'Country B',
        Creatd_at: new Date(), // Fix the typo in the attribute name
      },
      // Add more demo data as needed
    ];

    const existingRecords = await SELECT.from(Schools).then((result) => result.length);

    if (existingRecords === 0) {
      for (const data of demoData) {
        console.log(data);
        await INSERT.into(Schools).entries(data);
      }
    }
  };

  // Insert demo data before processing any read operation
  await insertDemoData();

  // Handle READ operation
  this.on('READ', 'Schools', async (req) => {
    const result = await SELECT.from(Schools);
    return result;
  });

  // Handle CREATE operation
  this.on('CREATE', 'Schools', async (req) => {
    const data = req.data;
    console.log(data);

    const newSchool = await INSERT.into(Schools).entries(data);
    return newSchool;
  });
};
