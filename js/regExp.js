var reg = {
			userName:/^([\u4e00-\u9fa5]|\w|-)+$/,//验证用户名
			regNum : /\d+/,//验证是否为数字      
			regWord : /[a-zA-Z]+/, //验证是否为字母     
			regOther : /[^\da-zA-Z]+/,//验证是否为特殊字符
			phone:/^(1){1}(3|5|7|8){1}[0-9]{9}/,//验证手机号
			email:/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$///验证邮箱
};
