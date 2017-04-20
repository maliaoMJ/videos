/**
 * Created by Administrator on 2017/4/20 0020.
 */
$(function(){
    //处理同时播放
    var videoElements=document.getElementsByTagName('video');
        for(var i=0;i<videoElements.length;i++){
             videoElements[i].onclick=function() {

                 if (this.paused === true) {
                     //全部暂停
                     for (var i = 0; i < videoElements.length; i++) {
                         videoElements[i].pause();
                     }
                     //全部暂停结束
                     //返回视频的地址
                     // var videoSrc=this.getElementsByTagName("source")[0].getAttribute('src');
                     this.play();
                 } else {
                     this.pause();
                 }


             }

        }
    //处理同时播放结束





});
