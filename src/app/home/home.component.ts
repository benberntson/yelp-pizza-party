import {Component} from '@angular/core';

@Component({
  selector: 'home',
  template: `
  <div class="container">
    <div class="well well-lg">
      <h1>PIZZA PARTY!</h1>
      <p>Connect with <a href="http://www.yelp.com/">Yelp!</a> to find the best pizza joints in your area...</p>
      <p>Thus making one <i>heck-of-a</i>...</p>
      <h1>PIZZA PARTY!!!!!</h1>
      <p>Seriously... I just made this to learn ng2, Express, and MongoDB</p>
      <p>View the source code <a href="https://github.com/benberntson/yelp-pizza-party/">here</a></p>
      <h1>TO USE APP</h1>
      <ol>
        <li>Sign up</li>
        <li>Sign in</li>
        <li>Search Yelp! with a location of your choice</li>
        <li>Add your location to an array of favorates</li>
        <li>Turn your favorites into a <span class="party">PARTY</span></li>
      </ol>
    </div>
  </div>
  `,
  styles: [`
    span.party{
      font-family:"Bangers";
      font-size:120%;
    }
  `]
})

export class HomeComponent {
  constructor() {/*NOT IMPLIMENTED*/ }
}
