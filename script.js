const channelId = "YOUR_CHANNEL_ID";

function updateSubs(){

fetch(`https://api.socialcounts.org/youtube-live-subscriber-count/${channelId}`)

.then(res => res.json())

.then(data => {

document.getElementById("subs").innerText =
data.est_sub + " subs";

})

.catch(()=>{

document.getElementById("subs").innerText = "";

});

}

updateSubs();

setInterval(updateSubs,30000);