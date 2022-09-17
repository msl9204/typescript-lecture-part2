$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );

$(["p", "t"]).text("hello");

const tag = $( "ul li" ).addClass(function( index ) {
    return "item-" + index;
});

$(tag).html(function (i: number) {
    console.log(this);
    return $(this).data('name') + '입니다';
});

/**
 * typescript에서 cjs 모듈 사용법
 *
 * import $ = require('jquery')
 * export = $
 *
 * import * as $ from 'jquery'
 * 이렇게 하면 다되는 형태 (cjs + es6)
 *
 * tsconfig.json에서
 * esModuleInterop: true 를 하면
 * cjs 모듈도 import React from 'react' 형태로 사용 가능
 *
 */
