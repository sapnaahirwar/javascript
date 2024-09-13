// let heading = "<h1>Hello</h1>"
// let paragraph = " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur vitae sint consectetur corrupti voluptatibus laborum laudantium ad deserunt accusantium fugit necessitatibus tempore aperiam sed, explicabo quam delectus earum, dicta voluptatem."

// let design1 = `<section>
// <div></div>
// <div></div>
// </section>`
function output(){
    let  imgurl = document.querySelector('.userimageurl').value;
    let username = document.querySelector('.username').value;
    let userprofession = document.querySelector('.userprofession').value;
    let useremail = document.querySelector('.useremail').value;
    let usermobile = document.querySelector('.usermobile').value;
    let useraddress = document.querySelector('.useraddress').value;


    let card = `<section class="carddesign">
    <article>
        <div><img src="${imgurl}" alt=""></div>
        <div>
            <h4>${username}</h4>
            <h5>${userprofession}</h5>
            <h6>${useremail}</h6>
            <h6>${usermobile}</h6>
        </div>
    </article>
    <article>
        <div>h.no.104 near icici bank shahpura</div>
    </article>
   </section>`

let selectshowcard = document.querySelector('.showcard')
selectshowcard.innerHTML = card;
return false;
}
