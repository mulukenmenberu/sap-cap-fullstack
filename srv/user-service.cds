using { DBBACKEND as my } from '../db/schema';
namespace DBBACKEND; 

service UsersService  { 
  entity Users as projection on my.Users;

}