var expect = chai.expect;

describe('element-height', function() {
  var element;

  afterEach(function() {
    if(element)
      document.body.removeChild(element);
  });

  describe('non-hidden element', function() {
    beforeEach(function() {
      element = createElement();
    });

    it('returns the height of the element', function() {
      expect(ElementHeight(element)).to.be.equal(18);
    });
  });

  describe('hidden element', function() {
    beforeEach(function() {
      element = createElement();
    });

    it('returns the height of the element when display: none', function() {
      element.style.display = "none";
      expect(ElementHeight(element)).to.be.equal(18);
    });

    it('returns the height of the element when maxHeight: 0', function() {
      element.style.maxHeight = "0";
      expect(ElementHeight(element)).to.be.equal(18);
    });

    it('returns the height of the element when maxHeight: 0 && display: none', function() {
      element.style.maxHeight = "0";
      element.style.display = "none";
      expect(ElementHeight(element)).to.be.equal(18);
    });

    it('removes the clone element from the page', function() {
      element.style.display = "none";
      ElementHeight(element);
      expect(document.getElementsByClassName('test-element').length).to.be.equal(1);
    });
  });

  it('throws an exception if an HTML DOM Node is not provided', function() {
    expect(function() {
      ElementHeight({});
    }).to.throw('Element passed is not a HTMLElement!');
  });
});

function createElement(isHidden) {
  var element = document.createElement('div');
  element.innerHTML = "Test element";
  element.classList.add('test-element')
  document.body.appendChild(element);
  return element;
}
