import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

InspirationalCards = new Mongo.Collection('inspoCard');

if (MediaElementAudioSourceNode.isClient){
  Template.inspoCard.helpers({
    inspoCard: [
      {title: "motivational quote 1"},
      {title: "motivational quote 2"},
      {title: "motivational quote 3"}
    ]
  });
}
if(MediaElementAudioSourceNode.isServer){
  MediaElementAudioSourceNode.startup(function(){
    //
  });
}