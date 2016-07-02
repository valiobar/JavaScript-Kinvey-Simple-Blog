class homeView{
    constructor(mainContentSelector, wrapperSelector){
        this._mainContentSelector=mainContentSelector;
        this._wrapperSelector=wrapperSelector;
    }

    showGuestPage(maindata,sidebarData){
        let _that = this;
       $.get('templates/welcome-guest.html',
           function (template) {
                let renderedTemplate = Mustache.render(template);
               $(_that._wrapperSelector).html(renderedTemplate);
       $.get('templates/posts.html',
           function (template) {
               let blogPosts = {
                   blogPosts: maindata
               };
               let renderedPosts= Mustache.render(template,blogPosts);
               $('.articles').html(renderedPosts)
               });
               $.get('templates/recent-posts.html',
                   function (template) {
                       let recentPosts = {
                           recentPosts: sidebarData
                       };
                       console.log(recentPosts);
                       let renderedRecentPosts= Mustache.render(template,recentPosts);
                       $(".recent-posts").html(renderedRecentPosts)
                   });
       })
    }
    showUserPage(maindata,sidebarData){
        let _that = this;
        $.get('templates/welcome-user.html',
            function (template) {
                let renderedTemplate = Mustache.render(template);
                $(_that._wrapperSelector).html(renderedTemplate);
                $.get('templates/posts.html',
                    function (template) {
                        let blogPosts = {
                            blogPosts: maindata
                        };
                        let renderedPosts= Mustache.render(template,blogPosts);
                        $('.articles').html(renderedPosts)
                    });
                $.get('templates/recent-posts.html',
                    function (template) {
                        let recentPosts = {
                            recentPosts: sidebarData
                        };
                        console.log(recentPosts);
                        let renderedRecentPosts= Mustache.render(template,recentPosts);
                        $(".recent-posts").html(renderedRecentPosts);
                        
                    });
            })
    }
}
