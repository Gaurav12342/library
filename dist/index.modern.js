import React from 'react';

var ExampleComponent = function ExampleComponent(props) {
  var bgcolor = props.bgcolor,
      completed = props.completed;
  var containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50
  };
  var fillerStyles = {
    height: '100%',
    width: completed + "%",
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right'
  };
  var labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: containerStyles
  }, /*#__PURE__*/React.createElement("div", {
    style: fillerStyles
  }, /*#__PURE__*/React.createElement("span", {
    style: labelStyles
  }, completed + "%")));
};

export default ExampleComponent;
//# sourceMappingURL=index.modern.js.map
