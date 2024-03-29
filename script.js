"use strict";

/*const toggler = document.querySelectorAll('.toggler')
const branch = document.querySelectorAll('.branch')

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

toggler.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle("toggle");
        button.parentElement.classList.toggle("toggled");
    })
})*/

/*const textarea = document.querySelector('textarea');
textarea.addEventListener('keypress', e => {
    textarea.style.width = 'auto'
    let scrollx = e.target.scrollWidth;
    textarea.style.width = `${scrollx}px`
})*/

function hearsay(that) {
    that.parentElement.parentElement.classList.toggle('hide', that.classList.toggle('active'))
}

const everyting = document.querySelector('.everything')

function CreateRoot(name, what) {
    const root = document.createElement('div');
    const title = document.createElement('div');
    const box = document.createElement('div');
    const edit_box = document.createElement('input');
    const toglebuton = document.createElement('button');

    title.classList.add('titlethingyidkwhattocall');
    root.classList.add('rootObject');
    box.classList.add('box');
    edit_box.classList.add('editable-box')

    edit_box.addEventListener('focus', (event) => {
        box.classList.toggle('focus', true);
    });

    edit_box.addEventListener('blur', (event) => {
        box.classList.toggle('focus', false);
    });

    const iconSVG1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath1 = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );

    const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );

    toglebuton.classList.add('hidenbuton');

    iconSVG.classList.add('symbol');
    iconSVG.classList.width = 16;
    iconSVG.classList.height = 16;

    iconSVG1.classList.add('toggler');
    iconSVG1.classList.width = 16;
    iconSVG1.classList.height = 16;

    iconSVG1.appendChild(iconPath1);
    iconSVG.appendChild(iconPath);

    iconPath1.setAttribute('d', 'M8.76563 10.2892C8.37713 10.6818 7.74394 10.685 7.35139 10.2965L2.75504 5.7473C2.47767 5.47277 2.67207 5 3.06233 5V5C3.17438 5 3.28214 5.04306 3.36334 5.12027L7.99236 9.52185C8.03133 9.55891 8.09263 9.55851 8.13112 9.52095L12.6346 5.12545C12.717 5.04502 12.8276 5 12.9427 5V5C13.3347 5 13.532 5.4729 13.2563 5.75147L8.76563 10.2892Z');
    iconSVG1.classList.add('toggler');
    toglebuton.addEventListener('click', () => {
        iconSVG1.parentElement.parentElement.parentElement.classList.toggle('hide', iconSVG1.classList.toggle('active'))
    });

    if (what === 'obj') {
        iconPath.setAttribute('d', 'M6.6582 13.4023H6.22461C5.4707 13.4023 4.91016 13.2246 4.54297 12.8691C4.17578 12.5176 3.99219 11.9824 3.99219 11.2637V9.24805C3.99219 9.05664 3.9707 8.88672 3.92773 8.73828C3.88477 8.58594 3.80859 8.45898 3.69922 8.35742C3.59375 8.25195 3.45117 8.17188 3.27148 8.11719C3.0957 8.0625 2.87305 8.03516 2.60352 8.03516H2.35156V7.2207H2.60352C2.88867 7.2207 3.12109 7.19727 3.30078 7.15039C3.48047 7.10352 3.62109 7.0332 3.72266 6.93945C3.82422 6.8418 3.89453 6.71875 3.93359 6.57031C3.97266 6.42188 3.99219 6.24609 3.99219 6.04297V4.6543C3.99219 4.32617 4.03125 4.03125 4.10938 3.76953C4.1875 3.50391 4.31445 3.2793 4.49023 3.0957C4.66992 2.9082 4.90039 2.76563 5.18164 2.66797C5.4668 2.56641 5.81445 2.51562 6.22461 2.51562H6.6582V3.33594H6.3125C5.40625 3.33594 4.95312 3.77539 4.95312 4.6543V6.01953C4.95312 6.97266 4.54102 7.50977 3.7168 7.63086C4.54883 7.71289 4.96484 8.24805 4.96484 9.23633V11.2402C4.96484 12.1348 5.41406 12.582 6.3125 12.582H6.6582V13.4023ZM9.3418 2.51562H9.77539C10.5293 2.51562 11.0898 2.69336 11.457 3.04883C11.8242 3.40039 12.0078 3.93555 12.0078 4.6543V6.00781C12.0078 6.19922 12.0293 6.37109 12.0723 6.52344C12.1152 6.67188 12.1895 6.79883 12.2949 6.9043C12.4043 7.00586 12.5488 7.08398 12.7285 7.13867C12.9082 7.19336 13.1328 7.2207 13.4023 7.2207H13.6543V8.03516H13.4023C13.1172 8.03516 12.8828 8.05859 12.6992 8.10547C12.5195 8.15234 12.3789 8.22461 12.2773 8.32227C12.1758 8.41602 12.1055 8.53711 12.0664 8.68555C12.0273 8.83398 12.0078 9.00977 12.0078 9.21289V11.2637C12.0078 11.5918 11.9688 11.8867 11.8906 12.1484C11.8125 12.4141 11.6855 12.6387 11.5098 12.8223C11.334 13.0098 11.1035 13.1523 10.8184 13.25C10.5332 13.3516 10.1855 13.4023 9.77539 13.4023H9.3418V12.582H9.69336C10.5957 12.582 11.0469 12.1426 11.0469 11.2637V9.23633C11.0469 8.2832 11.459 7.74805 12.2832 7.63086C11.4512 7.54102 11.0352 7.00391 11.0352 6.01953V4.67773C11.0352 3.7832 10.5879 3.33594 9.69336 3.33594H9.3418V2.51562Z');
    } else if (what === 'arr') {
        iconPath.setAttribute('d', 'M6.3125 13.4023H3.42383V2.51562H6.3125V3.33594H4.39648V12.582H6.3125V13.4023ZM12.5762 13.4023H9.6875V12.582H11.5918V3.33594H9.6875V2.51562H12.5762V13.4023Z');
    }

    edit_box.setAttribute('type', 'text');
    edit_box.setAttribute('spellcheck', 'false');

    everyting.appendChild(root);
    edit_box.value = name;
    box.appendChild(edit_box);
    toglebuton.appendChild(iconSVG1);
    root.appendChild(title);
    title.appendChild(toglebuton);
    title.appendChild(iconSVG);
    title.appendChild(box);
    //root.style = 'rootObject'
    return root
}

function CreateBranch(color, parentnode, name, type, value, array, mpty) {
    const branch = document.createElement('div');
    const object = document.createElement('div');
    const title = document.createElement('div');
    const buttonorsometh = document.createElement('div');
    const val = document.createElement('span');
    var edit_box;
    if (!array) {
        edit_box = document.createElement('input');
    } else {
        edit_box = document.createElement('span');
    }
    const box = document.createElement('div');

    const iconSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const iconPath = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'path'
    );

    iconSVG.classList.add('symbol');
    iconSVG.classList.width = 16;
    iconSVG.classList.height = 16;

    iconSVG.appendChild(iconPath);

    branch.classList.add('branch');
    buttonorsometh.classList.add('boolonly');



    edit_box.classList.add('editable-box');

    if (type === Number) {
        if (!array) {
            edit_box.value = name;
            edit_box.setAttribute('type', 'text');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');

            edit_box.addEventListener('focus', (event) => {
                box.classList.toggle('focus', true);
            });

            edit_box.addEventListener('blur', (event) => {
                box.classList.toggle('focus', false);
            });
        } else {
            edit_box.appendChild(document.createTextNode(`Number (${name})`));
            box.classList.add('transparent-box');
        }

        iconPath.setAttribute('d', 'M7.24414 11H2.43359V10.0508H4.40234V4.46094L2.56836 5.45703L2.19336 4.58984L4.63086 3.30664H5.5332V10.0508H7.24414V11ZM13.9062 11H8.86133V10.0859L10.8418 8.11719C11.166 7.79688 11.4297 7.51953 11.6328 7.28516C11.8359 7.05078 11.9941 6.83789 12.1074 6.64648C12.2207 6.45117 12.2969 6.26758 12.3359 6.0957C12.375 5.92383 12.3945 5.73828 12.3945 5.53906C12.3945 5.35156 12.3691 5.17383 12.3184 5.00586C12.2676 4.83398 12.1895 4.68359 12.084 4.55469C11.9785 4.42578 11.8418 4.32422 11.6738 4.25C11.5059 4.17578 11.3047 4.13867 11.0703 4.13867C10.7461 4.13867 10.4512 4.21094 10.1855 4.35547C9.91992 4.5 9.67578 4.6875 9.45312 4.91797L8.89062 4.24414C9.17969 3.93945 9.51172 3.69531 9.88672 3.51172C10.2656 3.32813 10.7051 3.23633 11.2051 3.23633C11.5449 3.23633 11.8535 3.28711 12.1309 3.38867C12.4121 3.49023 12.6543 3.63672 12.8574 3.82812C13.0605 4.01953 13.2168 4.25391 13.3262 4.53125C13.4395 4.80859 13.4961 5.12109 13.4961 5.46875C13.4961 5.76172 13.457 6.0332 13.3789 6.2832C13.3008 6.5332 13.1816 6.7832 13.0215 7.0332C12.8652 7.2793 12.666 7.53516 12.4238 7.80078C12.1855 8.06641 11.9023 8.35742 11.5742 8.67383L10.1855 10.0273H13.9062V11Z');
        object.classList.add('Object');
        title.classList.add('variablethingyidkwhattocall');
        val.classList.add('valueNumber');
        val.setAttribute('contenteditable', 'true');
        val.setAttribute('wrap', 'off');
        val.setAttribute('spellcheck', 'false');
        val.appendChild(document.createTextNode(value));
    } else if (type === String) {
        if (!array) {
            edit_box.value = name;
            edit_box.setAttribute('type', 'text'); edit_box.setAttribute('type', 'text');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');

            edit_box.addEventListener('focus', (event) => {
                box.classList.toggle('focus', true);
            });

            edit_box.addEventListener('blur', (event) => {
                box.classList.toggle('focus', false);
            });
        } else {
            edit_box.appendChild(document.createTextNode(`String (${name})`));
            box.classList.add('transparent-box');
        }

        iconPath.setAttribute('d', 'M6.11914 11L6.0957 10.209C5.77539 10.5254 5.44922 10.7539 5.11719 10.8945C4.78906 11.0352 4.44336 11.1055 4.08008 11.1055C3.74414 11.1055 3.45703 11.0625 3.21875 10.9766C2.98047 10.8906 2.7832 10.7734 2.62695 10.625C2.47461 10.4727 2.36133 10.2949 2.28711 10.0918C2.2168 9.88867 2.18164 9.66797 2.18164 9.42969C2.18164 8.83984 2.40039 8.37891 2.83789 8.04688C3.2793 7.71094 3.92969 7.54297 4.78906 7.54297H6.00781V7.02734C6.00781 6.67969 5.89648 6.40234 5.67383 6.19531C5.45117 5.98438 5.11133 5.87891 4.6543 5.87891C4.32227 5.87891 3.99414 5.91602 3.66992 5.99023C3.34961 6.06445 3.01758 6.16992 2.67383 6.30664V5.38672C2.80273 5.33984 2.94531 5.29492 3.10156 5.25195C3.26172 5.20508 3.42969 5.16406 3.60547 5.12891C3.78125 5.09375 3.96484 5.06641 4.15625 5.04688C4.34766 5.02344 4.54102 5.01172 4.73633 5.01172C5.0918 5.01172 5.41211 5.05078 5.69727 5.12891C5.98242 5.20703 6.22266 5.32617 6.41797 5.48633C6.61719 5.64648 6.76953 5.84766 6.875 6.08984C6.98047 6.33203 7.0332 6.61719 7.0332 6.94531V11H6.11914ZM6.00781 8.32227H4.71289C4.45898 8.32227 4.24023 8.34766 4.05664 8.39844C3.87305 8.44922 3.72266 8.52148 3.60547 8.61523C3.48828 8.70898 3.40039 8.82227 3.3418 8.95508C3.28711 9.08398 3.25977 9.23047 3.25977 9.39453C3.25977 9.50781 3.27734 9.61719 3.3125 9.72266C3.34766 9.82422 3.4043 9.91602 3.48242 9.99805C3.56055 10.0762 3.66211 10.1387 3.78711 10.1855C3.91211 10.2324 4.06445 10.2559 4.24414 10.2559C4.47852 10.2559 4.74609 10.1855 5.04688 10.0449C5.35156 9.90039 5.67188 9.67383 6.00781 9.36523V8.32227ZM13.9648 7.95312C13.9648 8.44141 13.8965 8.87891 13.7598 9.26562C13.627 9.64844 13.4355 9.97461 13.1855 10.2441C12.9395 10.5098 12.6387 10.7148 12.2832 10.8594C11.9277 11 11.5273 11.0703 11.082 11.0703C10.7344 11.0703 10.3789 11.0371 10.0156 10.9707C9.65234 10.9043 9.29297 10.7988 8.9375 10.6543V2.7207H9.95703V5L9.91016 6.08984C10.2031 5.69531 10.5156 5.41797 10.8477 5.25781C11.1836 5.09375 11.543 5.01172 11.9258 5.01172C12.2617 5.01172 12.5566 5.08203 12.8105 5.22266C13.0645 5.36328 13.2773 5.5625 13.4492 5.82031C13.6211 6.07422 13.75 6.38281 13.8359 6.74609C13.9219 7.10547 13.9648 7.50781 13.9648 7.95312ZM12.9219 8C12.9219 7.69141 12.8984 7.4082 12.8516 7.15039C12.8086 6.89258 12.7383 6.67188 12.6406 6.48828C12.543 6.30469 12.418 6.16211 12.2656 6.06055C12.1133 5.95508 11.9316 5.90234 11.7207 5.90234C11.5918 5.90234 11.4609 5.92383 11.3281 5.9668C11.1953 6.00586 11.0566 6.07422 10.9121 6.17188C10.7715 6.26562 10.6211 6.39258 10.4609 6.55273C10.3047 6.70898 10.1367 6.9043 9.95703 7.13867V9.99219C10.1562 10.0703 10.3594 10.1328 10.5664 10.1797C10.7734 10.2227 10.9707 10.2441 11.1582 10.2441C11.3926 10.2441 11.6152 10.207 11.8262 10.1328C12.041 10.0586 12.2285 9.93555 12.3887 9.76367C12.5527 9.58789 12.6816 9.35742 12.7754 9.07227C12.873 8.7832 12.9219 8.42578 12.9219 8Z');
        object.classList.add('Object');
        title.classList.add('variablethingyidkwhattocall');
        val.classList.add('valueString');
        val.setAttribute('contenteditable', 'true');
        val.setAttribute('wrap', 'off');
        val.setAttribute('spellcheck', 'false');
        val.appendChild(document.createTextNode(value));
    } else if (type === Array) {
        if (!mpty) {
            title.classList.add('titlethingyidkwhattocall');

            const toglebuton = document.createElement('button');
            const iconSVG1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath1 = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );

            toglebuton.classList.add('hidenbuton');

            iconSVG1.classList.add('toggler');
            iconSVG1.classList.width = 16;
            iconSVG1.classList.height = 16;

            iconSVG1.appendChild(iconPath1);

            toglebuton.appendChild(iconSVG1);

            if (color === 1) {
                iconSVG1.classList.toggle('invert', false);
            } else if (color === -1) {
                iconSVG1.classList.toggle('invert', true);
            }

            iconPath1.setAttribute('d', 'M8.76563 10.2892C8.37713 10.6818 7.74394 10.685 7.35139 10.2965L2.75504 5.7473C2.47767 5.47277 2.67207 5 3.06233 5V5C3.17438 5 3.28214 5.04306 3.36334 5.12027L7.99236 9.52185C8.03133 9.55891 8.09263 9.55851 8.13112 9.52095L12.6346 5.12545C12.717 5.04502 12.8276 5 12.9427 5V5C13.3347 5 13.532 5.4729 13.2563 5.75147L8.76563 10.2892Z');
            iconSVG1.classList.add('toggler');
            toglebuton.addEventListener('click', () => {
                iconSVG1.parentElement.parentElement.parentElement.classList.toggle('hide', iconSVG1.classList.toggle('active'))
            });

            title.appendChild(toglebuton);
        } else {
            title.classList.add('variablethingyidkwhattocall');
        }

        if (!array) {
            edit_box.value = name;
            edit_box.setAttribute('type', 'text'); edit_box.setAttribute('type', 'text');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');

            edit_box.addEventListener('focus', (event) => {
                box.classList.toggle('focus', true);
            });

            edit_box.addEventListener('blur', (event) => {
                box.classList.toggle('focus', false);
            });
        } else {
            edit_box.appendChild(document.createTextNode(`Array (${name})`));
            box.classList.add('transparent-box');
        }

        iconPath.setAttribute('d', 'M6.3125 13.4023H3.42383V2.51562H6.3125V3.33594H4.39648V12.582H6.3125V13.4023ZM12.5762 13.4023H9.6875V12.582H11.5918V3.33594H9.6875V2.51562H12.5762V13.4023Z');
        object.classList.add('Object');
    } else if (type === Object) {
        if (!mpty) {
            title.classList.add('titlethingyidkwhattocall');

            const toglebuton = document.createElement('button');
            const iconSVG1 = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            const iconPath1 = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'path'
            );

            toglebuton.classList.add('hidenbuton');

            iconSVG1.classList.add('toggler');
            iconSVG1.classList.width = 16;
            iconSVG1.classList.height = 16;

            iconSVG1.appendChild(iconPath1);
            toglebuton.appendChild(iconSVG1);

            iconPath1.setAttribute('d', 'M8.76563 10.2892C8.37713 10.6818 7.74394 10.685 7.35139 10.2965L2.75504 5.7473C2.47767 5.47277 2.67207 5 3.06233 5V5C3.17438 5 3.28214 5.04306 3.36334 5.12027L7.99236 9.52185C8.03133 9.55891 8.09263 9.55851 8.13112 9.52095L12.6346 5.12545C12.717 5.04502 12.8276 5 12.9427 5V5C13.3347 5 13.532 5.4729 13.2563 5.75147L8.76563 10.2892Z');

            if (color === 1) {
                iconSVG1.classList.toggle('invert', false);
            } else if (color === -1) {
                iconSVG1.classList.toggle('invert', true);
            }

            iconSVG1.classList.add('toggler');
            toglebuton.addEventListener('click', () => {
                toglebuton.parentElement.parentElement.classList.toggle('hide', iconSVG1.classList.toggle('active'));
            });

            toglebuton.addEventListener('mousepress', () => {
                toglebuton.blur();
            })

            title.appendChild(toglebuton);
        } else {
            title.classList.add('variablethingyidkwhattocall');
        }

        if (!array) {
            edit_box.value = name;
            edit_box.setAttribute('type', 'text'); edit_box.setAttribute('type', 'text');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');

            edit_box.addEventListener('focus', (event) => {
                box.classList.toggle('focus', true);
            });

            edit_box.addEventListener('blur', (event) => {
                box.classList.toggle('focus', false);
            });
        } else {
            edit_box.appendChild(document.createTextNode(`Object (${name})`));
            box.classList.add('transparent-box');
        }

        iconPath.setAttribute('d', 'M6.6582 13.4023H6.22461C5.4707 13.4023 4.91016 13.2246 4.54297 12.8691C4.17578 12.5176 3.99219 11.9824 3.99219 11.2637V9.24805C3.99219 9.05664 3.9707 8.88672 3.92773 8.73828C3.88477 8.58594 3.80859 8.45898 3.69922 8.35742C3.59375 8.25195 3.45117 8.17188 3.27148 8.11719C3.0957 8.0625 2.87305 8.03516 2.60352 8.03516H2.35156V7.2207H2.60352C2.88867 7.2207 3.12109 7.19727 3.30078 7.15039C3.48047 7.10352 3.62109 7.0332 3.72266 6.93945C3.82422 6.8418 3.89453 6.71875 3.93359 6.57031C3.97266 6.42188 3.99219 6.24609 3.99219 6.04297V4.6543C3.99219 4.32617 4.03125 4.03125 4.10938 3.76953C4.1875 3.50391 4.31445 3.2793 4.49023 3.0957C4.66992 2.9082 4.90039 2.76563 5.18164 2.66797C5.4668 2.56641 5.81445 2.51562 6.22461 2.51562H6.6582V3.33594H6.3125C5.40625 3.33594 4.95312 3.77539 4.95312 4.6543V6.01953C4.95312 6.97266 4.54102 7.50977 3.7168 7.63086C4.54883 7.71289 4.96484 8.24805 4.96484 9.23633V11.2402C4.96484 12.1348 5.41406 12.582 6.3125 12.582H6.6582V13.4023ZM9.3418 2.51562H9.77539C10.5293 2.51562 11.0898 2.69336 11.457 3.04883C11.8242 3.40039 12.0078 3.93555 12.0078 4.6543V6.00781C12.0078 6.19922 12.0293 6.37109 12.0723 6.52344C12.1152 6.67188 12.1895 6.79883 12.2949 6.9043C12.4043 7.00586 12.5488 7.08398 12.7285 7.13867C12.9082 7.19336 13.1328 7.2207 13.4023 7.2207H13.6543V8.03516H13.4023C13.1172 8.03516 12.8828 8.05859 12.6992 8.10547C12.5195 8.15234 12.3789 8.22461 12.2773 8.32227C12.1758 8.41602 12.1055 8.53711 12.0664 8.68555C12.0273 8.83398 12.0078 9.00977 12.0078 9.21289V11.2637C12.0078 11.5918 11.9688 11.8867 11.8906 12.1484C11.8125 12.4141 11.6855 12.6387 11.5098 12.8223C11.334 13.0098 11.1035 13.1523 10.8184 13.25C10.5332 13.3516 10.1855 13.4023 9.77539 13.4023H9.3418V12.582H9.69336C10.5957 12.582 11.0469 12.1426 11.0469 11.2637V9.23633C11.0469 8.2832 11.459 7.74805 12.2832 7.63086C11.4512 7.54102 11.0352 7.00391 11.0352 6.01953V4.67773C11.0352 3.7832 10.5879 3.33594 9.69336 3.33594H9.3418V2.51562Z')
        object.classList.add('Object');
    } else if (type === Boolean) {
        const button = document.createElement('button');
        button.classList.add('button-boolean');

        const buttonsvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        const buttonsvgpath = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'path'
        );

        buttonsvgpath.setAttribute('d', 'M12.727 2.374a.697.697 0 0 0-.183.14c-.038.046-1.124 2.192-2.413 4.771a453.14 453.14 0 0 1-2.361 4.688c-.009 0-.998-.785-2.197-1.744-1.2-.96-2.233-1.778-2.297-1.819-.248-.156-.526-.102-.746.146-.232.26-.273.53-.114.758.101.147 4.73 3.857 4.928 3.95.317.15.66.145.996-.014.367-.175.166.191 2.872-5.221 1.76-3.52 2.442-4.909 2.456-5 .038-.256-.099-.469-.394-.613-.206-.101-.401-.116-.547-.042');

        button.addEventListener('click', () => {
            buttonsvg.classList.toggle('toggle');
        })

        buttonsvg.classList.toggle('toggle', value);

        buttonsvg.classList.add('button-icon');

        buttonsvg.appendChild(buttonsvgpath);

        button.appendChild(buttonsvg);

        if (!array) {
            edit_box.value = name;
            edit_box.setAttribute('type', 'text'); edit_box.setAttribute('type', 'text');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');

            edit_box.addEventListener('focus', (event) => {
                box.classList.toggle('focus', true);
            });

            edit_box.addEventListener('blur', (event) => {
                box.classList.toggle('focus', false);
            });
        } else {
            edit_box.appendChild(document.createTextNode(`Boolean (${name})`));
            box.classList.add('transparent-box');
        }

        if (color === 1) {
            button.classList.toggle('invert', false);
        } else if (color === -1) {
            button.classList.toggle('invert', true);
        }

        iconPath.setAttribute('d', 'M4.78003 7.5874C4.78003 7.83805 4.74422 8.05469 4.67261 8.2373C4.60278 8.41992 4.50431 8.5721 4.3772 8.69385C4.25187 8.8138 4.10327 8.90332 3.9314 8.9624C3.75952 9.01969 3.57243 9.04834 3.37012 9.04834C3.17139 9.04834 2.98608 9.03312 2.81421 9.00269C2.64412 8.97404 2.4812 8.93465 2.32544 8.88452V5.20532H2.98071V6.09692L2.95386 6.63403C3.05233 6.50692 3.16691 6.40487 3.29761 6.32788C3.43009 6.2509 3.58854 6.2124 3.77295 6.2124C3.93408 6.2124 4.07731 6.24463 4.20264 6.30908C4.32796 6.37354 4.4327 6.46574 4.51685 6.58569C4.60278 6.70386 4.66813 6.84798 4.71289 7.01807C4.75765 7.18636 4.78003 7.37614 4.78003 7.5874ZM4.09253 7.61426C4.09253 7.46387 4.08179 7.33586 4.0603 7.23022C4.03882 7.12459 4.00749 7.03776 3.96631 6.96973C3.92692 6.90169 3.87769 6.85246 3.8186 6.82202C3.76131 6.78979 3.69507 6.77368 3.61987 6.77368C3.50887 6.77368 3.40234 6.81844 3.30029 6.90796C3.20003 6.99748 3.09351 7.11922 2.98071 7.27319V8.46558C3.03263 8.48527 3.09619 8.50138 3.17139 8.51392C3.24837 8.52645 3.32625 8.53271 3.40503 8.53271C3.50887 8.53271 3.60286 8.51123 3.68701 8.46826C3.77295 8.42529 3.84546 8.36442 3.90454 8.28564C3.96541 8.20687 4.01196 8.11108 4.04419 7.99829C4.07642 7.88371 4.09253 7.7557 4.09253 7.61426ZM7.80664 7.61426C7.80664 7.8291 7.7762 8.02604 7.71533 8.20508C7.65446 8.38232 7.56673 8.53451 7.45215 8.66162C7.33757 8.78874 7.19702 8.88721 7.03052 8.95703C6.86401 9.02686 6.67424 9.06177 6.46118 9.06177C6.25887 9.06177 6.07804 9.03223 5.9187 8.97314C5.75936 8.91406 5.62419 8.82633 5.51318 8.70996C5.40218 8.5918 5.31714 8.44499 5.25806 8.26953C5.19897 8.09229 5.16943 7.88639 5.16943 7.65186C5.16943 7.43522 5.19987 7.23828 5.26074 7.06104C5.3234 6.88379 5.41203 6.7325 5.52661 6.60718C5.64299 6.48185 5.78442 6.38517 5.95093 6.31714C6.11743 6.24731 6.30542 6.2124 6.51489 6.2124C6.71899 6.2124 6.90072 6.24284 7.06006 6.30371C7.2194 6.36279 7.35457 6.45142 7.46558 6.56958C7.57658 6.68774 7.66073 6.83455 7.71802 7.01001C7.7771 7.18368 7.80664 7.38509 7.80664 7.61426ZM7.12451 7.63037C7.12451 7.34749 7.0708 7.13534 6.96338 6.9939C6.85775 6.85067 6.70109 6.77905 6.49341 6.77905C6.37882 6.77905 6.28125 6.80143 6.20068 6.84619C6.12012 6.89095 6.05387 6.95272 6.00195 7.03149C5.95003 7.10848 5.91154 7.19889 5.88647 7.30273C5.8632 7.40658 5.85156 7.51758 5.85156 7.63574C5.85156 7.92041 5.90885 8.13525 6.02344 8.28027C6.13802 8.4235 6.29468 8.49512 6.49341 8.49512C6.60262 8.49512 6.69751 8.47363 6.77808 8.43066C6.85864 8.3859 6.92399 8.32503 6.97412 8.24805C7.02425 8.16927 7.06185 8.07707 7.08691 7.97144C7.11198 7.8658 7.12451 7.75212 7.12451 7.63037ZM10.8306 7.61426C10.8306 7.8291 10.8001 8.02604 10.7393 8.20508C10.6784 8.38232 10.5907 8.53451 10.4761 8.66162C10.3615 8.78874 10.2209 8.88721 10.0544 8.95703C9.88794 9.02686 9.69816 9.06177 9.48511 9.06177C9.2828 9.06177 9.10197 9.03223 8.94263 8.97314C8.78328 8.91406 8.64811 8.82633 8.53711 8.70996C8.42611 8.5918 8.34106 8.44499 8.28198 8.26953C8.2229 8.09229 8.19336 7.88639 8.19336 7.65186C8.19336 7.43522 8.2238 7.23828 8.28467 7.06104C8.34733 6.88379 8.43595 6.7325 8.55054 6.60718C8.66691 6.48185 8.80835 6.38517 8.97485 6.31714C9.14136 6.24731 9.32935 6.2124 9.53882 6.2124C9.74292 6.2124 9.92464 6.24284 10.084 6.30371C10.2433 6.36279 10.3785 6.45142 10.4895 6.56958C10.6005 6.68774 10.6847 6.83455 10.7419 7.01001C10.801 7.18368 10.8306 7.38509 10.8306 7.61426ZM10.1484 7.63037C10.1484 7.34749 10.0947 7.13534 9.9873 6.9939C9.88167 6.85067 9.72502 6.77905 9.51733 6.77905C9.40275 6.77905 9.30518 6.80143 9.22461 6.84619C9.14404 6.89095 9.0778 6.95272 9.02588 7.03149C8.97396 7.10848 8.93547 7.19889 8.9104 7.30273C8.88713 7.40658 8.87549 7.51758 8.87549 7.63574C8.87549 7.92041 8.93278 8.13525 9.04736 8.28027C9.16195 8.4235 9.3186 8.49512 9.51733 8.49512C9.62655 8.49512 9.72144 8.47363 9.802 8.43066C9.88257 8.3859 9.94792 8.32503 9.99805 8.24805C10.0482 8.16927 10.0858 8.07707 10.1108 7.97144C10.1359 7.8658 10.1484 7.75212 10.1484 7.63037ZM12.2781 5.71558H11.5073V5.20532H12.9495V8.48975H13.7363V9H11.4133V8.48975H12.2781V5.71558Z');
        object.classList.add('Object');
        title.classList.add('variablethingyidkwhattocall');
        buttonorsometh.appendChild(button);
        /*val.classList.add('valueString');
        val.setAttribute('contenteditable', 'true');
        val.setAttribute('wrap', 'off');
        val.setAttribute('spellcheck', 'false');
        val.appendChild(document.createTextNode(value));*/
        object.classList.add('Boolean');
    } else if (type === 0) {
        if (!array) {
            edit_box.value = name;
            edit_box.setAttribute('type', 'text'); edit_box.setAttribute('type', 'text');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');

            edit_box.addEventListener('focus', (event) => {
                box.classList.toggle('focus', true);
            });

            edit_box.addEventListener('blur', (event) => {
                box.classList.toggle('focus', false);
            });
        } else {
            edit_box.appendChild(document.createTextNode(`Null (${name})`));
            box.classList.add('transparent-box');
        }

        iconPath.setAttribute('d', 'M3.95288 9V7.22217C3.95288 6.92318 3.84188 6.77368 3.61987 6.77368C3.50887 6.77368 3.40234 6.81844 3.30029 6.90796C3.20003 6.99748 3.09351 7.11922 2.98071 7.27319V9H2.32544V6.27148H2.89209L2.9082 6.67432C2.9637 6.60449 3.021 6.54093 3.08008 6.48364C3.14095 6.42635 3.2063 6.37801 3.27612 6.33862C3.34595 6.29744 3.42114 6.26611 3.50171 6.24463C3.58228 6.22314 3.67269 6.2124 3.77295 6.2124C3.9126 6.2124 4.03434 6.23568 4.13818 6.28223C4.24202 6.32699 4.32886 6.39144 4.39868 6.47559C4.46851 6.55794 4.52043 6.6582 4.55444 6.77637C4.59025 6.89274 4.60815 7.02344 4.60815 7.16846V9H3.95288ZM5.99927 6.27148V8.04932C5.99927 8.19792 6.02702 8.31071 6.08252 8.3877C6.13802 8.46289 6.22217 8.50049 6.33496 8.50049C6.44417 8.50049 6.54891 8.45573 6.64917 8.36621C6.75122 8.2749 6.85864 8.15226 6.97144 7.99829V6.27148H7.62671V9H7.06006L7.04395 8.59717C6.98665 8.66699 6.92847 8.73055 6.86938 8.78784C6.8103 8.84513 6.74585 8.89437 6.67603 8.93555C6.60799 8.97493 6.5328 9.00537 6.45044 9.02686C6.36987 9.05013 6.28035 9.06177 6.18188 9.06177C6.04224 9.06177 5.9196 9.03939 5.81396 8.99463C5.71012 8.94808 5.62329 8.88273 5.55347 8.79858C5.48364 8.71444 5.43083 8.61418 5.39502 8.4978C5.361 8.37964 5.34399 8.24805 5.34399 8.10303V6.27148H5.99927ZM9.25415 5.71558H8.4834V5.20532H9.92554V8.48975H10.7124V9H8.3894V8.48975H9.25415V5.71558ZM12.2781 5.71558H11.5073V5.20532H12.9495V8.48975H13.7363V9H11.4133V8.48975H12.2781V5.71558Z');
        object.classList.add('Object');
        title.classList.add('variablethingyidkwhattocall');
    }

    if (color === 1) {
        iconSVG.classList.toggle('invert', false);
        box.classList.toggle('invert', false);
        val.classList.toggle('invert', false);
        object.classList.toggle('invert', true);
    } else if (color === -1) {
        iconSVG.classList.toggle('invert', true);
        box.classList.toggle('invert', true);
        val.classList.toggle('invert', true);
        object.classList.toggle('invert', false);
    }

    box.appendChild(edit_box);

    buttonorsometh.appendChild(val);
    title.appendChild(iconSVG);
    title.appendChild(box);
    title.appendChild(buttonorsometh);
    object.appendChild(title);
    branch.appendChild(object);
    parentnode.appendChild(branch);

    return object
}

function GoofyAhhDrake(parse) {
    var number = 0;
    for (const key1 in parse) {
        number++;
    }

    return number
}

function GoofyAhhUncleProductions(parse, parent, numba, array) {
    for (const key in parse) {
        //if (parse.hasOwnProperty(key)) {

        if (typeof parse[key] == 'boolean') {
            CreateBranch(numba, parent, key, Boolean, parse[key], array);
        } else if (parse[key] == undefined) {
            CreateBranch(numba, parent, key, 0, parse[key], array);
        } else if (parse[key] instanceof Array) {
            if (GoofyAhhDrake(parse[key]) === 0) {
                var parent2 = CreateBranch(numba, parent, key, Array, parse[key], array, true);
            } else {
                var parent2 = CreateBranch(numba, parent, key, Array, parse[key], array, false);
            }
            e333kxxx033k(parse[key], parent2, -numba, true);
        } else if (typeof parse[key] == 'number') {
            CreateBranch(numba, parent, key, Number, parse[key], array);
        } else if (typeof parse[key] == 'string') {
            CreateBranch(numba, parent, key, String, parse[key], array);
        } else if (typeof parse[key] == 'object') {
            if (GoofyAhhDrake(parse[key]) === 0) {
                var parent2 = CreateBranch(numba, parent, key, Object, parse[key], array, true);
            } else {
                var parent2 = CreateBranch(numba, parent, key, Object, parse[key], array, false);
            }
            e333kxxx033k(parse[key], parent2, -numba, false);
        } else {
            //console.log(key, parse[key]);
        }
        //}
    }
}

function e333kxxx033k(ar, parent, numba, array) {
    for (const key1 in ar) {
        //if (ar.hasOwnProperty(key1)) {
        if (typeof ar[key1] == 'boolean') {
            CreateBranch(numba, parent, key1, Boolean, ar[key1], array);
        } else if (ar[key1] == undefined) {
            CreateBranch(numba, parent, key1, 0, ar[key1], array);
        } else if (ar[key1] instanceof Array) {
            if (GoofyAhhDrake(ar[key1]) === 0) {
                var parent2 = CreateBranch(numba, parent, key1, Array, ar[key1], array, true);
            } else {
                var parent2 = CreateBranch(numba, parent, key1, Array, ar[key1], array, false);
            }
            e333kxxx033k(ar[key1], parent2, -numba, true);
        } else if (typeof ar[key1] == 'number') {
            CreateBranch(numba, parent, key1, Number, ar[key1], array);
        } else if (typeof ar[key1] == 'string') {
            CreateBranch(numba, parent, key1, String, ar[key1], array);
        } else if (typeof ar[key1] == 'object') {
            if (GoofyAhhDrake(ar[key1]) === 0) {
                var parent2 = CreateBranch(numba, parent, key1, Object, ar[key1], array, true);
            } else {
                var parent2 = CreateBranch(numba, parent, key1, Object, ar[key1], array, false);
            }
            e333kxxx033k(ar[key1], parent2, -numba, false);
        } else {
            //console.log(key1, ar[key1]);
        }
        //}
    }
}

function PromptImport() {
    const blurthingy = document.querySelector('.everything');
    const promptwindow = document.querySelector('.promptwindow');
    const importwindow = document.querySelector('.importwindow');

    blurthingy.classList.toggle('blur', true)
    promptwindow.classList.toggle('hidden', false)
    importwindow.classList.toggle('hidden', false)
}

function ImportFile() {
    let input = document.createElement('input');
    input.setAttribute('multiple', 'multiple');
    input.accept = '.json'
    input.type = 'file';

    input.onchange = _ => {
        // you can use this method to get file and perform respective operations
        let files = Array.from(input.files);

        files.forEach(file => {
            const reader = new FileReader();
            reader.readAsText(file);

            reader.addEventListener('load', () => {
                var parent;
                //                console.log(reader.result);

                const parse = JSON.parse(reader.result);
                console.log(parse)
                /*JSON.parse(reader.result, (key, value) => {
                    console.log(key, value);
                    console.log(typeof value)
                });*/

                if (parse instanceof Array) {
                    console.log('Array');
                    parent = CreateRoot(file.name, 'arr');
                    GoofyAhhUncleProductions(parse, parent, -1, true);
                } else if (parse instanceof Object) {
                    console.log('Object');
                    parent = CreateRoot(file.name, 'obj');
                    GoofyAhhUncleProductions(parse, parent, -1, false);
                }
            })
        });
    };

    input.click();
}