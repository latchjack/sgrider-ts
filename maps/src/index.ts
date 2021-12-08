/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
// Pass in the div with the id of 'map'
new CustomMap('map');

console.log(user, company);
