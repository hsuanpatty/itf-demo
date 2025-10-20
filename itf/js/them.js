// open

  $(function () {
    $(".parent .fa.fa-plus").remove();
    $(".parent .toggled").append("<i class='fa fa-plus'></i>");
    $('.parent .toggled').click(function (e) {
      e.preventDefault();
      if (!$(this).parent().hasClass('active')) {
        $('+ ul', $('a.list-group-item.main-item')).slideUp();
        $('a.list-group-item.main-item').removeClass('active');
      }
      $(this).parent().toggleClass('active');
      $('+ ul', $(this).parent()).slideToggle('slow');
      return false;
    });
  });



  //滑動到指定地方

  $(document).ready(function(){
  $(".nav-column ul li a").click(function(){
     //1.顯示元素位置
     //alert($(".session1").offset().top)
     //2.取得元素內容
     //alert(this.hash)
     //3.做描點連結
    
    //4.畫面滑動
    $("html, body").animate({
      'scrollTop':$(this.hash).offset().top
    },1000);
  
    
    //回首頁時，不要遮住圖
    $(".nav-column ul li a").eq(0).click(function(){
      $(".nav-column").css("position","static");
    });
    
  });
});