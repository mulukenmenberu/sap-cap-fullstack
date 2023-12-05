const cds = require('@sap/cds');

module.exports = async function () {
  const db = await cds.connect.to('db');
  const { Student_applications } = db.entities;

  // Function to insert demo data
  const insertDemoData = async () => {
    const demoData = [
      {
        // Assuming the required associations exist in the database
        Student_db_id: 1, // Replace with a valid Student_db_id
        Course_id: 1, // Replace with a valid Course_id
        Inserted_by: 1, // Replace with a valid User_id
        Start_date: new Date(),
        Note: 'Application Note',
        Created_at: new Date(),
        Updated_at: new Date(),
        Final_choice: 'Final Choice',
        Is_deferred: 'Deferred',
        Application_status: 'Status',
      },
      // Add more demo data as needed
    ];

    const existingRecords = await SELECT.from(Student_applications).then((result) => result.length);

    if (existingRecords === 0) {
      for (const data of demoData) {
        console.log(data);
        await INSERT.into(Student_applications).entries(data);
      }
    }
  };

  // Insert demo data before processing any read operation
  await insertDemoData();

  // Handle READ operation
  this.on('READ', 'Student_applications', async (req) => {
    const result = await SELECT.from(Student_applications);
    return result;
  });

  // Handle CREATE operation
  this.on('CREATE', 'Student_applications', async (req) => {
    const data = req.data;
    console.log(data);

    const newApplication = await INSERT.into(Student_applications).entries(data);
    return newApplication;
  });
};
