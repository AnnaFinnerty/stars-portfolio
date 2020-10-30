class App{
    constructor(){
        this.userScreenMobile = window.innerHeight > window.innerWidth;
        this.userScreenY = 0;
        this.scrollHeight = this.getDocHeight();
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.projs = projects;
        // this.pageVisible = "visible"
        this.projects = Object.keys(this.projs)
        this.icons = []
        console.log(this.projs)
        this.currentProject = 0;
        this.currentSkillset = "all";
        this.skills = skills;
        this.comet = null;
        this.messageQueue = [];
        // this.onFocusChange = this.onFocusChange.bind(this);
        this.start();
    }
    start(){
        this.pageElements = {
            "nav": document.querySelector('nav'),
            "main": document.querySelector('main'),
            "skillset": document.querySelector('#skillset-container'),
            "skillsetSelector": document.querySelector('#skillset-selector'),
            "projectContainer": document.querySelector('#project-container'),
            "projectBrowseBar": document.querySelector('#project-browse-bar'),
            "aboutMe": document.querySelector('#about-me-container'),
            "stars": document.querySelector('#stars')
        }
        console.log(this.pageElements)
        this.welcome();
        // => (surfaceToClickOnQuerySelector,onLoadCallack)
        new SkyController("header",() => this.onLoad());
        document.addEventListener("scroll", () => {
            this.followScroll()
        })
    }
    onLoad(){
        console.log('loaded in app')
        this.pageElements.main.style.display = "block";
    }
    welcome(){
        this.loadSkills();
        this.loadProjects();
        this.loadAboutMe();
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
        } else {
            this.pageElements.nav.style.opacity = 1-(Math.abs(scrollTop - this.screenHeight)/1000 + .3);
        }
    }
    loadProjects(){
        console.log('loading projects')
        for(let i = 0; i < this.projects.length; i ++){
            const p = this.projects[i];
            const imgSrc = "./images/project_images/"+p+"1.png";
            console.log('loading: ' + p)
            const el = this.buildEl("div", null, null, "project-icon");
            el.style.backgroundImage = "url("+imgSrc+")";
            const cover = this.buildEl("button", el, null, "project-icon-cover");
            cover.setAttribute("aria-label","view project " + p)
            cover.data = i;
            cover.addEventListener("click", (e) => {
                this.nextProject(e.target.data);
            })
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
        const projectContainer = this.pageElements.projectContainer;
        this.emptyContainer(projectContainer)
        const el = this.buildEl("article", null, null, "project-full");
        const imageContainer = this.buildEl("div", el,null,"column")
        const mainImage = this.buildEl("img", imageContainer, null, "project-image-full");
        mainImage.src = "./images/project_images/"+projectName+"1.png";
        const infoCol = this.buildEl("div",el,null,"column");
        const next = this.buildEl("h4", infoCol, "next>","next-button");
        next.addEventListener("click",()=>{
            if(this.currentProject < this.projects.length-1){
                this.nextProject(this.currentProject+1)
            } else {
                this.nextProject(0)
            }
            this.openProject();
        })
        const title = this.buildEl("h3", infoCol, projectData.name);
        if(projectData.url){
            const d = this.buildEl("div",infoCol, null,"info")
            const span = this.buildEl("label",d, "Live: ")
            const url = this.buildEl("a",d,projectData.url)
            url.href = projectData.url;
            url.target = "_blank";
        }
        if(projectData.githubUrl){
            const d = this.buildEl("div",infoCol, null,"info")
            const github = this.buildEl("label",d, "Github: ")
            const githubUrl = this.buildEl("a",d,projectData.githubUrl)
            githubUrl.href = projectData.githubUrl;
            githubUrl.target = "_blank";
        }
        if(projectData.collaborators){
            const c = this.buildEl("div",infoCol, null,"info")
            this.buildEl("label",c, "Collaborators: ");
            for(let i = 0; i< projectData.collaborators.length;i++){
                const text = i === 0 ? projectData.collaborators[i]['name'] : " | " + projectData.collaborators[i]['name']; 
                this.buildEl("span",c, text + " | ")
                const url = this.buildEl("a",c,projectData.collaborators[i]['url'])
                url.href = projectData.collaborators[i]['url'];
                url.target = "_blank";
            }
        }
        const description = this.buildEl("div",infoCol, null, "info");
        this.buildEl("label",description, "Description: ");
        this.buildEl("span",description, projectData.description);
        const skillsContainer = this.buildEl("div",infoCol, null, "info");
        this.buildEl("label",skillsContainer, "Stack: ")
        for(let i = 0; i< this.projs[projectName]['stack'].length;i++){
            const text = i === 0 ? this.projs[projectName]['stack'][i] : " | " + this.projs[projectName]['stack'][i]; 
            this.buildEl("span",skillsContainer, text)
        }   
        if(projectData.caseStudy.length){
            this.buildEl("h3", infoCol, "Case Study");
            const teaser = this.buildEl('div',infoCol,projectData.caseStudy[0].slice(0,50),'para')
            teaser.addEventListener("click",()=>{
                infoCol.removeChild(teaser)
                this.openCaseStudy(infoCol, projectData.caseStudy)
            })
            this.buildEl("h4", teaser, "read more...","next-button");
        }
        projectContainer.appendChild(el)
    }
    openCaseStudy(infoCol,caseStudy){
        for(let i = 0; i < caseStudy.length; i++){
            this.buildEl('div',infoCol,caseStudy[i],'para')
        }
        const next = this.buildEl("h4", infoCol, "next>","next-button");
        next.addEventListener("click",()=>{
            if(this.currentProject < this.projects.length-1){
                this.nextProject(this.currentProject+1)
            } else {
                this.nextProject(0)
            }
            this.openProject();
        })
        this.pageElements.projectContainer.firstChild.style.height = "auto";
        this.pageElements.projectContainer.firstChild.style.paddingBottom = "5vh";
        this.pageElements.projectContainer.addEventListener("mouseleave",()=>{
            this.openProject()
        })
    }
    loadSkills(){
        console.log('adding skills')
        const all_skills = [];
        for(let i in this.skills){
            const el = this.buildEl('button',this.pageElements.skillsetSelector,i,"skillset-selector-button")
            el.data = i;
            el.addEventListener('click',(e)=>{
                console.log(e.target.data)
                this.updateSkills(e.target.data)
            })
            for(let j = 0; j < this.skills[i].length; j++){
                const skill = this.skills[i][j];
                console.log(j % fonts[i].length)
                const font = fonts[i][j % fonts[i].length]
                this.skills[i][j] = {skill:skill,font: font};
                all_skills.push({skill:skill,font: font});
            }
        }
        this.skills['all'] = all_skills;
        this.updateSkills('all')
    }
    updateSkills(newSkillset){
        this.emptyContainer(this.pageElements.skillset)
        for(let i in this.skills[newSkillset]){
            const skill = this.skills[newSkillset][i];
            const el = this.buildEl('div',this.pageElements.skillset,skill.skill,"skill")
            el.style.fontFamily = skill.font
        }
    }
    loadAboutMe(){
        console.log('about me!')
        for(let i = 0; i < about.length; i++){
            const el = this.buildEl('div', this.pageElements.aboutMe,about[i],'para');
            console.log(this.pageElements.aboutMe,about[i])
        }
    }
    nextProject(nextProject){
        const icon = this.icons[this.currentProject];
              icon.id = "";
        this.currentProject = nextProject;
        this.openProject()
    }
    emptyContainer(container){
        while(container.firstChild){
            container.removeChild(container.firstChild)
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
    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        )
    }
    // shuffle(array) {
    //     var currentIndex = array.length, temporaryValue, randomIndex;
    //     while (0 !== currentIndex) {
    //       randomIndex = Math.floor(Math.random() * currentIndex);
    //       currentIndex -= 1;
    //       temporaryValue = array[currentIndex];
    //       array[currentIndex] = array[randomIndex];
    //       array[randomIndex] = temporaryValue;
    //     }
    //     return array;
    // }
}

window.addEventListener('load', (event) => {
    console.log('page loaded');
    new App();
  });

