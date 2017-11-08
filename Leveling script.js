on ('chat:message', function(msg){
                      
	if(msg.type == "api" && msg.content.indexOf("!lvl") !== -1 )
                      
	{
                          
		sendChat(msg.who, "[Level Fou Xi-Jo](!#0Fou-Xi-Jo)");
                          
		sendChat(msg.who, "[Level Hikari](!#0Hikari)");
                          
		sendChat(msg.who, "[Level Javu](!#0Javu)");
                          
		sendChat(msg.who, "[Level Mauhak](!#0Mauhak)");
                          
		sendChat(msg.who, "[Level Meiyo](!#0Meiyo)");
                          
		sendChat(msg.who, "[Level Shadow-Paw](!#0Shadow-Paw)");
                      
	}
                      
                  
}
);