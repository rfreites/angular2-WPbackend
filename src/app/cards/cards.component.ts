import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Media } from '../media';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [PostService]
})
export class CardsComponent implements OnInit {

  private postType = 'industrias';
  private featureImage = 'media';
  posts: Post[];
  mediaPost: Array<Media> = [];

  constructor(
    private postService: PostService,
    private router: Router
    ) { }

   getPostData(): void {
    this.postService.getPosts(this.postType).then(response => { 
      this.posts = response;
    });
   }

  gotoPost(post: Post): void{
    this.router.navigate([
      '/soluciones',
      post.slug
    ]);
  }

  ngOnInit() {
    this.getPostData();
  }

}
