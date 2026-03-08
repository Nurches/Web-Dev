import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  imports: [RouterLink],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';
  deletingId: number | null = null;

  constructor(private readonly albumService: AlbumService) {}

  ngOnInit(): void {
    this.loadAlbums();
  }

  private loadAlbums(): void {
    this.loading = true;
    this.error = '';

    this.albumService.getAlbums().subscribe({
      next: (albums) => {
        this.albums = albums;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load albums. Please try again.';
        this.loading = false;
      }
    });
  }

  deleteAlbum(id: number): void {
    this.deletingId = id;
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter((album) => album.id !== id);
        this.deletingId = null;
      },
      error: () => {
        this.error = 'Failed to delete album.';
        this.deletingId = null;
      }
    });
  }
}
