
function component() {
    const element = document.createElement('div');

    element.innerHTML = _.join(
        ['Helo', 'Webpack'],
        ''
    );

    return element;
}