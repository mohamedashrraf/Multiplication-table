(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_1", frames: [[0,0,632,160]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_1 = function() {
	this.initialize(ss["index_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Yes", "28px 'Noto Sans SemiBold'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 83;
	this.text.parent = this;
	this.text.setTransform(43.5,30);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6EB118").ss(4,1,1).p("AHCAAQAAC6iECEQgIAJgIAHQh/B0ivAAQiuAAh/h0QgIgHgJgJQiDiEAAi6QAAi6CDiEQAogoAtgbQBCgpBOgPQArgIAuAAQCCAABoBAQAsAbAoAoQA6A6AgBEQAqBYAABog");
	this.shape.setTransform(45,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BAEC79").s().p("AktFOIgRgQQiDiEAAi6QAAi6CDiEQAogoAugbQBBgpBOgPQArgIAuAAQCCAABoBAQAsAbAoAoQA6A6AgBEQAqBXAABpQAAC6iECEIgQAQQh/B0ivAAQiuAAh/h0g");
	this.shape_1.setTransform(45,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.yes, new cjs.Rectangle(-2,-2,94,94), null);


(lib.no = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("No", "28px 'Noto Sans SemiBold'");
	this.text.textAlign = "center";
	this.text.lineHeight = 45;
	this.text.lineWidth = 83;
	this.text.parent = this;
	this.text.setTransform(46.5,30);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6EB118").ss(4,1,1).p("AHCAAQAAC6iECEQgIAJgIAHQh/B0ivAAQiuAAh/h0QgIgHgJgJQiDiEAAi6QAAi6CDiEQAogoAtgbQBCgpBOgPQArgIAuAAQCCAABoBAQAsAbAoAoQA6A6AgBEQAqBYAABog");
	this.shape.setTransform(45,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BAEC79").s().p("AktFOIgRgQQiDiEAAi6QAAi6CDiEQAogoAugbQBBgpBOgPQArgIAuAAQCCAABoBAQAsAbAoAoQA6A6AgBEQAqBXAABpQAAC6iECEIgQAQQh/B0ivAAQiuAAh/h0g");
	this.shape_1.setTransform(45,45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.no, new cjs.Rectangle(-2,-2,94,94), null);


(lib.end = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.end, new cjs.Rectangle(0,0,316,80), null);


(lib.card2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.question_2 = new cjs.Text("", "25px 'Noto Sans SemiBold'");
	this.question_2.name = "question_2";
	this.question_2.textAlign = "center";
	this.question_2.lineHeight = 40;
	this.question_2.lineWidth = 257;
	this.question_2.parent = this;
	this.question_2.setTransform(197.9,173.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AojqHIRHAAQBkAAAABkIAARHQAABkhkAAIxHAAQhkAAAAhkIAAxHQAAhkBkAAg");
	this.shape.setTransform(201.4315,213.5246,3.1107,3.2975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AojKHQhjAAAAhkIAAxGQAAhjBjgBIRHAAQBjABABBjIAARGQgBBkhjAAg");
	this.shape_1.setTransform(201.4315,213.5246,3.1107,3.2975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.question_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card2, new cjs.Rectangle(-1,-1,404.9,429.1), null);


(lib.card1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.question_1 = new cjs.Text("", "25px 'Noto Sans SemiBold'");
	this.question_1.name = "question_1";
	this.question_1.textAlign = "center";
	this.question_1.lineHeight = 40;
	this.question_1.lineWidth = 257;
	this.question_1.parent = this;
	this.question_1.setTransform(197.9,173.85);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AojqHIRHAAQBkAAAABkIAARHQAABkhkAAIxHAAQhkAAAAhkIAAxHQAAhkBkAAg");
	this.shape.setTransform(201.4315,213.5246,3.1107,3.2975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AojKHQhjAAAAhkIAAxGQAAhjBjgBIRHAAQBjABABBjIAARGQgBBkhjAAg");
	this.shape_1.setTransform(201.4315,213.5246,3.1107,3.2975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.question_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.card1, new cjs.Rectangle(-1,-1,404.9,429.1), null);


// stage content:
(lib.index = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		createjs.Touch.enable(stage);
		stage.mouseChildren = true;
		this.stop();
		
		var gameStage = this;
		var questions = [];
		var currentIndex = 0;
		var currentCard, nextCard;
		var isAnimating = false;
		
		gameStage.card_1.homeX = gameStage.card_1.x;
		gameStage.card_1.homeY = gameStage.card_1.y;
		gameStage.card_2.homeX = gameStage.card_2.x;
		gameStage.card_2.homeY = gameStage.card_2.y;
		
		gameStage.end.visible = false;
		
		var queue = new createjs.LoadQueue();
		queue.loadFile({ id: "questionsData", src: "data.json" });
		queue.on("fileload", handleFileLoad);
		queue.on("error", handleLoadError);
		
		function handleFileLoad(event) {
		  if (event.item.id === "questionsData") {
		    var data = event.result;
		
		    // ✅ خلط الأسئلة عشوائياً
		    questions = shuffleArray(data.questions);
		
		    console.log("✅ JSON loaded successfully:", questions);
		    startGame();
		  }
		}
		
		function handleLoadError(e) {
		  console.log("❌ Error loading JSON:", e);
		  var errorText = new createjs.Text("❌ Error loading JSON");
		  errorText.textAlign = "center";
		  errorText.x = stage.canvas.width / 2;
		  errorText.y = stage.canvas.height / 2;
		  stage.addChild(errorText);
		  stage.update();
		}
		
		// 🎯 دالة خلط عشوائي للأسئلة
		function shuffleArray(arr) {
		  for (let i = arr.length - 1; i > 0; i--) {
		    let j = Math.floor(Math.random() * (i + 1));
		    [arr[i], arr[j]] = [arr[j], arr[i]];
		  }
		  return arr;
		}
		
		function startGame() {
		  currentIndex = 0;
		  currentCard = gameStage.card_1;
		  nextCard = gameStage.card_2;
		
		  gameStage.card_1.visible = true;
		  gameStage.card_2.visible = true;
			
		  showQuestion(currentCard, questions[currentIndex]);
		
		  gameStage.setChildIndex(currentCard, gameStage.numChildren - 1);
		
		  bringUItoFront();
		
		  gameStage.yes.on("click", function() { handleAnswer(true); });
		  gameStage.no.on("click", function() { handleAnswer(false); });
		}
		
		function bringUItoFront() {
		  gameStage.setChildIndex(gameStage.yes, gameStage.numChildren - 1);
		  gameStage.setChildIndex(gameStage.no, gameStage.numChildren - 1);
		  gameStage.setChildIndex(gameStage.end, gameStage.numChildren - 1);
		}
		
		function handleAnswer(isYes) {
		  if (isAnimating) return;
		  checkAnswer(isYes);
		}
		
		function showQuestion(card, questionData) {
		  if (!card) return;
		  card.x = card.homeX;
		  card.y = card.homeY;
		
		  var qText = card.question_1 || card.question_2;
		  if (qText) qText.text = questionData.text;
		}
		
		function checkAnswer(userAnswer) {
		  isAnimating = true;
		
		  var q = questions[currentIndex];
		  var correct = (userAnswer === q.correct);
		  var glowColor = correct ? "#00FF00" : "#FF0000";
		  var moveX = correct ? 800 : -800;
		
		  if (currentIndex + 1 < questions.length) {
		    showQuestion(nextCard, questions[currentIndex + 1]);
		    nextCard.x = nextCard.homeX;
		    nextCard.y = nextCard.homeY;
		
		    gameStage.setChildIndex(nextCard, gameStage.getChildIndex(currentCard) - 1);
		  }
		
		  gameStage.setChildIndex(currentCard, gameStage.numChildren - 1);
		
		  bringUItoFront();
		
		  currentCard.shadow = new createjs.Shadow(glowColor, 0, 0, 30);
		
		  createjs.Tween.get(currentCard)
		    .to({ x: currentCard.homeX + moveX }, 600, createjs.Ease.quadInOut)
		    .call(function() {
		      currentCard.shadow = null;
		      isAnimating = false;
		      nextQuestion();
		    });
		}
		
		function nextQuestion() {
		  currentIndex++;
		  if (currentIndex >= questions.length) {
		    showEndMessage();
		    return;
		  }
		
		  var temp = currentCard;
		  currentCard = nextCard;
		  nextCard = temp;
		
		  gameStage.setChildIndex(currentCard, gameStage.numChildren - 1);
		
		  bringUItoFront();
		
		  createjs.Tween.get(currentCard)
		    .to({ x: currentCard.homeX, y: currentCard.homeY }, 400, createjs.Ease.quadOut);
		}
		
		function showEndMessage() {
		  gameStage.card_1.visible = false;
		  gameStage.card_2.visible = false;
		  gameStage.yes.visible = false;
		  gameStage.no.visible = false;
		
		  gameStage.end.visible = true;
		
		  bringUItoFront();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.end = new lib.end();
	this.end.name = "end";
	this.end.setTransform(524,153.8,1,1,0,0,0,158.1,23.2);

	this.no = new lib.no();
	this.no.name = "no";
	this.no.setTransform(465,474.45,1,1,0,0,0,45,45);
	new cjs.ButtonHelper(this.no, 0, 1, 1);

	this.yes = new lib.yes();
	this.yes.name = "yes";
	this.yes.setTransform(572,474.45,1,1,0,0,0,45,45);
	new cjs.ButtonHelper(this.yes, 0, 1, 1);

	this.card_1 = new lib.card1();
	this.card_1.name = "card_1";
	this.card_1.setTransform(522,262.9,1,1,0,0,0,201.4,213.5);

	this.card_2 = new lib.card2();
	this.card_2.name = "card_2";
	this.card_2.setTransform(522,262.9,1,1,0,0,0,201.4,213.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.card_2},{t:this.card_1},{t:this.yes},{t:this.no},{t:this.end}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(832.1,336.9,-108.10000000000002,184.60000000000002);
// library properties:
lib.properties = {
	id: '7DC78C2C70768144A5F27A1E0EAE27C9',
	width: 1024,
	height: 576,
	fps: 24,
	color: "#EFFDFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_1.png?1763028250172", id:"index_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7DC78C2C70768144A5F27A1E0EAE27C9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;