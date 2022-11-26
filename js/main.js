$(document).ready(function(){

    //initialising fullpage.js in the jQuery way
    $('#fullpage').fullpage({
        sectionsColor: ['#ff5f45', '#0798ec', '#fc6c7c', '#fec401'],
        anchors: ['Premiere', 'Seconde', '3eme', '4eme'],
        menu: '#menu',
        navigation: true,
        slidesNavigation: true,

        onLeave: function(origin, destination, direction, trigger){
            var params = {
                origin: origin,
                destination:destination,
                direction: direction,
                trigger: trigger
            };

            // console.log("--- onLeave ---");
            // console.log(params);

            if (params.destination.isLast){
                console.log("dernière page !")
            }

            $( "#menu" ).find("a").removeClass("active-link");

            if (params.destination.anchor === "Premiere"){
                $( "#menu" ).find("a.id_1").addClass("active-link");

            }else if (params.destination.anchor === "Seconde"){
                $( "#menu" ).find("a.id_2").addClass("active-link");

            }else if (params.destination.anchor === "3eme"){
                $( "#menu" ).find("a.id_3").addClass("active-link");

            }else if (params.destination.anchor === "4eme"){
                $( "#menu" ).find("a.id_4").addClass("active-link");
            }

            // if (params.direction === "up"){
            //     console.log("Monté !")
            // }

            // if (params.direction === "down"){
            //     console.log("Descendu !")
            // }
        },

        onSlideLeave: function(section, origin, destination, direction, trigger){
            var params = {
                section: section,
                origin: origin,
                destination: destination,
                direction: direction,
                trigger: trigger
            };

            // console.log("--- onSlideLeave ---");
            // console.log(params);

            if (params.destination.isLast){
                console.log("dernière slide !")
            }
        }
    });

    // calling fullpage.js methods using jQuery
    $('#moveSectionUp').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionUp();
    });

    $('#moveSectionDown').click(function(e){
        e.preventDefault();
        $.fn.fullpage.moveSectionDown();
    });

    document.querySelector('#link1_0').addEventListener('click', function(e){
		e.preventDefault();
		fullpage_api.moveTo(2, 1);
	});

    document.querySelector('#link2_1').addEventListener('click', function(e){
		e.preventDefault();
		fullpage_api.moveTo(3, 2);
	});

    document.querySelector('#link3_2').addEventListener('click', function(e){
		e.preventDefault();
		fullpage_api.silentMoveTo(4, 0);
	});

    document.querySelector('#link4_0').addEventListener('click', function(e){
		e.preventDefault();
		fullpage_api.silentMoveTo(1, 0);
	});


    $( "#menu" ).find("a").click(function() {
        $( "#menu" ).find("a").removeClass("active-link");
        $(this).addClass("active-link");
    });
    
});