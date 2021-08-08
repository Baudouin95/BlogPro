import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Poste one',
      content: 'Lorem',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Poste two',
      content: 'Lorem',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Poste three',
      content: 'Lorem',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Poste four',
      content: 'Lorem',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Poste five',
      content: 'Lorem',
      loveIts: 0,
      created_at: new Date()
    },
  ];
}
