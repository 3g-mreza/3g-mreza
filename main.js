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
    });
});

$('#burger').click(function(){
    $('.small nav').show();
    $(this).hide();
    $('.small').addClass('show');
    $('header').css('height','30vh');
    $('nav,.logo').css('flex-basis','auto');
    
    
});
$(function(){
    $('.small nav a').click(function(){
        $('#burger').show();
        $('nav').hide();
        $('header').css('height','10vh');
        $('.small').removeClass('show');
        $('nav,.logo').css('flex-basis','50%');
    });
});
const ourTeam = [
    {name:"Aleksandra Stanojević", github:"https://github.com/aleksandrastanojevic", imgSource:"./gif/saska"},
    {name:"Vladimir Simonović", github:"https://github.com/SimaoKovin", imgSource:"./gif/vladimir"},
    {name:"Danijela Reljić", github:"https://github.com/danijelareljic", imgSource:"./gif/danijela" },
    {name:"Ivan Stojković", github:"https://github.com/iks94", imgSource:"./gif/bezslike"},
    {name:"Irena Šestak", github:"https://github.com/9999starlight", imgSource:"./gif/irena"},
    {name:"Marija Šobić", github:"https://github.com/marijasobic", imgSource:"./gif/marija"},
    {name:"Martina Trajković", github:"https://github.com/MartinaTrajkovic", imgSource:"./gif/bezslike"},
    {name:"Nataša Vuković", github:"https://github.com/natasa1707", imgSource:"././gif/natasa"},
    {name:"Nenad Vukašinović", github:"https://github.com/nenadvuk", imgSource:"./gif/nenad"},
    {name:"Rada Popović", github:"https://github.com/radapopovic", imgSource:"./gif/rada"},
    {name:"Slavko Vranešević", github:"https://github.com/SlavkoVran", imgSource:"./gif/slavko"},
    {name:"Tadija Selaković", github:"https://github.com/tadija84", imgSource:"./gif/tadija"}
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
      cardImage[i].style.backgroundImage = `url(${ourTeam[i].imgSource}.png)`;
      
    }
    $(".card-image").each(function(i){
        $(this).mouseover(function(){
            $(this).css('background-image', `url(${ourTeam[i].imgSource}.gif)`);
        });
        $(this).mouseout(function(){
            $(this).css('background-image', `url(${ourTeam[i].imgSource}.png)`);
          });
        });  
}


$('.button').on('click',cardCreator());