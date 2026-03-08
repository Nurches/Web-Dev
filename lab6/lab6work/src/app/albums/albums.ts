import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../models/album';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
  standalone: true
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = true;
  error = '';
  deletingIds = new Set<number>();

  constructor(
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(){
    this.loading = true;
    this.error = '';
    this.albumService.getAlbums().subscribe({
      next: (data) => {
        this.albums = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to load albums. Please try again later.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  deleteAlbum(id: number){
    this.deletingIds.add(id);
    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        this.albums = this.albums.filter(a => a.id !== id);
        this.deletingIds.delete(id);
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = `Failed to delete album #${id}.`;
        this.deletingIds.delete(id);
        this.cdr.detectChanges();
      }
    });
  }
}
