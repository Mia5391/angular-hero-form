import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  powers = [ 'Really Smart', 'Super Speed', 'Invisible', 'Weather Changer'];

  model = new Hero(18, 'Dr. Q', this.powers[0], 'Mr Mind');

  submitted = false

  onSubmit() { this.submitted = true; }

}
