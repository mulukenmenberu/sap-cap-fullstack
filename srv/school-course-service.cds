using { DBBACKEND as my } from '../db/schema';
namespace DBBACKEND; 

service SchoolCourseService  { 
  entity School_courses as projection on my.School_courses;

}