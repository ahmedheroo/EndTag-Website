$(function () {

    lightbox.option({
        'resizeDuration': 200
    });

    // ---------------------------------------------------------- //
    // Smooth scrolling
    // ---------------------------------------------------------- //
    var scroll = new SmoothScroll('a.link-scroll', {
        speed: 500,
        speedAsDuration: true,
        offset: 20,
        easing: 'easeInOutQuad'
    });


    // ---------------------------------------------------------- //
    // Scroll Spy
    // ---------------------------------------------------------- //
    $('body').scrollspy({
        target: '#navbarSupportedContent',
        offset: 80
    });

    // ---------------------------------------------------------- //
    // Close navbar on click on mobiles
    // ---------------------------------------------------------- //

    $('.navbar .link-scroll').on('click', function () {
        if ($(window).outerWidth() <= 985) {
            $('.navbar-collapse').removeClass('show');
            $('.navbar-toggler').attr('aria-expanded', 'false');
        }
    });

    // ---------------------------------------------------------- //
    // Map init
    // ---------------------------------------------------------- //    

    map();

});

$(function() {
    $('#hoveffect1').hover(function() {
     
      $('.s1').css('color', 'white');
      $('.ss1').css('color', 'white');
      
    }, function() {
      $('.ss1').css('color', 'rgba(179, 177, 177, 0.952)');
      $('.s1').css('color', 'black');
    });
  });
    $(function() {
        $('#hoveffect2').hover(function() {
      $('.s2').css('color', 'white');
      $('.ss2').css('color', 'white');
        }, function() {
          $('.ss2').css('color', 'rgba(179, 177, 177, 0.952)');
      $('.s2').css('color', 'black');

        });
    });

    $(function() {
        $('#hoveffect3').hover(function() {
      $('.s3').css('color', 'white');
      $('.ss3').css('color', 'white');
        }, function() {
      $('.s3').css('color', 'black');
      $('.ss3').css('color', 'rgba(179, 177, 177, 0.952)');
        });
    });  $(function() {
        $('#hoveffect4').hover(function() {
      $('.s4').css('color', 'white');
      $('.ss4').css('color', 'white');
        }, function() {
      $('.s4').css('color', 'black');
      $('.ss4').css('color', 'rgba(179, 177, 177, 0.952)');
        });
    });  $(function() {
        $('#hoveffect5').hover(function() {
      $('.s5').css('color', 'white');
      $('.ss5').css('color', 'white');
        }, function() {
      $('.s5').css('color', 'black');
      $('.ss5').css('color', 'rgba(179, 177, 177, 0.952)');
        });
    });  $(function() {
        $('#hoveffect6').hover(function() {
      $('.s6').css('color', 'white');
      $('.ss6').css('color', 'white');
        }, function() {
      $('.s6').css('color', 'black');
      $('.ss6').css('color', 'rgba(179, 177, 177, 0.952)');
        });
    });
   
   
      var chart=document.getElementById('barchart').getContext('2d');
      var mychart= new Chart(chart,{
        type:'bar',
        data:{
          labels:['2004-2005','2005-2006','2007-2008','2008-2009','2009-2010','2010-2012','2012-2016','2016-2018','2018-2020'],
          datasets:[{
            label:'social media traffic',
            data:['100','200','400','800','1000','2000','4000','5000','10000'],
            backgroundColor: ["red", "blue", "green","red", "blue", "green", "blue", "red", "green"]
          }]
        },
        options:{
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:true
              }
            }]
          }
        }
 

      });
      var chart=document.getElementById('Echart').getContext('2d');
      var mychart= new Chart(chart,{
        type:'bar',
        data:{
          labels:['2004-2005','2005-2006','2007-2008','2008-2009','2009-2010','2010-2012','2012-2016','2016-2018','2018-2020'],
          datasets:[{
            label:'social media traffic',
            data:['1','6','10','14','19','25','40','55','85'],
            backgroundColor: ["red", "blue", "green","red", "blue", "green", "blue", "red", "green"]
          }]
        },
        options:{
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:true
              }
            }]
          }
        }
 

      });
      var chart=document.getElementById('Ichart').getContext('2d');
      var mychart= new Chart(chart,{
        type:'bar',
        data:{
          labels:['2004-2005','2005-2006','2007-2008','2008-2009','2009-2010','2010-2012','2012-2016','2016-2018','2018-2020'],
          datasets:[{
            label:'social media traffic',
            data:['1','2','4','8','10','22','35','45','60'],
            backgroundColor: ["red", "blue", "green","red", "blue", "green", "blue", "red", "green"]
          }]
        },
        options:{
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:true
              }
            }]
          }
        }
 

      });
      var chart=document.getElementById('Tchart').getContext('2d');
      var mychart= new Chart(chart,{
        type:'bar',
        data:{
          labels:['2004-2005','2005-2006','2007-2008','2008-2009','2009-2010','2010-2012','2012-2016','2016-2018','2018-2020'],
          datasets:[{
            label:'social media traffic',
            data:['10','15','25','30','40','45','55','70','100'],
            backgroundColor: ["red", "blue", "green","red", "blue", "green", "blue", "red", "green"]
          }]
        },
        options:{
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:true
              }
            }]
          }
        }
 

      })
    
    function changecountry(selTag) {
      var x = selTag.options[selTag.selectedIndex].text;
      if (x=='Egypt')
      {
      document.getElementById("countryname").innerHTML = "Egypt";
      document.getElementById('barchart').style.display="none";
      document.getElementById('Echart').style.display="block";
      document.getElementById('Ichart').style.display="none";
      document.getElementById('Tchart').style.display="none";
     
      }
      else if(x=='Iraq')
      {
      document.getElementById("countryname").innerHTML = "Iraq";
      document.getElementById('barchart').style.display="none";
      document.getElementById('Echart').style.display="none";
      document.getElementById('Ichart').style.display="block";
      document.getElementById('Tchart').style.display="none";
      }
      else if(x=='Tunis')
      {
      document.getElementById("countryname").innerHTML = "Tunis";
      document.getElementById('barchart').style.display="none";
      document.getElementById('Echart').style.display="none";
      document.getElementById('Ichart').style.display="none";
      document.getElementById('Tchart').style.display="block";
      }
      else 
      {
      document.getElementById("countryname").innerHTML = "Meddle east";
      document.getElementById('barchart').style.display="block";
      document.getElementById('Echart').style.display="none";
      document.getElementById('Ichart').style.display="none";
      document.getElementById('Tchart').style.display="none";
      }
    }