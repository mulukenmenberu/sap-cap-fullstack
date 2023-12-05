const cds = require('@sap/cds');

module.exports = async function () {
  const db = await cds.connect.to('db');
  const { School_courses } = db.entities;

  // Function to insert demo data
  const insertDemoData = async () => {
    const demoData = [
      {
        School_id: 1, // Assuming School_id exists in the Schools entity
        Course_name: 'Course A',
        Status: 1,
        Created_at: new Date(),
        Updated_at: new Date(),
      },
      {
        School_id: 2, // Assuming School_id exists in the Schools entity
        Course_name: 'Course B',
        Status: 1,
        Created_at: new Date(),
        Updated_at: new Date(),
      },
      // Add more demo data as needed
    ];

    const existingRecords = await SELECT.from(School_courses).then((result) => result.length);

    if (existingRecords === 0) {
      for (const data of demoData) {
        console.log(data);
        await INSERT.into(School_courses).entries(data);
      }
    }
  };

  // Insert demo data before processing any read operation
  await insertDemoData();

  // Handle READ operation
  this.on('READ', 'School_courses', async (req) => {
    const result = await SELECT.from(School_courses);
    return result;
  });

  // Handle CREATE operation
  this.on('CREATE', 'School_courses', async (req) => {
    const data = req.data;
    console.log(data);

    const newCourse = await INSERT.into(School_courses).entries(data);
    return newCourse;
  });
};
