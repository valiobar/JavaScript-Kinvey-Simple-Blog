class userView{
    constructor(mainContentSelector, wrapperSelector){
        this._mainContentSelector=mainContentSelector;
        this._wrapperSelector=wrapperSelector;
    }
    showLoginPage(isLogin){
        let _that=this;
    let reqTemplate = isLogin ? 'templates/form-user.html':'templates/form-guest.html';
        $.get(reqTemplate,function (template) {
let renderedTemplate= Mustache.render(template,null);
            $(_that._wrapperSelector).html(renderedTemplate);
            $.get('templates/login.html',function (template) {
                let renderedLogin = Mustache.render(template,null);
                $(_that._mainContentSelector).html(renderedLogin);
                $("#login-request-button").on('click',function () {
                    let username = $("#username").val();
                    let password = $("#password").val();
                    let data = {
                        username:username,
                        password:password
                    };
                    triggerEvent('login',data) ;

                })
            });
        });
    }
    showRegisterPage(isLogin){
        let _that=this;
        let reqTemplate = isLogin ? 'templates/form-user.html':'templates/form-guest.html';
        $.get(reqTemplate,function (template) {
            let renderedTemplate= Mustache.render(template,null);
            $(_that._wrapperSelector).html(renderedTemplate);
            $.get('templates/register.html',function (template) {
                let renderedLogin = Mustache.render(template,null);
                $(_that._mainContentSelector).html(renderedLogin);
                $("#register-request-button").on('click',function () {
                    let username = $("#username").val();
                    let fullName = $("#full-name").val();
                    let password = $("#password").val();
                    let confPassword = $("#pass-confirm").val();
                    let data = {
                        username:username,
                        fullName:fullName,
                        confirmPassword:confPassword,
                        password:password
                    };
                    triggerEvent('register',data) ;

                })
            });
        });
    }
    showCreatePostPage(){
        
    }
}
