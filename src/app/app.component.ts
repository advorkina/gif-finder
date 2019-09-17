import { Component } from '@angular/core';

const API = 'https://api.giphy.com/v1/gifs/search';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchTerm = '';
  background = '../assets/max-bottinger-_yL3CxNwV4M-unsplash.jpg';

  onSearchTermChanged(event: any) {
    this.searchTerm = event.target.value;
    this.searchFotGif(this.searchTerm);
  }

  async searchFotGif(searchTerm: string) {
    const response = await fetch(`
      ${API}?q=${searchTerm}&limit=1&api_key=${'MaGTQKdkQcAnHj3yrH2FieHJGlhZ4gju'}`);
    const responseJson = await response.json();
    this.background = responseJson.data[0].images.original.url;
  }
}
