// 背景构造函数
function Bg(w,h) {
	var Bg = this;
	Bg.w = w;
	Bg.h = h;
	Bg.y = 0;

	Bg.draw = function () {
		Bg.y += 2;
		if (Bg.y>canvas.height) {
			Bg.y = 0;
		}
		ctx.drawImage(oArr[0],0,0,Bg.w,Bg.h,0,Bg.y-canvas.height,canvas.width,canvas.height);
		ctx.drawImage(oArr[0],0,0,Bg.w,Bg.h,0,Bg.y,canvas.width,canvas.height);
	}
}