// 敌机构造函数
function Foe(w,h) {
	var foe = this;
	foe.w = w;
	foe.h = h;
	foe.aFoe = [];
	foe.imgs = [oArr[4],oArr[5],oArr[6],oArr[7],oArr[8]];
	foe.delay = 60;
	foe.di = 0;
	foe.draw = function () {
		foe.di++;
		if (foe.di>foe.delay) {
			foe.di = 0;
			var obj = {//创建飞机对象
				w:foe.w,
				h:foe.h,
				x:Math.floor(Math.random()*(canvas.width-foe.w)),
				y:-foe.h,
				speed:Math.floor(Math.random()*2)+1,	
				hp:2,
				die:false,
				blow:0
			}
			foe.aFoe.push(obj);//把飞机对象添加到数组
		}
		//循环画出所有飞机
		for (var i = 0; i < foe.aFoe.length; i++) {
			if (foe.aFoe[i].hp<=0) {
				foe.aFoe[i].die = true;
			}else{
				foe.aFoe[i].y += foe.aFoe[i].speed;
			}
			//判断如果死了
			if (foe.aFoe[i].die) {
				foe.aFoe[i].blow++;
				if (foe.aFoe[i].blow>=5) {
					foe.aFoe.splice(i,1)
					i--;
					continue;
				}
			}			
			//如果飞机超出屏幕下面就删除
			if (foe.aFoe[i].y>canvas.height) {
				foe.aFoe.splice(i,1)
				i--;
				continue;
			}
			ctx.drawImage(foe.imgs[foe.aFoe[i].blow],foe.aFoe[i].x,foe.aFoe[i].y,foe.w,foe.h)
		}
	}
}

