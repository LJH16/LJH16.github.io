const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: false,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'wocheng',
            artist: 'artist1',
            url: 'http://www.ytmp3.cn/down/59121.mp3',
            cover: 'cover1.jpg',
        },
        {
            name: 'yekongzhongzhuiliangdexin',
            artist: 'artist2',
            url: 'http://www.ytmp3.cn/down/34031.mp3',
            cover: 'cover2.jpg',
        }
    ]
});
  
       