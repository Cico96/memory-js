//function per permettere di aggiungere uno style agli elementi del dom
export function setStyle(element, objProps) {
    const keys = Object.keys(objProps);
    keys.forEach(function(key) {
        element.style[key] = objProps[key];
    });
}