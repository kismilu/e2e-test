module.exports = {
    url: 'https://outlook.live.com/owa/',
    username: 'tesztlesz@outlook.hu',
    pwd: 'leszteszt12345',
    email: 'kismilu@gmail.com',
    subjecthossz: 5,
    makeid: function(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
        }  
        return result;
    }

 }