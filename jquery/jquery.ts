

// removeClass(className_function?: string | string[] ((this: TElement, index: number, className: string) => string)): this;

$( "p" ).removeClass( "myClass noClass" ).addClass( "yourClass" );
/**
 * typescript 에서 첫번째 매개변수가 this면
 * 없는거랑 똑같다
 *
 * this를 타이핑 해주는 역할만 함
 */

document.querySelector('h1')?.addEventListener('click', function () {
    console.log(this)
});

$( "p" ).removeClass( (index, className) => {return 'myClass'} ).addClass( "yourClass" );


interface zQuery<T> {
    text(param?: string | number | boolean | ((this: T, index: number) => string | number | boolean)): this
    html(param: string | Document | DocumentFragment): void
}

const $tag: zQuery<HTMLElement> = $(["p", "t"]) as unknown as zQuery<HTMLElement>

$tag.text('123')
$tag.text(123)
$tag.text(function (index) {
    console.log(this, index)
    return true
});
$tag.text().html(document)


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
 */

/**
 * declare namespace Jquery {
 *     const a: string
 *     const b: string
 *     const c: string
 * }
 *
 * 전역으로 사용하는 script 만들때 사용한다.
 */
