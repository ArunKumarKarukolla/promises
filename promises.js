const posts=[
    { title:'post one',body:'this is post one',createdAt:new date().gettime()},
    {title:'post two',body:'this is post two',createdAt:new date().gettime()}
];
 function getpost(){
    setTimeout(() =>{
        let output='';
        posts.forEach(post,index){
            output+=`<li> ${post.title} - last updated ${(new date().gettime()/1000-post.createdAt)} seconds ago</li>`
        
        };
        document.body.innerHTML=output;
    },1000);
 }
 

 function createpost(post){
    setTimeout(() =>{
        posts.push(...post,createdAt:new date().gettime());
    },20000);
 }

 function deletepost(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(post.length>0){
                const lastelement=posts.pop()
                resolve(lastelement);
            }else{
                reject('Array is empty now');
            }
        },1000);
    })
 }

 createpost({title:'post three',body:'this is postthree'})
 .then(()=>{
    getpost()
    deletepost().then(deletedElement)=>
    {
        console.log(deletedElement)
        .catch((err)=>{
            console.log('inside catch block',err)
            getpost()
            deletepost().then(deletedElement)=>{
                console.log(deletedElement)
                .catch((err)=>{
                    console.log('inside catch block',err)
                    getpost()
                    deletepost().then(deletedElement)=>{
                        console,log(deletedElement)
                        .catch((err)=>{
                            console.log('inside catch block',err)
                        })
                    }
                })
            }
        })
    }
 })


 //promise all
 const promise1=promise.resolve('heloo world')
 const promise2=promise.resolve('welcome to promises')
 const promise3=promise.resolve('known about promises')
 const promise4=new promise((resolve,reject)=> setTimeout(resolve,2000,'good bye'));
 promise.all([promise1,promise2,promise3,promise4]).then(values =>console.log(values));

 updatelastactivitytime={
    return new promise((resolve,reject)=>{
        setTimeout(()=>){
            resolve()
        }
    },1000);
 }
 promise.all([createpost,updatelastactivitytime]).then(values => console.log(values));
 

