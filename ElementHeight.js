var ElementHeight = function(domElement) {

  try {
    if(!(domElement instanceof HTMLElement))
      throw('Element passed is not a HTMLElement!');
  } catch(e) {
    throw('Element passed is not a HTMLElement!');
  }

  var styles = getComputedStyle(domElement);
  var isHiddenElement = (styles.display === "none" || parseInt(styles.maxHeight) === 0);
  var dimentions;

  if(isHiddenElement) {
    dimentions = getHiddenElementDimentions(domElement);
  } else {
    dimentions = domElement.getBoundingClientRect();
  }

  return  dimentions.bottom - dimentions.top;
}

function getHiddenElementDimentions(element) {
  var clone = element.cloneNode(true);
  document.body.appendChild(clone);

  var styles = getComputedStyle(clone);
  if(styles.display === "none")
    clone.style.display = "block";

  if(parseInt(styles.maxHeight) === 0)
    clone.style.maxHeight = "none";

  var dimentions = clone.getBoundingClientRect();
  document.body.removeChild(clone);
  return dimentions;
}

if(typeof module === 'object' && module.exports) {
  module.exports = ElementHeight;
}
