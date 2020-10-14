import {Component, OnInit} from '@angular/core';
import {PostServiceService} from './post-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  postList: any;

  constructor(private postService: PostServiceService) {
  }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
        this.postList = posts;
      }
    );
  }


}
