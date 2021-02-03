let user = {
    blog: [{
            title: "hello world blog",
            likes: 30
        },
        {
            title: "second blog hello second blog",
            likes: 50
        },
        {
            title: "this is my third blog",
            ltitle: 100

        },
    ],
    logBlog() {
        console.log(`there are a total of ${this.blog.length} recent blogs`);
        this.blog.forEach(function (blog) {
            console.log(`title of blog: "${blog.title}" and it has ${blog.likes} likes.`);
        })

    }
}

user.logBlog();