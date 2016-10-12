/* global React ReactDOM */

var div = React.DOM.div;
var h1 = React.DOM.h1;

var MyTitle = function(props) {
  return (
    div(null, 
      h1({ style: { color: props.color }}, props.title)
    )
  );
};

var MyTitleFactory = React.createFactory(MyTitle);

var myFirstComponent = (
  div(null, 
    MyTitleFactory({title: 'Props are great', color: 'rebeccapurple'}),
    MyTitleFactory({title: 'I\'m so good at this game!', color: 'mediumaquamarine'}),
    MyTitleFactory({title: 'King Kong ain\'t got anything on me!', color: 'peru'})
  )
);

ReactDOM.render(myFirstComponent, document.getElementById('app'));