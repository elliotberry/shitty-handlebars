import sb from './index.js'
let template = `    
       <div class="container">
            <div class="header-text">
                <div class="topic">{{topic}}</div>
            <h1>{{title}}</h1>
           <h2>{{subtitle}}</h2>
           
           <div class="author-blurb" >{{#if authorImageLocalPath}}<img src="../{{authorImageLocalPath}}">{{/if}}<div class="author-name"><span class="by">By  </span><span class="author-name">{{authorName}}</span><span class="author-title">{{authorTitle}}</span></div></div>
        </div>
        </div>`

let data = {
    topic: 'Topic',
    title: 'Title',
    subtitle: 'Subtitle',
    // authorImageLocalPath: "images/author.jpg",
    authorName: 'Author Name',
    authorTitle: 'Author Title',
}

let output = sb(template, data)
console.log(output)
