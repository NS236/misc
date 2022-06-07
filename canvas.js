var defaultOptions = {
  // top-left, top-center, top-right, center-left, center-center, center-right, bottom-left, bottom-center, bottom-right
  align: "top-left",
  onscreen: true,
  container: document.body,
};

function createCanvas(w, h, options = defaultOptions) {
  var c = document.createElement("canvas");
  
  var altContent = document.createTextNode("Sorry, your browser does not support HTML canvas.");
  c.appendChild(altContent);
  
  var width = document.createAttribute("width");
  width.value = w;
  c.setAttributeNode(width);
  
  var height = document.createAttribute("height");
  height.value = h;
  c.setAttributeNode(height);
  
  if(options.onscreen) {
    options.container.style.position = "relative";
    c.style.position = "absolute";
    switch(options.align) {
      case "top-left":
        c.top = "0px";
        c.left = "0px";
        break;
      case "top-center":
        c.top = "0px";
        c.marginLeft = (options.container.width / 2 - c.width / 2) + "px";
        break;
      case "top-right":
        c.top = "0px";
        c.right = "0px";
        break;
      case "center-left":
        c.marginTop = (options.container.height / 2 - c.height / 2) + "px";
        c.left = "0px";
        break;
      case "center-center":
        c.marginTop = (options.container.height / 2 - c.height / 2) + "px";
        c.marginLeft = (options.container.width / 2 - c.width / 2) + "px";
        break;
      case "center-right":
        c.marginTop = (options.container.height / 2 - c.height / 2) + "px";
        c.left = "0px";
        break;
      case "bottom-left":
        c.bottom = "0px";
        c.left = "0px";
        break;
      case "bottom-center":
        c.bottom = "0px";
        c.marginLeft = (options.container.width / 2 - c.width / 2) + "px";
        break;
      case "bottom-right":
        c.bottom = "0px";
        c.right = "0px";
        break;
      default:
        c.top = "0px";
        c.left = "0px";
    }
    options.container.appendChild(c);
  }
  
  return c;
}

function createOffscreenCanvas(w, h) {
  var offscreenOptions = {
    onscreen: false,
  };
  return createCanvas(w, h, offscreenOptions);
}

function fullscreenCanvas() {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var fullscreenOptions = {
    align: "top-left",
    onscreen: true,
    container: document.body,
  };
  document.body.style.margin = "0px";
  return createCanvas(width, height, fullscreenOptions);
}
