using { DBBACKEND as my } from '../db/schema';
namespace DBBACKEND; 

service StudentService  { 
  entity Students as projection on my.Students;




}

// action createStudent(data: MyCreateStudentParams) returns Students;
// type MyCreateStudentParams {
//   Full_name: String;
//   Gender: String;
//   Office: String;
//   Advisor: Integer;
//   Created_at: DateTime;
//   Planned_study_date: DateTime;
// }
