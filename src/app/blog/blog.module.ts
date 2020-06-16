import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttoClientModule } from '@angular/common/http';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ArticleComponent } from './article/article.component';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { PostBlockComponent } from './post-block/post-block.component';
import { PaginationComponent } from './pagination/pagination.component';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

