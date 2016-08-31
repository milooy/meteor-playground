var postsData = [
    {
        title: '망원경 소개',
        url: 'http://kr.discovermeteor.com/chapters/templates/'
    },{
        title: '망원경은 언제 부셔지나',
        url: 'https://github.com/milooy/meteor-playground'
    },{
        title: '망원경을 먹어보자',
        url: 'http://kr.discovermeteor.com/chapters/templates/'
    }
];
Template.postsList.helpers({
    posts: postsData
})