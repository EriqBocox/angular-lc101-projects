import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Subnautica Aquatic Species';
  image1 = 'https://vignette.wikia.nocookie.net/subnautica/images/e/eb/Reaper_Leviathan_Fauna.png/revision/latest?cb=20191026175551';
  image2 = 'https://vignette.wikia.nocookie.net/subnautica/images/b/b0/Crabsquid_Fauna.png/revision/latest?cb=20180207022308';
  image3 = 'https://img.pngio.com/epic-games-account-with-subnautica-game-worth-2499-subnautica-logo-png-1000_840.png';

  constructor() { }

  ngOnInit() {
  }

}