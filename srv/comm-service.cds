using { DBBACKEND as my } from '../db/schema';
namespace DBBACKEND; 

service CommService  { 
  entity Student_communications as projection on my.Student_communications;

}