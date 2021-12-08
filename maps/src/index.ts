/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

// Create an instance of a User
const user = new User();

// Create an instance of a Company
const company = new Company();

// Pass in the div with the id of 'map'
const customMap = new CustomMap('map');

// Not DRY
// customMap.addUserMarker(user);
// customMap.addCompanyMarker(company);

customMap.addMarker(user);
customMap.addMarker(company);
