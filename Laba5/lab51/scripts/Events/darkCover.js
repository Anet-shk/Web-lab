const darkCover = {
  element: document.getElementById("darkCover"),
  activate: function() {
    this.element.classList.remove("disabledView");
  },
  deactivate: function() {
    this.element.classList.add("disabledView");
  }
}

export default darkCover;