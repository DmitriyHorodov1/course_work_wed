import { Component, OnInit, ElementRef } from '@angular/core';
import {AngularFirestore,  } from '@angular/fire/compat/firestore';
import {v4 as uuidv4} from 'uuid';
import { Observable } from 'rxjs';


import { AddPostService } from '../add-post';
import {AuthService} from "../shared/services/auth-service";




@Component({
  selector: 'app-technique',
  templateUrl: './technique.component.html',
  styleUrls: ['./technique.component.css'],

})
export class TechniqueComponent implements OnInit  {




  title = '';
  content = [];
  ErrorInput: String ="";
  posts: Observable<any[]> | undefined;
  userOwner="";






  bodyText: string ="" ;

  constructor(private modalService: AddPostService,public authService: AuthService, private db:AngularFirestore, public myElement: ElementRef ) {
    this.userOwner = authService.userData.email;
    this.posts = db.collection('posts_tech').valueChanges();
    this.myElement.nativeElement.ownerDocument.body.style.backgroundColor='rgba(70, 130, 180, 0.3)';
  }







  ngOnInit() {
    this.bodyText = 'This text can be updated in modal 1';



  }


  scrollToTop(){
    window.scroll(0,0);
  }



  openModal(id: string) {
    this.modalService.open(id);
    this.title=""
    this.content=[]
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  async addPost(){

    if(this.title !='' && this.content !=[]){
      this.ErrorInput=""
      var id : string = uuidv4();


      this.db.collection('posts_tech').doc(id).set({
        title : this.title,
        content:this.content,
        userOwner:this.userOwner,

        Id :  id
      });
    }
    else{
      console.log("Error Input")
      this.ErrorInput = "Please Input title and content"

    }
  }

  async deletePost(pID: any){

    this.db.collection('posts_tech').doc(pID).delete();
  }

  async getIdandpushtoedit(pID:any , postTitle: any, postContent:any ){
    localStorage.setItem('postId', pID);
    localStorage.setItem('postTitle', postTitle);
    localStorage.setItem('postContent', postContent );
  }


}
