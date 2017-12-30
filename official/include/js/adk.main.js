<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width; initial-scale=1.0;  minimum-scale=1.0; maximum-scale=1.0">
    <meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <title>山东移动404</title>
	<script>
		function getScreenWidth(){
			var screenWidth = window.screen.width;
			if(screenWidth >= 640 ){
				return 'pc';
			}else{
				return 'mobile';
			}
		}
		if(getScreenWidth() === 'pc' && location.href.indexOf('pc') < 0){
			location.href = 'indexpc.htm';//location.href + symbol + 'branch=pc';
		}
		else{
			location.href = 'indexwap.htm';
		}
	</script>
</head>
<body>

</body>
</html>

