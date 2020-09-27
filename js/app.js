

class App{
    constructor(){
        this.userScreenMobile = window.innerHeight > window.innerWidth;
        this.userScreenY = 0;
        this.scrollHeight = this.getDocHeight();
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        //this.projects = ["cloudchaos","higgins", "colorwheel", "citadels", "stylish","colorwheel", "citadels", "stylish","colorwheel", "citadels", "stylish"];
        this.projs = {
            "cloudchaos":cloudchaos,
            "higgins": higgins,
            "agency":agency,
            "typewriter":typewriter,
            "stylish":stylish,
            "citadels": citadels,
            "colorwheel": colorwheel,
            
        }
        this.projects = Object.keys(this.projs)
        this.icons = []
        console.log(this.projs)
        this.currentProject = 0;
        this.currentSkillset = "all";
        this.skills = skills;
        this.start();
    }
    start(){
        console.log(this)
        this.pageElements = {
            "nav": document.querySelector('nav'),
            "image_container": document.querySelector('.image-layers'),
            "background": document.querySelector('#background'),
            "banner": document.querySelector('#banner'),
            "stars": document.querySelector('#stars'),
            "skillset": document.querySelector('#skillset-container'),
            "skillsetSelector": document.querySelector('#skillset-selector'),
            "projectContainer": document.querySelector('#project-container'),
            "projectBrowseBar": document.querySelector('#project-browse-bar'),
            "aboutMe": document.querySelector('#about-me-container'),
            "stars": document.querySelector('#stars')
        }
        console.log(this.pageElements)
        
        this.loadImages();
        document.addEventListener("scroll", () => {
            this.followScroll()
        })
        this.welcome();
    }
    skyController(){
        setTimeout(()=>{
            this.pageElements.stars.style.opacity = 1;
            this.pageElements.stars.className = "spin";
            new Comet(this.pageElements.banner,this.screenWidth,this.scrollHeight,this.screenWidth/2,100)
            setInterval(()=>{
                new Comet(this.pageElements.banner,this.screenWidth)
            }, Math.floor(Math.random()*10000)+5000)
        },6000)
    }
    welcome(){
        console.log("hi, welcome to my website!")
        console.log("thanks for checking out the console")
        console.log("(or did you just forget to close it?")
        console.log("i do that sometimes too...)")
        console.log("feel free to reach out if you have an interesting project")
        console.log("and maybe we can work on it together!")
        console.log("(oh, and i'll keep logging stuff too,")
        console.log("in case you get bored...)")
        console.log("")
        console.log("")
        console.log("")
    }
    followScroll(){
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        if(scrollTop > window.innerHeight*.9){
            this.pageElements.nav.style.opacity = 1;
            this.pageElements.nav.style.backgroundColor = "black"
        } else {
            const o = 1-(Math.abs(scrollTop - this.screenHeight)/1000 + .3);
            this.pageElements.background.style.opacity = 1 - (o);
            this.pageElements.nav.style.opacity = o;
            this.pageElements.nav.style.backgroundImage = "none";
            this.pageElements.nav.style.backgroundColor = "black"
        }
        //console.log(scrollTop, window.innerHeight, window.innerHeight*.75)
    }
    loadImages(){
        const backgroundImage = this.buildEl("img",null,null,'background-fade-in','background');
        backgroundImage.src = "images/pexels-juan-733475.png";
        backgroundImage.addEventListener('load',(e)=>{
            this.loaded();
        })
        this.pageElements['background'] = backgroundImage;
        this.pageElements.image_container.prepend(backgroundImage)
    }
    loaded(){
        console.log('loaded')
        this.pageElements.banner.backgroundImage = "url('../images/banner.png')"
        this.pageElements.banner.className = "banner-fade-in";
        this.pageElements.banner.display = "block";
        this.pageElements.stars.className = "banner-fade-in";
        this.skyController();
        this.loadSkills();
        this.loadProjects();
        this.loadAboutMe();
    }
    loadProjects(){
        console.log('loading projects')
        for(let i = 0; i < this.projects.length; i ++){
            const p = this.projects[i];
            const imgSrc = "./js/projects/"+p+"/images/"+p+"1.png"
            console.log('loading: ' + p)
            const el = this.buildEl("img", null, null, "project-icon");
            el.data = i;
            el.src = imgSrc;
            el.addEventListener("click", (e) => {
                const icon = this.icons[this.currentProject];
                icon.id = "";
                console.log(e.target.data)
                this.currentProject = e.target.data;
                this.openProject()
            })
            const cover = this.buildEl("div", el, null, "project-icon-cover");
            this.pageElements.projectBrowseBar.appendChild(el)
            this.icons.push(el)
        }
        this.openProject()
    }
    openProject(){
        const projectName = this.projects[this.currentProject];
        const projectData = this.projs[projectName];
        const icon = this.icons[this.currentProject];
        icon.id = "project-icon-selected";
        //empty container
        const projectContainer = this.pageElements.projectContainer;
        while(projectContainer.firstChild){
            projectContainer.removeChild(projectContainer.firstChild)
        }
        
        const el = this.buildEl("article", null, null, "project-full");
        const imageContainer = this.buildEl("div", el,null,"column")
        const mainImage = this.buildEl("img", imageContainer, null, "project-image-full");
        mainImage.src = "./js/projects/"+projectName+"/images/"+projectName+"1.png";
        const infoCol = this.buildEl("div",el,null,"column");
        const next = this.buildEl("span", infoCol, "next");
        const title = this.buildEl("h2", infoCol, projectData.name);
        if(projectData.url){
            const url = this.buildEl("a",infoCol, "Live: " + projectData.url)
            url.href = projectData.url
        }
        if(projectData.githubUrl){
            const github = this.buildEl("span",infoCol, "Github: ")
            const githubUrl = this.buildEl("a",github,projectData.githubUrl)
            githubUrl.href = projectData.githubUrl
        }
        this.buildEl("div",infoCol, "Description: " + projectData.description);
        const skillsContainer = this.buildEl("div",infoCol, "Stack: ")
        for(let i = 0; i< this.projs[projectName]['stack'].length;i++){
            const text = i === 0 ? this.projs[projectName]['stack'][i] : " | " + this.projs[projectName]['stack'][i]; 
            this.buildEl("span",skillsContainer, text)
        }   
        if(projectData.collaborators){
            //MTC
        }
        if(projectData.caseStudy.length){
            this.buildEl("h3", infoCol, "Case Study");
            for(let i = 0; i < projectData.caseStudy.length; i++){
                this.buildEl('div',infoCol,projectData.caseStudy[i],'para')
            }
        }
        projectContainer.appendChild(el)
    }
    loadSkills(){
        console.log('adding skills')
        const all = [];
        this.skillsets = Object.keys(skills);
        this.skillsets.unshift('all')
        for(let i = 0; i< this.skillsets.length; i++){
            const el = this.buildEl('button',this.pageElements.skillsetSelector,this.skillsets[i],"skillset-selector-button")
            el.data = this.skillsets[i];
            el.addEventListener('click',(e)=>{
                console.log(e.target.data)
            })
        }
        for(let i in this.skills){
            console.log("skillset: " + i);
            for(let j = 0; j < this.skills[i].length; j++){
                const skill = this.skills[i][j];
                console.log(skill)
                all.push(skill)
            }
        }
        this.skills['all'] = all;
        for(let j = 0; j < all.length; j++){
            const skill = all[j];
            const el = this.buildEl('div',this.pageElements.skillset,skill,"skill")
            el.data = skill;
            el.addEventListener('click',(e)=>{
                console.log(e.target.data)
            })
        }
    }
    updateSkills(){
        
    }
    loadAboutMe(){
        console.log('about me!')
        for(let i = 0; i < about.length; i++){
            const el = this.buildEl('div', this.pageElements.aboutMe,about[i],'para');
            console.log(this.pageElements.aboutMe,about[i])
        }
    }
    buildEl(type,container,text,className,id){
        const el = document.createElement(type);
        if(text){
            el.textContent = text
        }
        if(className){
            el.className = className;
        }
        if(id){
            el.id = id;
        }
        if(container){
            container.appendChild(el)
        }
        return el
    }
    iterateFunc(arr,func){
        for(let i = 0; i < arr.length; i++){
            func(arr[i])
        }
        return arr
    }
    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }
}

class Comet{
    constructor(container,screenWidth,screenHeight,x,y){
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
        if(this.direction === -1){
            this.el.style.transform = 'rotateY(180deg)';
        }
        container.appendChild(this.el)
        this.fall();
    }
    fall(){
        console.log("comet falling!")
        let interval = setInterval(()=>{
            if(this.lifespan > 0){
                this.x += 2*this.direction;
                this.y += 1;
                this.el.style.marginTop = this.y + "px";
                this.el.style.marginLeft = this.x + "px";
                this.lifespan -= 1;
            } else {
                this.container.removeChild(this.el)
                clearInterval(interval)
            }
        },10)
    }
}

window.addEventListener('load', (event) => {
    console.log('page loaded');
    new App();
  });

