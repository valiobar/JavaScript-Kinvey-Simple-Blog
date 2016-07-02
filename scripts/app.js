(function () {

    // Create your own kinvey application

    let baseUrl = "https://baas.kinvey.com";
    let appKey = "kid_rJEU06ML"; // Place your appKey from Kinvey here...
    let appSecret = "9257806a9e174bde8d173cb3b78e931c"; // Place your appSecret from Kinvey here...
    let _guestCredentials = "c7761b0f-6d3d-4377-9f3e-98ca99151966.3Yp4qhY4uQYoOYm/5y9YJCKkWwZGi4nJ5BHMSVNo6iU="; // Create a guest user using PostMan/RESTClient/Fiddler and place his authtoken here...

    //Create AuthorizationService and Requester
    let authService = new AuthorizationService(baseUrl,appKey,appSecret,_guestCredentials)
   let requester = new Requester(authService);
    authService.initAuthorizationType("Kinvey");
    let selector = ".wrapper";
    let mainContentSelector = ".main-content";

    // Create HomeView, homeController, UserView, userController, PostView and postController
    let home = new homeView(mainContentSelector,selector);
    let homeCtrl = new homeController(home,requester,baseUrl,appKey);
    let post = new postView(mainContentSelector,selector);
    let postCtrl = new postController(post,requester,baseUrl,appKey);
    let user = new userView(mainContentSelector,selector);
    let userCtrl = new userController(user,requester,baseUrl,appKey);


    
    initEventServices();

    onRoute("#/", function () {
       if(authService.isLoggedIn()){
           console.log("logna se ")
           homeCtrl.showUserPage();
       }else{
           homeCtrl.showGuestPage();
       }

    });

    onRoute("#/post-:id", function () {
        // Create a redirect to one of the recent posts...
let top = $('post-'+this.params['id']).position().top;
        $(window).scrollTop(top);
    });

    onRoute("#/login", function () {
        // Show the login page...
        userCtrl.showLoginPage(authService.isLoggedIn());
    });

    onRoute("#/register", function () {
        // Show the register page...
        userCtrl.showRegisterPage(authService.isLoggedIn());
    });

    onRoute("#/logout", function () {
        // Logout the current user...
        userCtrl.logout();
    });

    onRoute('#/posts/create', function () {
        // Show the new post page...
       
        let fullName = sessionStorage.getItem("fullName");
console.log(sessionStorage.getItem("fullName"));
        postCtrl.showCreatePostPage(fullName,authService.isLoggedIn());
    });

    bindEventHandler('login', function (ev, data) {
        // Login the user...
        userCtrl.login(data);
    });

    bindEventHandler('register', function (ev, data) {
        // Register a new user...
        userCtrl.register(data);
    });

    bindEventHandler('createPost', function (ev, data) {
        // Create a new post...
        postCtrl.createNewPost(data);
    });

    run('#/');
})();
