$( function () {
  $( '.js-btn' ).on('click', function () {        // js-btnクラスをクリックすると、
    $( 'body , .l-sidebar' ).toggleClass( 'is-open' ); // メニューとバーガーの線にopenクラスをつけ外しする
 } );
});