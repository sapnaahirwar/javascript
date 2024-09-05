function changeimg(a){
    console.log(a)
    let selectimg = document.querySelector('.largeimg');
    if(a == 1){
        selectimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXY8UsBos3JCN_NwKInoviSr978dcY9q0Tg&s";
    }
    else if (a == 2){
        selectimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI6JPRunS3CpvVKggiR9PjqG3SS-qpqANw_g&s";
    }
    else if(a == 3){
        selectimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s";
    }
    else if(a == 4){
        selectimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO8AAxAr9ZNr9JCwn2QZ35rSWWuiayhh0ayQ&s";
    }
    else if(a == 5){
        selectimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnMnuVNW-HaRlER4QEBE_h3FblaNKuuyq3Q&s";
    }
    else if(a == 6){
        selectimg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGwVd07rcBUxKVqf17F_Li5fy-a_zni7JuEQ&s";
    }
}