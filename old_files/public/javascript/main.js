(function(){
    document.querySelectorAll( '.nav-tab' )
        .forEach( function( tab ){
            tab.addEventListener( 'click', function( event ){
                var subPage = event.target.dataset.page
                document.querySelector('.active').classList.remove('active')
                document.querySelector(`.${event.target.dataset.page}`).classList.add('active')
            })

        })


})()