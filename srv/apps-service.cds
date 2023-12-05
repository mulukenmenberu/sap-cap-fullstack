using { DBBACKEND as my } from '../db/schema';
namespace DBBACKEND; 

service AppsService  { 
  entity Student_applications as projection on my.Student_applications;

}