import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  constructor( private http: HttpClient) {
   }

   getQuery( query: string) {
     const url = `https://api.spotify.com/v1/${ query }`;

     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD3bLcZynefbFT4YL6cYCv_2hDEt20hpcrRfVtiUpQd3Ta2Wuf0q7Ahxj6dsFvhguM3rrFuM127sSMA-ACoPfyoQ7Eyoh1ws72yyidrfFPs5viyA-Gq4l0kbRbak6ygYD4T_kZNf-k4HgkNobhx4YMGtTMOlJLk8Q'
    });

     return this.http.get(url, { headers });
   }

   getNewReleases() {

    return this.getQuery('browse/new-releases').pipe( map( (data: any) => data.albums.items ));
   }

   getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist`).pipe( map( (data: any) => data.artists.items));

   }

   getArtista( id: string) {
     return this.getQuery( `artists/${ id }`);
   }

   getTopTracks( id: string) {
    return this.getQuery( `artists/${ id }/top-tracks?country=us`).pipe( map( (data: any) => data.tracks));
   }

}
