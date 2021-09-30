let state = {
    profilePage: {
        posts: [

            {id:1, message: "Hello", likesCount: 33 },
            {id:2, message: "I am css", likesCount: 1241 }
        ],
    },
    messagesPage: {
        dialogsData: [
            { name: "Kostya", id: 1 },
            { name: "Kostik", id: 2 },
            { name: "Anton", id: 3 },
            { name: "Oleg", id: 4 },
            { name: "Nika", id: 5 },
        ],
        messagesData: [
            { message: "Ladno", id: 1 },
            { message: "Hello", id: 2 },
            { message: "What's up?", id: 3 },
            { message: "What's up?", id: 4 },
            { message: "What's up?", id: 5 },
        ]
    },
    newsPage: {

    },
    musicPage: {

    },
    settingsPage: {

    },
    sidebar: {
        
    }

}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
}

export default state;