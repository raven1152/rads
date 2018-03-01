import { Injectable } from '@angular/core';
import { ApplicationConfigService } from '../application-config/application-config.service';
import { User } from './user';
import { UserProfile } from './user-profile';

@Injectable()
export class UserConfigService {
  public defaultLayout: string;
  public defaultRoute: string;
  public isAuthenticated: boolean;
  public hasProfile: boolean;
  public user: User;
  public userProfile: UserProfile;
  public users: Array<User>;
  public profiles: Array<UserProfile>;

  public constructor(private applicationConfig: ApplicationConfigService) {
    this.defaultLayout = applicationConfig.layouts[2];
    this.defaultRoute = 'login';
    this.isAuthenticated = false;
    this.hasProfile = false;
    this.users = users.map(obj => {
      return new User(
        obj.userId,
        obj.isAuthenticated,
        obj.impersonateUser,
        obj.effectiveUser,
        obj.groupMembership,
        obj.authenticationMessage,
        obj.lastName,
        obj.firstName,
        obj.emailAddress,
        obj.organization,
        obj.department
      );
    });
    this.profiles = profiles.map(obj => {
      return new UserProfile(
        obj.profileKey,
        obj.defaultRoute,
        obj.defaultLayout,
        obj.profileMessage
      );
    });
  }

  public configUser(user: string, password: string): boolean {
    this.isAuthenticated = this.authenticateUser(user, password);
    if (this.isAuthenticated) {
      this.hasProfile = this.getUserProfile();
    }
    return this.isAuthenticated && this.hasProfile;
  }

  public authenticateUser(user: string, password: string): boolean {
    this.user = users.find(u => {
      return u.userId === user;
    });
    if (this.user && this.user.userId === password) {
      this.user.isAuthenticated = true;
      return true;
    }
    return false;
  }

  public getUserProfile(): boolean {
    if (!this.user.isAuthenticated) { return false; }

    this.userProfile = this.profiles.find(p => {
      return p.profileKey === this.user.userId;
    });
    if (this.userProfile) { return true; }
    return false;
  }
}

const profiles = [
  {
    'profileKey': 'guest',
    'defaultRoute': 'guest',
    'defaultLayout': 'dashboard',
    'profileMessage': 'profile found for user \'guest\''
  },
  {
    'profileKey': 'dpreston',
    'defaultRoute': 'it',
    'defaultLayout': 'admin',
    'profileMessage': 'profile found for user \'dpreston\''
  },
  {
    'profileKey': 'rwestbrook',
    'defaultRoute': 'sales',
    'defaultLayout': 'admin',
    'profileMessage': 'profile found for user \'dpreston\''
  },
  {
    'profileKey': 'pgeorge',
    'defaultRoute': 'engineering',
    'defaultLayout': 'dashboard',
    'profileMessage': 'profile found for user \'dpreston\''
  },
  {
    'profileKey': 'sadams',
    'defaultRoute': 'drafting',
    'defaultLayout': 'dashboard',
    'profileMessage': 'profile found for user \'dpreston\''
  },
  {
    'profileKey': 'aroberson',
    'defaultRoute': 'it',
    'defaultLayout': 'dashboard',
    'profileMessage': 'profile found for user \'dpreston\''
  },
];

const users = [
  {
    'userId': 'guest',
    'isAuthenticated': true,
    'impersonateUser': '',
    'effectiveUser': 'guest',
    'groupMembership': [],
    'authenticationMessage': 'authentication succeeded',
    'lastName': '',
    'firstName': '',
    'emailAddress': 'guest@harsco.com',
    'organization': 'AXC',
    'department': 'NA'
  },
  {
    'userId': 'dpreston',
    'isAuthenticated': true,
    'impersonateUser': '',
    'effectiveUser': 'dpreston',
    'groupMembership': ['site-users', 'site-administrators'],
    'authenticationMessage': 'authentication succeeded',
    'lastName': 'Preston',
    'firstName': 'David',
    'emailAddress': 'dpreston@harsco.com',
    'organization': 'AXC',
    'department': 'IT'
  },
  {
    'userId': 'rwestbrook',
    'isAuthenticated': true,
    'impersonateUser': '',
    'effectiveUser': 'rwestbrook',
    'groupMembership': ['site-users'],
    'authenticationMessage': 'authentication succeeded',
    'lastName': 'Westbrook',
    'firstName': 'Russel',
    'emailAddress': 'rwestbrook@harsco.com',
    'organization': 'AXC',
    'department': 'Sales'
  },
  {
    'userId': 'canthony',
    'isAuthenticated': true,
    'impersonateUser': '',
    'effectiveUser': 'canthony',
    'groupMembership': ['site-users'],
    'authenticationMessage': 'authentication succeeded',
    'lastName': 'Anthony',
    'firstName': 'Carmello',
    'emailAddress': 'canthony@harsco.com',
    'organization': 'AXC',
    'department': 'Sales'
  },
  {
    'userId': 'pgeorge',
    'isAuthenticated': true,
    'impersonateUser': '',
    'effectiveUser': 'pgeorge',
    'groupMembership': ['site-users'],
    'authenticationMessage': 'authentication succeeded',
    'lastName': 'George',
    'firstName': 'Paul',
    'emailAddress': 'pgeorge@harsco.com',
    'organization': 'AXC',
    'department': 'Engineering'
  },
  {
    'userId': 'sadams',
    'isAuthenticated': true,
    'impersonateUser': '',
    'effectiveUser': 'sadams',
    'groupMembership': ['site-users'],
    'authenticationMessage': 'authentication succeeded',
    'lastName': 'Adams',
    'firstName': 'Steven',
    'emailAddress': 'sadams@harsco.com',
    'organization': 'AXC',
    'department': 'Drafting'
  },
  {
    'userId': 'aroberson',
    'isAuthenticated': true,
    'impersonateUser': '',
    'effectiveUser': 'aroberson',
    'groupMembership': ['site-users'],
    'authenticationMessage': 'authentication succeeded',
    'lastName': 'Roberson',
    'firstName': 'Andre',
    'emailAddress': 'aroberson@harsco.com',
    'organization': 'AXC',
    'department': 'IT'
  },
];
