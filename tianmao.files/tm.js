window.onload=function(){
	var banner_btn=document.getElementsByClassName("btn")
      var banner_images=document.getElementsByClassName("banner-item")
      var banner_box=document.getElementsByClassName("banner-box")[0]
      var banner_color=["#E8E8E8","#E8E8E8","#FB4E83","#009AFE","#E8E8E8"];
      for (var i = 0; i < banner_btn.length; i++) {
            banner_btn[i].index=i;
            banner_btn[i].onmouseover=function(){
                  num=this.index;
                  for (var i = 0; i < banner_btn.length; i++) {
                        banner_images[i].style.zIndex=1;
                        banner_btn[i].style.backgroundColor="#A2A2A2";
                  };
                  banner_box.style.backgroundColor=banner_color[this.index];
                  banner_images[this.index].style.zIndex=2;
                  this.style.backgroundColor="#fff";
                  
            }
      };
      // 动画
      var lunbo=setInterval(move,3000)
      var num=0;
      function move(){
            num++;
            if (num==5) {
                  num=0;
            }
            for (var i = 0; i < banner_btn.length; i++) {
                  banner_images[i].style.zIndex=1;
                  banner_btn[i].style.backgroundColor="#A2A2A2"
            };
            banner_box.style.backgroundColor=banner_color[num];
            banner_images[num].style.zIndex=2;
           banner_btn[num].style.backgroundColor="#fff";
      }
      banner_box.onmouseover=function(){
            clearInterval(lunbo)
      }
      banner_box.onmouseout=function(){
            lunbo=setInterval(move,3000)
      }


//zhezhao

var items=document.getElementsByClassName("c-1")
            var zhaos=document.getElementsByClassName("zhao");
            for (var i=0;i<items.length;i++) {
                  items[i].index=i;
                  items[i].onmouseover=function(){
                  zhaos[this.index].style.opacity="0.8";
                  }
                  items[i].onmouseout=function(){
                  zhaos[this.index].style.opacity="0";
                }
            }

//放大
    var nr_imgs=$(".nr-3d ");
    var nr_box=$(".nr-3a");
    for (var i = 0; i < nr_box.length; i++) {
      nr_box[i].index=i;
      nr_box[i].onmouseover=function(){
        animate(nr_imgs[this.index],{height:150,width:150,marginLeft:41,marginTop:2},200)
      }
      nr_box[i].onmouseout=function(){
         animate(nr_imgs[this.index],{height:135,width:135,marginLeft:48,marginTop:10},200)
      }
    }
//ce
            var cae=document.documentElement;
            var topbar=$(".topbar")[0];
            var twos=$(".twos")[0];
            var cea10=$(".cea10")[0];

            // var zs=$(".zs");
            // obj=document.body.scrollTop==0?document.documentElement:document.body;
            // animate(cae,{scrollTop:0})
            
            var flag=true;
            var flag2=true;
            on(window,"scroll",function(){
                  var st=scrollobj.scrollTop;
                  if (cae.scrollTop>350) {
                       if (flag) {
                       flag=false;flag2=true;
                        twos.style.display="block"
                        animate(topbar,{height:50},300)
                        animate(twos,{width:36,height:370},300)
                        animate(cea10,{opacity:1},200)
                      }
                  }else{
                    if (flag2) {
                        flag=true;flag2=false;
                         twos.style.display="none"
                        animate(topbar,{height:0},370)
                        animate(twos,{width:0,height:0},300)
                         animate(cea10,{opacity:0},100)
                  }
                } 
            })
            var ce=$(".ce")
            var qinzibox=$(".qinzibox");
            document.documentElement.scrollTop=1;
        if (document.documentElement.scrollTop==1) {
          var scrollobj=document.documentElement;
        }else{
          var scrollobj=document.body;
        }
            for (var i = 0; i < ce.length; i++) {
                  ce[i].index=i;
                  ce[i].onclick=function(){
                        var to=qinzibox[this.index].offsetTop;
                        animate(scrollobj,{scrollTop:to})
                  }
            };
            var ot=[]
        var colors=["#F7A945","#19C8A9","#F15453","#64C333","#0AA6E8","#EA5F8D","#EA5F8D","#F7A945"]
       for (var i = 0; i < qinzibox.length; i++) {
         ot.push(qinzibox[i].offsetTop)
        }
        
        window.onscroll=function(){
          var st=scrollobj.scrollTop;
          for (var j = 0; j < ce.length; j++) {
            ce[j].style.backgroundColor=""
            if (st+250>qinzibox[j].offsetTop) {
              for (var i = 0; i < ce.length; i++) {
                ce[i].style.backgroundColor="";
              };
              ce[j].style.backgroundColor=colors[j];
            };

          };
        }

//top回到首页
      var obj=document.documentElement;
      var fanhui=$(".fanhui")[0];
      fanhui.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
            animate(obj,{scrollTop:0},1000)
      }

       var obj=document.documentElement;
      var fanhui=$(".fanhui")[1];
      fanhui.onclick=function(){
          obj=document.body.scrollTop==0?document.documentElement:document.body;
            animate(obj,{scrollTop:0},1000)
      }
        // window.onscroll=function(){
        //    obj=document.body.scrollTop==0?document.documentElement:document.body;
        //     if (obj.scrollTop>550) {
        //                 animate(fanhui,{opacity:1},200)
        //           }
        //           if (obj.scrollTop<=550) {
        //                 animate(fanhui,{opacity:0},200)
        //           }
        // }

//右侧
    var cea=$(".cea");
    var names=$(".wodetequan");
    var t;
    for (var i = 0; i < cea.length; i++) {
      cea[i].index=i;
      hover(cea[i],function(){
        var that=this;
        clearInterval(t);
        t=setInterval(function(){
          names[that.index].style.display="block";
          animate(names[that.index],{left:-90,opacity:1},200)},200)},function(){
          clearInterval(t);
          animate(names[this.index],{left:-120,opacity:0.8},200,function(){
            this.style.display="none";
        })
      })
  }

//我的淘宝下拉
      var lists=$(".wodetaobao");
         var wdtb=$(".wdtb");
         for (var i = 0; i < wdtb.length; i++) {
          var lis=$("li",wdtb[i]);
          var height=lis.length*30;
          wdtb[i].height=height;
         };
         for (var i = 0; i < lists.length; i++) {
          lists[i].index=i;
          hover(lists[i],function(){
          wdtb[this.index].style.display="block";  
          animate(wdtb[this.index],{height:wdtb[this.index].height},100)
          },function(){
            wdtb[this.index].style.display="none";
            wdtb[this.index].style.height="0"
          })            
            
       };

       //
        var dinbu=$(".shouye-a");
         var xiala=$(".ycl");
         for (var i = 0; i < xiala.length; i++) {
          var ols=$("ol",xiala[i]);
          var width=ols.length*850;
          xiala[i].width=width;
         };
         for (var i = 0; i < dinbu.length; i++) {
          dinbu[i].index=i;
          hover(dinbu[i],function(){
          xiala[this.index].style.display="block";  
          animate(xiala[this.index],{width:xiala[this.index].width},100)
          },function(){
            xiala[this.index].style.display="none";
            xiala[this.index].style.width="0"
          })            
            
       }; 

       //我的手机二维码
       var shouji=$(".shouji")[0];
       var erweima=$(".erweima")[0];
       shouji.onmouseover=function(){
          erweima.style.display="block";
       }
       shouji.onmouseout=function(){
        erweima.style.display="none";
       }
       //商家下拉
       var shangjia=$(".shangjia")[0];
       var xldk=$(".xldk")[0];
       shangjia.onmouseover=function(){
          xldk.style.display="block";
       }
       shangjia.onmouseout=function(){
        xldk.style.display="none";
       }
       //网站下拉
       var wangzhan=$(".wangzhan")[0];
       var wzxl=$(".wzxl")[0];
       wangzhan.onmouseover=function(){
          wzxl.style.display="block";
       }
       wangzhan.onmouseout=function(){
        wzxl.style.display="none";
       }
       sys
       var ceass=$(".cea9")[0];
       var sys=$(".sys")[0];
       ceass.onmouseover=function(){
          sys.style.display="block";
       }
       ceass.onmouseout=function(){
        sys.style.display="none";
       }


  //按需加载
  var florss=$(".florss");
  var arr=[];
     for (var i = 0; i < florss.length; i++) {
      arr.push(florss[i].offsetTop)
     };
     // alert(arr) 给空数组添加每一组图片距离浏览器顶部的距离
    var doc=document.body;
     doc.scrollTop=1;
     if (doc.scrollTop!=1) {
      doc=document.documentElement;
     };
    var h=document.documentElement.clientHeight;
     on(window,"scroll",function(){
      var str=doc.scrollTop;
      // console.log(str)
      for (var i = 0; i < florss.length; i++) {
        if (str+h>arr[i]&&florss[i].getAttribute("flag")!="true") {
          var imgs=$("img",florss[i]);
          
                    for (var j = 0; j < imgs.length; j++) {
            imgs[j].src=imgs[j].getAttribute("asrc")
          };
          florss[i].setAttribute("flag",true)
        };
      };
     })
}
