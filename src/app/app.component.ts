import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-finder';

  searchTerm = '';
  background = '../assets/max-bottinger-_yL3CxNwV4M-unsplash.jpg';

  onSearchTermChanged(event: any) { // without type info
    this.searchTerm = event.target.value;
    this.searchFotGif(this.searchTerm);
  }

  async searchFotGif(searchTerm: string) {
    const response = await fetch(`
      https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=1&api_key=${'MaGTQKdkQcAnHj3yrH2FieHJGlhZ4gju'}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    console.log(responseJson.data[0])
    this.background = responseJson.data[0].images.original.url;
  }
}
