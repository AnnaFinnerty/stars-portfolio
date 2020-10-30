class SkyController{
    constructor(surfaceToClick = "#banner",onloadCallback){
        this.pageVisible = "visible";
        this.pageElements = {
            "image_container": document.querySelector('.image-layers'),
            "main": document.querySelector('main'),
            "background": document.querySelector('#background'),
            "banner": document.querySelector('#banner'),
            "stars": document.querySelector('#stars')
        }
        document.querySelector(surfaceToClick).addEventListener("click", (e) => {
            this.comet = new Comet(this.clearComet,this.pageElements.banner,this.screenWidth,this.screenHeight,e.clientX,e.clientY+100)
        })
        this.onFocusChange = this.onFocusChange.bind(this);
        detectfocus(this.onFocusChange)
        this.loadImages(onloadCallback);
        this.start();
    }
    start(){
        this.pageElements.stars.className = "banner-fade-in";
        this.pageElements.stars.style.opacity = 1;
        this.pageElements.stars.className = "spin";
        new Comet(this.clearComet,this.pageElements.stars,this.screenWidth,this.screenHeight,this.screenWidth/4,200)
        setInterval(()=>{
            if(!this.comet && this.pageVisible === "visible"){
                new Comet(this.clearComet,this.pageElements.banner,this.screenWidth,this.screenHeight)
            }
        }, Math.floor(Math.random()*10000)+5000)
    }
    loadImages(onloadCallback){
        const backgroundImage = document.createElement("img");
        backgroundImage.id = "background"
        backgroundImage.src = "images/background.png";
        backgroundImage.style.opacity = "0%";
        backgroundImage.addEventListener('load',(e)=>{
            this.pageElements['background'] = backgroundImage;
            this.pageElements.image_container.prepend(backgroundImage)
            this.loaded();
            if(onloadCallback){
                onloadCallback();
            }
            //fake increased load time
            setTimeout(()=>{
                // this.pageElements['background'] = backgroundImage;
                // this.pageElements.image_container.prepend(backgroundImage)
                // this.pageElements.main.style.display = "block";
                // this.loaded();
            },3000)
        })
    }
    loaded(){
        console.log('loaded')
        this.pageElements.background.className = "background-fade-in";
        this.pageElements.background.display = "block";
        setTimeout(()=>{
            this.pageElements.banner.backgroundImage = "url('../images/banner.png')"
            this.pageElements.banner.className = "banner-fade-in";
            this.pageElements.banner.display = "block";
        },500)
    }
    clearComet(){
        this.comet = null;
    }
    onFocusChange(newFocusState){
        this.pageVisible = newFocusState;
    }
}

class Comet{
    constructor(clearComet,container,screenWidth,screenHeight,x,y){
        this.clearComet = clearComet;
        this.container = container;
        this.lifespan = Math.floor(Math.random()*100);
        const d = Math.random();
        this.direction = d < .5 ? 1 : -1;
        this.x = x ? x : Math.floor(Math.random()*screenWidth);
        this.y = y ? y : Math.floor(Math.random()*(screenHeight/2));
        this.targetX = Math.floor(Math.random()*screenWidth);
        this.targetY = screenHeight;
        this.el = document.createElement('div');
        this.el.className = "comet";
        const deg = d < .5 ? Math.floor(Math.random()*45) : Math.floor(Math.random()*45) + 135;
        this.el.style.transform = 'rotateY('+deg+'deg)';
        container.appendChild(this.el)
        this.fall();
    }
    fall(){
        console.log("comet falling!")
        let interval = setInterval(()=>{
            if(this.lifespan > 0){
                this.x += 2*this.direction;
                this.y += 2;
                this.el.style.marginTop = this.y + "px";
                this.el.style.marginLeft = this.x + "px";
                this.lifespan -= 1;
            } else {
                this.container.removeChild(this.el)
                clearInterval(interval)
                this.clearComet();
            }
        },10)
    }
}