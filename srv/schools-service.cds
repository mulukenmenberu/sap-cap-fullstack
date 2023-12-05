using { DBBACKEND as my } from '../db/schema';
namespace DBBACKEND; 

service SchoolsService  { 
  entity Schools as projection on my.Schools;

}