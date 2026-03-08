import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { Album } from '../models/album';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
  standalone: true
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  loading = true;
  error = '';
  saving = false;
  saveMessage = '';
  albumId = 0;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(){
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.loading = true;
    this.error = '';

    this.albumService.getAlbum(this.albumId).subscribe({
      next: (data) => {
        this.album = data;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to load album details.';
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }

  save(){
    if (!this.album) {
      return;
    }

    this.saving = true;
    this.saveMessage = '';
    this.albumService.updateAlbum(this.album).subscribe({
      next: (updated) => {
        this.album = updated;
        this.saveMessage = 'Album title saved.';
        this.saving = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = 'Failed to save album.';
        this.saving = false;
        this.cdr.detectChanges();
      }
    });
  }
}
