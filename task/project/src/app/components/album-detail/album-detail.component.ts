import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  imports: [FormsModule, RouterLink],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent implements OnInit {
  album: Album | null = null;
  editedTitle = '';
  loading = true;
  saving = false;
  error = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.error = '';
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load album details.';
        this.loading = false;
      }
    });
  }

  save(): void {
    if (!this.album) {
      return;
    }

    this.saving = true;
    this.error = '';

    const updatedAlbum: Album = {
      ...this.album,
      title: this.editedTitle.trim() || this.album.title
    };

    this.albumService.updateAlbum(updatedAlbum).subscribe({
      next: (album) => {
        this.album = album;
        this.editedTitle = album.title;
        this.saving = false;
      },
      error: () => {
        this.error = 'Failed to update album.';
        this.saving = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}
