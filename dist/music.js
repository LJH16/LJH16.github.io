const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'name1',
            artist: 'artist1',
            url: ' https://m10.music.126.net/20190607172533/803ad005327240f2e1ec1bdf489c2c55/ymusic/525d/540b/510f/e7403c0f89ca574eea7dfea2ac7601f5.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: 'name2',
            artist: 'http://www.ytmp3.cn/down/34031.mp3',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});
  
       