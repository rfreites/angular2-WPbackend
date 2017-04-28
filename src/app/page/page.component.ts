import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Post } from '../post';
import { AcfSlider } from '../acf-slider';
import { PostService } from '../post.service';
import { Media } from '../media';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  providers: [PostService]
})
export class PageComponent implements OnInit {
  
  slug: string;
  postType: string = 'industrias';
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.postService.getPostDetails(this.postType, params['link']))
      .subscribe(post => {
        this.post = post;
        console.log(this.post);
      });
  }

  goBack(): void{
    this.location.back();
  }

}
