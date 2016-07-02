/**
 * Created by vb on 30.6.2016 г..
 */
class  userController{
    constructor(userView,requester,baseUrl, appKey){
        this._userView =userView;
        this._requester = requester;
        this._baseServiseUrl =baseUrl+"/user/"+appKey+"/";//TODO
        this._appKey=appKey;
    }
    showLoginPage(isLogin){
        this._userView.showLoginPage(isLogin);
    }
    showRegisterPage(isLogin){
        this._userView.showRegisterPage(isLogin);
    }
    logout(){
        sessionStorage.clear();
        redirectUrl("#/")
        //TODO
    }
    login(data){
        this._requester.post(this._baseServiseUrl+"login",data
            ,function successCallBack(response){
                sessionStorage.setItem('username',response.username);
                sessionStorage.setItem('_authToken',response._kmd.authtoken);
                sessionStorage.setItem('fullName',response.fullName);;
                showPopup('success',"Login successful ")
                redirectUrl("#/")
            },
            function errorCallBack(responce) {
                showPopup("error","Login incorrect")
            } );
    }
    register(data){
       if(data.username.length<5){
            showPopup("error","User name must be  at least 5 symbols")
           return;
       }
        if(data.fullName.length<6 ){
            showPopup("error","Full name must be  at least 6 symbols")
            return;
        }
        if(data.password!=data.confirmPassword ){
            showPopup("error","Password does not match")
            return;
        }
         delete data['confirmPassword'];
        this._requester.post(this._baseServiseUrl,data
            ,function successCallBack(response){
                showPopup('success',"Register successful ")
                redirectUrl("#/login")
            },
               function errorCallBack(responce) {
                showPopup("error","Register incorrect")
               } );
    }
}