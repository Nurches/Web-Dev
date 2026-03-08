import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { Photo } from '../models/photo';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-album-photos',
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrl: './album-photos.css',
  standalone: true
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[] = [];
  albumId = 0;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(){
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.error = '';

    this.albumService.getAlbumPhotos(this.albumId).subscribe({
      next: (data) => {
        this.photos = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to load photos.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
}
