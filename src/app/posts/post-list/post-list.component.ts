import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostModel } from '../post-model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {



  // posts = [
  //   {title: 'First post', content: 'This is the First comment.', panelOpenState: 'close'},
  //   {title: 'Second post', content: 'This is the Second comment.', panelOpenState: 'close'},
  //   {title: 'Third post', content: 'This is the Third comment.', panelOpenState: 'close'},
  //   {title: 'Fourth post', content: 'This is the Fourt comment.', panelOpenState: 'close'},
  //   {title: 'Fifth post', content: 'This is the Fifth comment.', panelOpenState: 'close'}
  // ];

  private posts: PostModel[] = [];
  private postsSub: Subscription;

  constructor(public postService: PostService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postsSub = this.postService.getPostsUpdateListener()
      .subscribe((posts: PostModel[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
