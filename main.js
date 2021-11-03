$(document).ready(function(){

    
    // Slider 
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true,
            pager: false
        });
    }


    // Posts o Articulos.
    if(window.location.href.indexOf('index') > -1){
        var posts = [
            {
                title: 'Prueba de Titulo 1',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra eget magna vel posuere. Donec vitae dignissim mi, id efficitur turpis. Integer tincidunt, quam in dapibus molestie, sapien leo ultricies diam, imperdiet luctus nibh elit non erat. Vestibulum maximus fringilla sem non volutpat. Namaliquam sapien vel nunc viverra, sed feugiat diam dapibus. Ut at elit non augue vulputate commodo et eget orci. Duis ullamcorper sapien ac pretium dignissim. Morbi venenatis erat a dictum lacinia. Suspendisse laoreet ante ac dui egestas consectetur. Praesent commodo nunc metus, et congue urna fermentum eu. Maecenas sit amet mollis mi. Sed et tortor risus. Donec imperdiet magna non lectus auctor faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit ex neque, quis pellentesque metus gravida ut. Integer eu neque vel felis pretium  rutrum ac sed tortor.'
            },
            {   title: 'Prueba de Titulo 2',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra eget magna vel posuere. Donec vitae dignissim mi, id efficitur turpis. Integer tincidunt, quam in dapibus molestie, sapien leo ultricies diam, imperdiet luctus nibh elit non erat. Vestibulum maximus fringilla sem non volutpat. Namaliquam sapien vel nunc viverra, sed feugiat diam dapibus. Ut at elit non augue vulputate commodo et eget orci. Duis ullamcorper sapien ac pretium dignissim. Morbi venenatis erat a dictum lacinia. Suspendisse laoreet ante ac dui egestas consectetur. Praesent commodo nunc metus, et congue urna fermentum eu. Maecenas sit amet mollis mi. Sed et tortor risus. Donec imperdiet magna non lectus auctor faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit ex neque, quis pellentesque metus gravida ut. Integer eu neque vel felis pretium  rutrum ac sed tortor.'
            },
            {   title: 'Prueba de Titulo 3',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra eget magna vel posuere. Donec vitae dignissim mi, id efficitur turpis. Integer tincidunt, quam in dapibus molestie, sapien leo ultricies diam, imperdiet luctus nibh elit non erat. Vestibulum maximus fringilla sem non volutpat. Namaliquam sapien vel nunc viverra, sed feugiat diam dapibus. Ut at elit non augue vulputate commodo et eget orci. Duis ullamcorper sapien ac pretium dignissim. Morbi venenatis erat a dictum lacinia. Suspendisse laoreet ante ac dui egestas consectetur. Praesent commodo nunc metus, et congue urna fermentum eu. Maecenas sit amet mollis mi. Sed et tortor risus. Donec imperdiet magna non lectus auctor faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit ex neque, quis pellentesque metus gravida ut. Integer eu neque vel felis pretium  rutrum ac sed tortor.'
            },
            {   title: 'Prueba de Titulo 4',
                date: new Date(),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra eget magna vel posuere. Donec vitae dignissim mi, id efficitur turpis. Integer tincidunt, quam in dapibus molestie, sapien leo ultricies diam, imperdiet luctus nibh elit non erat. Vestibulum maximus fringilla sem non volutpat. Namaliquam sapien vel nunc viverra, sed feugiat diam dapibus. Ut at elit non augue vulputate commodo et eget orci. Duis ullamcorper sapien ac pretium dignissim. Morbi venenatis erat a dictum lacinia. Suspendisse laoreet ante ac dui egestas consectetur. Praesent commodo nunc metus, et congue urna fermentum eu. Maecenas sit amet mollis mi. Sed et tortor risus. Donec imperdiet magna non lectus auctor faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit ex neque, quis pellentesque metus gravida ut. Integer eu neque vel felis pretium  rutrum ac sed tortor.'
            },
            {   title: 'Prueba de Titulo 5',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra eget magna vel posuere. Donec vitae dignissim mi, id efficitur turpis. Integer tincidunt, quam in dapibus molestie, sapien leo ultricies diam, imperdiet luctus nibh elit non erat. Vestibulum maximus fringilla sem non volutpat. Namaliquam sapien vel nunc viverra, sed feugiat diam dapibus. Ut at elit non augue vulputate commodo et eget orci. Duis ullamcorper sapien ac pretium dignissim. Morbi venenatis erat a dictum lacinia. Suspendisse laoreet ante ac dui egestas consectetur. Praesent commodo nunc metus, et congue urna fermentum eu. Maecenas sit amet mollis mi. Sed et tortor risus. Donec imperdiet magna non lectus auctor faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit ex neque, quis pellentesque metus gravida ut. Integer eu neque vel felis pretium  rutrum ac sed tortor.'
            },
            {   title: 'Prueba de Titulo 6',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pharetra eget magna vel posuere. Donec vitae dignissim mi, id efficitur turpis. Integer tincidunt, quam in dapibus molestie, sapien leo ultricies diam, imperdiet luctus nibh elit non erat. Vestibulum maximus fringilla sem non volutpat. Namaliquam sapien vel nunc viverra, sed feugiat diam dapibus. Ut at elit non augue vulputate commodo et eget orci. Duis ullamcorper sapien ac pretium dignissim. Morbi venenatis erat a dictum lacinia. Suspendisse laoreet ante ac dui egestas consectetur. Praesent commodo nunc metus, et congue urna fermentum eu. Maecenas sit amet mollis mi. Sed et tortor risus. Donec imperdiet magna non lectus auctor faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed suscipit ex neque, quis pellentesque metus gravida ut. Integer eu neque vel felis pretium  rutrum ac sed tortor.'
            },
        ];

        posts.forEach((item, index) => {
            var post = ` 
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}
                </p>
                <a href="#" class="button-more">Leer Más</a>
            </article> 
            `;
            $('#posts').append(post);
        });
    }

    // Selector de tema

    var theme = $("#theme");

    $("#to-green").click(function(){
        theme.attr("href", "css/green.css")
    });
    
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css")
    });
    
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css")
    });

    // Scroll up

    $('.subir').click(function(e){
        e.preventDefault(); // Para que no nos rediriga a otra pagina y nos deje realizar la animacion.

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso

    $("#login form").submit(function(){
		var form_name = $("#form_name").val();

		localStorage.setItem("form_name", form_name);

	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");

		about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
		about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}

    // Acordeon

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

    // Reloj

    if(window.location.href.indexOf('reloj') > -1){

        setInterval(function(){
            var reloj = moment().format("hh:mm:ss");
            $("#reloj").html(reloj);
        }, 1000);
        
    }

    // Validacion
    if(window.location.href.indexOf('contact') > -1){
    
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        })
    }
});