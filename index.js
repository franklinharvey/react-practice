const title = React.createElement(
  'h1',
  {id: 'title', className: 'header'},
  'Hello World'
)

ReactDOM.render(
  title,
  document.getElementByID('react-container')
)
