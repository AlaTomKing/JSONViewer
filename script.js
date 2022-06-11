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

const everyting = document.querySelector('#everything')

function CreateRoot(name, what) {
    const root = document.createElement('div');
    const title = document.createElement('div');
    const symbol = document.createElement('img');
    const img = document.createElement('img');
    const box = document.createElement('div');
    const edit_box = document.createElement('span');

    title.classList.add('titlethingyidkwhattocall');
    root.classList.add('rootObject');
    img.classList.add('toggler');
    symbol.classList.add('symbol');
    box.classList.add('box');
    edit_box.classList.add('editable-box')

    if (what === 'obj') {
        symbol.setAttribute('src', 'value/object.svg');
    } else if (what === 'arr') {
        symbol.setAttribute('src', 'value/array.svg');
    }

    img.setAttribute('src', 'arrow.svg');
    edit_box.setAttribute('contenteditable', 'true');
    edit_box.setAttribute('spellcheck', 'false');

    everyting.appendChild(root);
    edit_box.appendChild(document.createTextNode(name));
    box.appendChild(edit_box);
    root.appendChild(title);
    title.appendChild(img);
    title.appendChild(symbol);
    title.appendChild(box);
    //root.style = 'rootObject'
    return root
}

function CreateBranch(color, parentnode, name, type, value, array) {
    const branch = document.createElement('div');
    const object = document.createElement('div');
    const title = document.createElement('div');
    const buttonorsometh = document.createElement('div');
    const val = document.createElement('span');
    const edit_box = document.createElement('span');
    const box = document.createElement('div');

    const symbol = document.createElement('img');

    branch.classList.add('branch');
    symbol.classList.add('symbol');
    buttonorsometh.classList.add('buttonsorsomething');

    edit_box.classList.add('editable-box');

    if (type === Number) {
        if (!array) {
            edit_box.appendChild(document.createTextNode(name));
            edit_box.setAttribute('contenteditable', 'true');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');
        } else {
            edit_box.appendChild(document.createTextNode(`${name}: Number`));
            box.classList.add('transparent-box');
        }
        object.classList.add('Object');
        title.classList.add('variablethingyidkwhattocall');
        symbol.setAttribute('src', 'value/number.svg')
        val.classList.add('valueNumber');
        val.setAttribute('contenteditable', 'true');
        val.setAttribute('wrap', 'off');
        val.setAttribute('spellcheck', 'false');
        val.appendChild(document.createTextNode(value));
    } else if (type === String) {
        if (!array) {
            edit_box.appendChild(document.createTextNode(name));
            edit_box.setAttribute('contenteditable', 'true');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');
        } else {
            edit_box.appendChild(document.createTextNode(`${name}: String`));
            box.classList.add('transparent-box');
        }

        symbol.setAttribute('src', 'value/string.svg')
        object.classList.add('Object');
        title.classList.add('variablethingyidkwhattocall');
        val.classList.add('valueString');
        val.setAttribute('contenteditable', 'true');
        val.setAttribute('wrap', 'off');
        val.setAttribute('spellcheck', 'false');
        val.appendChild(document.createTextNode(value));
    } else if (type === Array) {
        const img = document.createElement('img');
        img.setAttribute('src', 'arrow.svg');
        img.addEventListener('click', () => {
            img.parentElement.parentElement.classList.toggle('hide', img.classList.toggle('active'))
        })

        if (!array) {
            edit_box.appendChild(document.createTextNode(name));
            edit_box.setAttribute('contenteditable', 'true');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');
        } else {
            edit_box.appendChild(document.createTextNode(`${name}: Array`));
            box.classList.add('transparent-box');
        }

        symbol.setAttribute('src', 'value/array.svg')
        object.classList.add('Object');
        title.classList.add('titlethingyidkwhattocall');
        title.appendChild(img);
    } else if (type === Object) {
        const img = document.createElement('img');
        img.setAttribute('src', 'arrow.svg');
        img.addEventListener('click', () => {
            img.parentElement.parentElement.classList.toggle('hide', img.classList.toggle('active'))
        })

        if (!array) {
            edit_box.appendChild(document.createTextNode(name));
            edit_box.setAttribute('contenteditable', 'true');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');
        } else {
            edit_box.appendChild(document.createTextNode(`${name}: Object`));
            box.classList.add('transparent-box');
        }

        symbol.setAttribute('src', 'value/object.svg')
        object.classList.add('Object');
        title.classList.add('titlethingyidkwhattocall');
        title.appendChild(img);
    } else if (type === 0) {
        if (!array) {
            edit_box.appendChild(document.createTextNode(name));
            edit_box.setAttribute('contenteditable', 'true');
            edit_box.setAttribute('spellcheck', 'false');
            box.classList.add('box');
        } else {
            edit_box.appendChild(document.createTextNode(`${name}: Null`));
            box.classList.add('transparent-box');
        }
        object.classList.add('Object');
        title.classList.add('variablethingyidkwhattocall');
        symbol.setAttribute('src', 'value/null.svg')
    }

    if (color === 1) {
        symbol.classList.toggle('invert', false);
        box.classList.toggle('invert', false);
        val.classList.toggle('invert', false);
        object.classList.toggle('invert', true);
    } else if (color === -1) {
        symbol.classList.toggle('invert', true);
        box.classList.toggle('invert', true);
        val.classList.toggle('invert', true);
        object.classList.toggle('invert', false);
    }

    box.appendChild(edit_box);

    buttonorsometh.appendChild(val);
    title.appendChild(symbol);
    title.appendChild(box);
    title.appendChild(buttonorsometh);
    object.appendChild(title);
    branch.appendChild(object);
    parentnode.appendChild(branch);

    return object
}

function GoofyAhhUncleProductions(parse, parent, numba, array) {
    for (const key in parse) {
        //if (parse.hasOwnProperty(key)) {

        if (!parse[key]) {
            if (parse[key]) {
                CreateBranch(numba, parent, key, 0, parse[key], array);
            } else {
                CreateBranch(numba, parent, key, 0, parse[key], array);
            }

        } else if (parse[key] instanceof Array) {
            var parent2 = CreateBranch(numba, parent, key, Array, parse[key], array);
            e333kxxx033k(parse[key], parent2, -numba, true);
        } else if (typeof parse[key] == 'object') {
            var parent2 = CreateBranch(numba, parent, key, Object, parse[key], array);
            e333kxxx033k(parse[key], parent2, -numba, false);
        } else if (typeof parse[key] == 'number') {
            CreateBranch(numba, parent, key, Number, parse[key], array);
        } else if (typeof parse[key] == 'string') {
            CreateBranch(numba, parent, key, String, parse[key], array);
        } else {
            console.log(key, parse[key]);
        }
        //}
    }
}

function e333kxxx033k(ar, parent, numba, array) {
    for (const key1 in ar) {
        //if (ar.hasOwnProperty(key1)) {
        if (!ar[key1]) {
            CreateBranch(numba, parent, key1, 0, ar[key1], array);
        } else if (ar[key1] instanceof Array) {
            var parent2 = CreateBranch(numba, parent, key1, Array, ar[key1], array);
            e333kxxx033k(ar[key1], parent2, -numba, true);
        } else if (typeof ar[key1] == 'object') {
            var parent2 = CreateBranch(numba, parent, key1, Object, ar[key1], array);
            e333kxxx033k(ar[key1], parent2, -numba, false);
        } else if (typeof ar[key1] == 'number') {
            CreateBranch(numba, parent, key1, Number, ar[key1], array);
        } else if (typeof ar[key1] == 'string') {
            CreateBranch(numba, parent, key1, String, ar[key1], array);
        } else {
            console.log(key1, ar[key1]);
        }
        //}
    }
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
                console.log(reader.result);

                const parse = JSON.parse(reader.result);
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