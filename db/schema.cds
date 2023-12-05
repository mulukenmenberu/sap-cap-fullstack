using { Currency, managed, sap } from '@sap/cds/common';
namespace DBBACKEND; 


entity Users : managed {
  key User_id : Integer;
  Full_name : String;
  Email : String;
  Office : String;
  Role : String; // Consider a better approach for handling comma-separated roles
  Password : String; // Consider encryption
  Created_at : DateTime;
  Updated_at : DateTime;
  Last_login : DateTime;
  Account_status : Integer; // Consider using an enum type for status
}

entity Students : managed {
  key Student_db_id : Integer;
  Full_name : String;
  Gender : String;
  Office : String;
  Advisor : Integer;//Association to Users;
  Created_at : DateTime;
  Planned_study_date : DateTime;
}

entity Student_communications : managed {
  key Id : Integer;
  Student_db_id : Association to Students;
  User_id : Association to Users;
  Message : String; // Consider using a longer string type if needed
  Created_date : DateTime;
  Updated_date : DateTime;
  Updated_by : Association to Users;
}

entity Schools : managed {
  key School_id : Integer;
  School_name : String;
  Country : String;
  Creatd_at : DateTime; // Correct the typo in the attribute name
}

entity School_courses : managed {
  key Course_id : Integer;
  School_id : Association to Schools;
  Course_name : String;
  Status : Integer;
  Created_at : DateTime;
  Updated_at : DateTime;
}

entity Student_applications : managed {
  key Application_id : Integer;
  Student_db_id : Association to Students;
  Course_id : Association to School_courses;
  Inserted_by : Association to Users;
  Start_date : DateTime;
  Note : String;
  Created_at : DateTime;
  Updated_at : DateTime;
  Final_choice : String;
  Is_deferred : String;
  Application_status : String;
}
