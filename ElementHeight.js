var ElementHeight = function(domElement) {

  try {
    if(!(domElement instanceof HTMLElement))
      throw('Element passed is not a HTMLElement!');
  } catch(e) {
    throw('Element passed is not a HTMLElement!');
  }

  var isHiddenElement = (domElement.style.display === "none");
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
  clone.style.display = "block";
  var dimentions = clone.getBoundingClientRect();
  document.body.removeChild(clone);
  return dimentions;
}
