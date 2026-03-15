// Example: change subscriber count

let subs = 1200000;

function formatSubs(number){

    if(number >= 1000000){
        return (number/1000000).toFixed(1) + "M Subscribers";
    }

    if(number >= 1000){
        return (number/1000).toFixed(1) + "K Subscribers";
    }

    return number + " Subscribers";
}

document.getElementById("yt-subs").innerText = formatSubs(subs);