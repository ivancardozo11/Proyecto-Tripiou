import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {

  constructor(private angularFireDatabase: AngularFireDatabase ) { }

  createConversation(conversation){
    return this.angularFireDatabase.object('conversations/' + conversation.uid + '/' + conversation.timestamp).set(conversation)
  }
  getConversation(uid){
    return this.angularFireDatabase.list('conversations/' + uid);
  }

  editConversation(conversation){
    return this.angularFireDatabase.object('conversations/' + conversation.uid + '/' + conversation.timestamp).set(conversation)
  }
  // Servicio que permite poder enviar imagenes
  setImagen(conversation,imagen)
  {
      return this.angularFireDatabase.object('conversation/'+conversation.uid+'/'+conversation.timestamp+'/url').set(imagen);
  }
  // /  Servicio que permite poder enviar imagenes

}
