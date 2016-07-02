class postView{
    constructor(mainContentSelector, wrapperSelector){
        this._mainContentSelector=mainContentSelector;
        this._wrapperSelector=wrapperSelector;
    }
    showCreatePostPage(fullName,isLogin){
      let _that=this;
        let reqTemplate = isLogin ? 'templates/form-user.html':'templates/form-guest.html';
        $.get(reqTemplate,function (template) {
            let renderedTemplate= Mustache.render(template,null);
            $(_that._wrapperSelector).html(renderedTemplate);
            $.get('templates/create-post.html',function (template) {
                let renderedCreatePost = Mustache.render(template,null);
                $(_that._mainContentSelector).html(renderedCreatePost);
              console.log(fullName);
                $('#author').val(fullName);
                $("#create-new-post-request-button").on('click',function () {
                    let title = $("#title").val();
                    let content = $("#content").val();
                   let date  = moment().format('MMMM Do YYYY');
                    let author = fullName;
                    let data = {
                        title:title,
                        content:content,
                        date:date,
                        author:author
                    };
                    triggerEvent('createPost',data) ;

                })
            });
        });
    }
}
