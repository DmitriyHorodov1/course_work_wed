import { Component, OnInit } from '@angular/core';
import {AngularFirestore,  } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  title = '';
  content = [];
  posts: Observable<any[]> | undefined;
  idForEdit = localStorage.getItem('postId');
  postTile = localStorage.getItem('postTitle');
  postContent = localStorage.getItem('postContent')
  


  constructor(private db:AngularFirestore   ) {
    this.posts = db.collection('posts').snapshotChanges();
   }

  ngOnInit(): void {
   
   
  }
   async editPost(){

    var id :any  = this.idForEdit;

    
      


    this.db.collection('posts').doc(id).update({
      title : this.postTile,
      content:this.postContent,
      
      
    });
   }

   
  }



