function Hero(w,h) {
	var hero = this;
	hero.w = w;
	hero.h = h;
	hero.x = canvas.width/2 - w/2;
	hero.y = canvas.height*0.8;
	hero.imgs = [oArr[1],oArr[2]];
	hero.n = 0;
	hero.delay = 5;
	hero.di = 0;
	var canvas2 = document.createElement("canvas");
	canvas2.width = canvas.width;
	canvas2.height = canvas.height;
	var ctx2 = canvas2.getContext("2d");

	hero.draw = function (foe) {
		hero.di++;
		if (hero.di>hero.delay) {
			hero.di = 0;
			hero.n = Number(!hero.n)
		}		
		if (check(foe)) {
			console.log("死了")
		}
		ctx.drawImage(hero.imgs[hero.n],hero.x,hero.y,hero.w,hero.h);
	}

	function check(foe) {
		for (var i = 0; i < foe.aFoe.length; i++) {
			ctx2.clearRect(0,0,canvas.width,canvas.height);

			ctx2.globalCompositeOperation = "source-over";
			ctx2.drawImage(foe.imgs[0],foe.aFoe[i].x,foe.aFoe[i].y,foe.aFoe[i].w,foe.aFoe[i].h)

			ctx2.globalCompositeOperation = "source-in";
			ctx2.drawImage(hero.imgs[0],hero.x,hero.y,hero.w,hero.h)

			var imageData = ctx2.getImageData(foe.aFoe[i].x,foe.aFoe[i].y,foe.aFoe[i].w,foe.aFoe[i].h);

			for (var j = 3; j < imageData.data.length; j+=4) {
				if (imageData.data[j]>0) {
					return true;
				}
			}
		}
	}


}









