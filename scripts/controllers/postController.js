/**
 * Created by vb on 30.6.2016 г..
 */
class postController{
    constructor(postView,requester,baseUrl, appKey){
        this._postView = postView;
        this._requester = requester;
        this._baseServiseUrl =baseUrl+'/appdata/'+appKey+'/posts';//TODO
        this._appKey=appKey;
    }
    showCreatePostPage(fullName,isLogin){
        this._postView.showCreatePostPage(fullName,isLogin);
    }
    createNewPost(data){
        this._requester.post(this._baseServiseUrl,data
            ,function successCallBack(response){

                showPopup('success',"You  successful create new  post")
                redirectUrl("#/")
            },
            function errorCallBack(responce) {
                showPopup("error","Post incorrect")
            } );
    }
}