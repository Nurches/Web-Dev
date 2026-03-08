import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Album } from "./models/album";
import { Photo } from "./models/photo";

@Injectable({
    providedIn: 'root'
})
export class AlbumService {
    private api = 'https://jsonplaceholder.typicode.com';
    private noCacheHeaders = new HttpHeaders({
        'Cache-Control': 'no-cache',
        Pragma: 'no-cache'
    });

    constructor(private http: HttpClient){};

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(`${this.api}/albums`, { headers: this.noCacheHeaders });
    }

    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`${this.api}/albums/${id}`, { headers: this.noCacheHeaders });
    }

    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.api}/albums/${id}/photos`, { headers: this.noCacheHeaders });
    }

    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.api}/albums/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.api}/albums/${id}`);
    }
}
