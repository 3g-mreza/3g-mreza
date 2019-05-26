$(window).scroll(function()
 {
    var currPosition = $(document).scrollTop();
    $('nav a').each(function() {
        var activeLink = $(this);
        var element = $(activeLink.attr('href'));
        if (element.position().top-activeLink.height() <= currPosition && element.position().top + element.outerHeight() >= currPosition) {
            activeLink.addClass("active").siblings().removeClass('active');
        }
      
    })
 });
 $(function(){
    $('nav a').click(function(){
        $(this).addClass('active').siblings().removeClass('active')	
    })
})

$('#burger').click(function(){
    $('nav').show();
    $(this).hide();
    $('.small').attr('class','show');
    $('header').css('height','30vh');
    
})
const ourTeam = [
    {name:"Aleksandra Stanojević", github:"https://github.com/SimaoKovin", imgSource:"./img/image2.jpg"},
    {name:"Vladimir Simonović", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg"},
    {name:"Danijela Reljić", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg" },
    {name:"Ivan Stojković", github:"https://github.com/SimaoKovin", imgSource:"././img/image2.jpg"},
    {name:"Irena Šestak", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg"},
    {name:"Marija Šobić", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg"},
    {name:"Martina Trajković", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg"},
    {name:"Nataša Vuković", github:"https://github.com/SimaoKovin", imgSource:"././img/image2.jpg"},
    {name:"Nenad Vukašinović", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg"},
    {name:"Rada Popović", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg"},
    {name:"Slavko Vranešević", github:"https://github.com/SimaoKovin", imgSource:"./img/image.jpg"},
    {name:"Tadija Selaković", github:"https://github.com/SimaoKovin", imgSource:"./img/image2.jpg"}
    
]

function cardCreator () {
    let parent = document.querySelector('#ourTeamCards');
    for (let i=0; i<ourTeam.length; i++) {
        parent.innerHTML += `<div class="card">
        <div class="card-image"> </div>
        <h3>${ourTeam[i].name}</h3>
        <a href="${ourTeam[i].github}" class="git-hub">github</a>
      </div>` 
      let cardImage = $('.card-image');
      cardImage[i].style.backgroundImage = `url(${ourTeam[i].imgSource})`;
    }
    
}

$('.button').on('click',cardCreator());