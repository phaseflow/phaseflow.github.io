function show()
{
  $.ajax({
    url: "news.html",
    cache: false,
    success: function(html)
    {$("#content").html(html);}
  });
}
$(document).ready(function(){show();});  