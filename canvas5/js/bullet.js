// 子弹构造函数
function Bullet(w,h) {
	var bt = this;
	bt.w = w;
	bt.h = h;
	bt.aBt = [];
	bt.img = oArr[3];
	bt.delay = 30;
	bt.di = 0;
	bt.speed = 5;//子弹移动速度
	bt.draw = function (hero,foe) {
		bt.di++;
		//延时1秒创建一个子弹
		if (bt.di>bt.delay) {
			bt.di = 0;
			var obj = {//每个子弹对象
				w:bt.w,
				h:bt.h,
				x:hero.x + hero.w/2 - bt.w/2,
				y:hero.y - bt.h,
			}
			bt.aBt.push(obj);
		}		
		//循环画出所有子弹
		for (var i = 0; i < bt.aBt.length; i++) {
			bt.aBt[i].y -= bt.speed;
			

			if (bt.aBt[i].y<-bt.aBt[i].h) {
				bt.aBt.splice(i,1)
				i--;
				continue;
			}
			if (check(foe,bt.aBt[i].x,bt.aBt[i].y)) {
				bt.aBt.splice(i,1)
				i--;
				continue;
			}
			ctx.drawImage(bt.img,bt.aBt[i].x,bt.aBt[i].y,bt.w,bt.h);
		}

	}

	function check(foe,x,y) {		
		for (var i = 0; i < foe.aFoe.length; i++) {		
			ctx.beginPath();
			ctx.rect(foe.aFoe[i].x,foe.aFoe[i].y,foe.aFoe[i].w,foe.aFoe[i].h);
			ctx.closePath();
			if (ctx.isPointInPath(x,y)) {
				foe.aFoe[i].hp--;
				return true;
			}
		}
		return false;
	}




}


