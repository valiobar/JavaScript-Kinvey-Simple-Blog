/**
 * Created by vb on 30.6.2016 г..
 */
class homeController{
    constructor(homeView,requester, baseUrl,appKey){
        this._homeView = homeView;
        this._requester = requester;
        this._appKey=appKey;
        this._baseServiseUrl =baseUrl+'/appdata/'+appKey+'/posts' ;//TODO
    }


    showGuestPage(){
let _that=this;

        let recentPosts =[];
        this._requester.get(this._baseServiseUrl,function successCallBack (responce) {
showPopup('success','You Get the data' );
            let id =1;
            responce.sort(function (e1,e2) {
                let d1=new Date(e1._kmd.ect);
                let d2=new Date(e2._kmd.ect);
                return d2-d1;
            });
            for(let i =0;i<Math.min(5,responce.length);i++){
               responce[i].postId=id;
                recentPosts.push(responce[i]);   
                id++;
}
            _that._homeView.showGuestPage(responce,recentPosts);

        },function errorCallBack(responce) {
            showPopup("error","Error")

        })
        this._homeView.showGuestPage();
    }
    showUserPage(){
        let _that=this;

        let recentPosts =[];
        this._requester.get(this._baseServiseUrl,function successCallBack (responce) {
            showPopup('success','You Get the data' );
            let id =1;
            responce.sort(function (e1,e2) {
                let d1=new Date(e1._kmd.ect);
                let d2=new Date(e2._kmd.ect);
                return d2-d1;
            });
            for(let i =0;i<Math.min(5,responce.length);i++){
                responce[i].postId=id;
                recentPosts.push(responce[i]);
                id++;
            }
            _that._homeView.showUserPage(responce,recentPosts);

        },function errorCallBack(responce) {
            showPopup("error","Error")

        })
        this._homeView.showUserPage();
    }
}