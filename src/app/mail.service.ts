import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
messages = [
  { id:0,text:'heeey Man Marwan how are you '},
  { id:1,text:'fine and ,you'},
  { id:2,text:'thanks , things getting well '}];
update(id, text)
{
  this.messages=this.messages.map((m)=>
  m.id===id
  ?{id, text}
  :m
  )
}

  constructor() { }
}

