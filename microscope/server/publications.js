Meteor.publish('posts', function() {
   return Posts.find(); //모든 posts를 참조하는 커서
});