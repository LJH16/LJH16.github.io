const ap = new APlayer({
     container: document.getElementById('aplayer'),
     mutex: true, //互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
      preload: 'auto', //预加载，可选值: 'none', 'metadata', 'auto'
    audio: [{
        name: '夜空中最亮的星',
        artist: '逃跑计划',
        url: 'http://www.ytmp3.cn/down/34031.mp3',
        cover: 'cover.jpg'
    }，
     {
            name: 'name2', //如果只有一首歌，删掉这一块，如有更多歌曲按此格式逐渐往下添加
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
            lrc: 'lrc2.lrc',
            theme: '#46718b'
        }
});