using { DBBACKEND as my } from '../db/schema';
namespace DBBACKEND; 

service AppsService @(requires:'authenticated-user') { 
  entity Users as projection on my.Users;

}