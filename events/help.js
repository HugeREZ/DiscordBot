kes.on("message",(message)=>{
    if(!message.content.startsWith(config.pref)) return;
  
    if((message.content)== config.pref+"help")
    {
      const attachment = new Attachment('https://pp.userapi.com/c851120/v851120505/39ccd/roAwnweg_1E.jpg');
    
      message.reply('I have this command now: ' 
                      + '\n //Darova (just hello)'
                      + '\n //hugerez (avtor link)'
                      + '\n //ping (u real ping)'
                      + '\n //server (can show how much people sitting here)'
                      ); 
      message.channel.send(attachment);                               
    }
  });