const ap = new APlayer({
    container: document.getElementById('aplayer'),
    audio: [{
      mutex: true, //���⣬��ֹ���������ͬʱ���ţ���ǰ����������ʱ��ͣ����������
        name: 'ҹ������������',
        artist: '���ܼƻ�',
        url: 'http://www.ytmp3.cn/down/34031.mp3',
        cover: 'cover.jpg'
    }]
});