const swup = new Swup();
update();
swup.on('contentReplaced', update);
var temp = 0;

function update() {
    if (window.location.href == 'https://sibichakkaravarthy.github.io/index.html') {
        document.getElementById('mm0').classList.add('active');
        document.getElementById('mm1').classList.remove('active');
        document.getElementById('mm2').classList.remove('active');
        document.getElementById('mm3').classList.remove('active');
        document.getElementById('mm4').classList.remove('active');
        document.getElementById('mm5').classList.remove('active');


        temp = 0;
    }
    if (window.location.href == 'https://sibichakkaravarthy.github.io/aboutMe.html') {
        document.getElementById('mm0').classList.remove('active');
        document.getElementById('mm1').classList.add('active');
        document.getElementById('mm2').classList.remove('active');
        document.getElementById('mm3').classList.remove('active');
        document.getElementById('mm4').classList.remove('active');
        document.getElementById('mm5').classList.remove('active');
        temp = 1;
    }
    if (window.location.href == 'https://sibichakkaravarthy.github.io/researchGrant.html') {
        document.getElementById('mm0').classList.remove('active');
        document.getElementById('mm1').classList.remove('active');
        document.getElementById('mm2').classList.add('active');
        document.getElementById('mm3').classList.remove('active');
        document.getElementById('mm4').classList.remove('active');
        document.getElementById('mm5').classList.remove('active');
        temp = 2;
    }
    if (window.location.href == 'https://sibichakkaravarthy.github.io/researchProjects.html') {
        document.getElementById('mm0').classList.remove('active');
        document.getElementById('mm1').classList.remove('active');
        document.getElementById('mm2').classList.remove('active');
        document.getElementById('mm3').classList.add('active');
        document.getElementById('mm4').classList.remove('active');
        document.getElementById('mm5').classList.remove('active');
        temp = 3;
    }
    if (window.location.href == 'https://sibichakkaravarthy.github.io/publications.html') {
        document.getElementById('mm0').classList.remove('active');
        document.getElementById('mm1').classList.remove('active');
        document.getElementById('mm2').classList.remove('active');
        document.getElementById('mm3').classList.remove('active');
        document.getElementById('mm4').classList.add('active');
        document.getElementById('mm5').classList.remove('active');
        temp = 4;
    }
    if (window.location.href == 'https://sibichakkaravarthy.github.io/gallery.html') {
        document.getElementById('mm0').classList.remove('active');
        document.getElementById('mm1').classList.remove('active');
        document.getElementById('mm2').classList.remove('active');
        document.getElementById('mm3').classList.remove('active');
        document.getElementById('mm4').classList.remove('active');
        document.getElementById('mm5').classList.add('active');
        temp = 5;
    }
    if (temp == 0) {
        document.getElementById('m1').innerHTML = '<a href="/aboutMe.html"><i class="fas fa-chevron-right"></i></i></a>';
        document.getElementById('m2').innerHTML = '<a href="/gallery.html"><i class="fas fa-chevron-left"></i></i></i></a>';
    }
    if (temp == 1) {
        document.getElementById('m1').innerHTML = '<a href="/researchGrant.html"><i class="fas fa-chevron-right"></i></i></a>';
        document.getElementById('m2').innerHTML = '<a href="/index.html"><i class="fas fa-chevron-left"></i></i></i></a>';
    }
    if (temp == 2) {
        document.getElementById('m1').innerHTML = '<a href="/researchProjects.html"><i class="fas fa-chevron-right"></i></i></a>';
        document.getElementById('m2').innerHTML = '<a href="/aboutMe.html"><i class="fas fa-chevron-left"></i></i></i></a>';
    }
    if (temp == 3) {
        document.getElementById('m1').innerHTML = '<a href="/publications.html"><i class="fas fa-chevron-right"></i></i></a>';
        document.getElementById('m2').innerHTML = '<a href="/researchGrant.html"><i class="fas fa-chevron-left"></i></i></i></a>';
    }
    if (temp == 4) {
        document.getElementById('m1').innerHTML = '<a href="/gallery.html"><i class="fas fa-chevron-right"></i></i></a>';
        document.getElementById('m2').innerHTML = '<a href="/researchProjects.html"><i class="fas fa-chevron-left"></i></i></i></a>';
    }
    if (temp == 5) {
        document.getElementById('m1').innerHTML = '<a href="/index.html"><i class="fas fa-chevron-right"></i></i></i></a>';
        document.getElementById('m2').innerHTML = '<a href="/publications.html"><i class="fas fa-chevron-left"></i></i></a>';
    }
}