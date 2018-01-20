import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  tags: any[] = ['Fundraising', 'Pets', 'Soccer', 'Science', 'Helping People', 'Hospital', 'Wine', 'FTK', 'Philantropy'];
  events: any[] = [];

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.events.push({
        eventID: '5',
        name: 'Hug puppies with the homeless',
        description: 'Come to the street to hug puppies with the homeless. Free ice-cream for the homeless, not for you!',
        tags: ['puppies', 'homeless'],
        usersAttended: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        }],
        usersInterested: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        }],
        timestamp: new Date().getDate() + 1000000 * i,
        longitude: -31.543,
        latitude: 56.574,
        duration: 3600000,
        imageURL: 'http://cdn1-www.dogtime.com/assets/uploads/2011/03/puppy-development-300x200.jpg',
        creatorName: 'Matias Szylkowski',
        creatorID: '1',
        volunteersNeeded: 10
      });
      this.events.push({
        eventID: '6',
        name: 'Play soccer with handicapped',
        description: 'We\'re looking for really bad soccer players that could play against gradnparents in wheelchairs. ' +
        'Bring your own ball.',
        tags: ['soccer', 'elderly'],
        usersAttended: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        }],
        usersInterested: [{
          name: 'Matias Szylkowski',
          userID: '1'
        },
        {
          name: 'Luis Pastrana',
          userID: '2'
        }],
        timestamp: new Date().getDate() + 1000000 * i,
        longitude: -31.543,
        latitude: 56.574,
        duration: 3600000,
        imageURL: 'http://www.haitianphotos.com/spa/_files/spa_album/pic_3604.jpg',
        creatorName: 'Matias Szylkowski',
        creatorID: '1',
        volunteersNeeded: 20
      });
    }
  }

  ngOnInit() {

  }
}
