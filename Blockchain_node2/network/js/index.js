document.addEventListener('DOMContentLoaded', function() {
  
  var container = document.querySelector('#graph');

fetch("../json/index.json").then(function(res) {
  if (res.ok) {
    res.json().then(function(datta) {
      console.log(datta);
  var data = datta;
  // {
  //   datta,

  //   // edges: [
  //   //   {from: 1, to: 2},
  //   //   {from: 1, to: 3},
  //   //   {from: 1, to: 4},
  //   //   {from: 1, to: 5},
  //   //   {from: 2, to: 3},
  //   //   {from: 2, to: 4},
  //   //   {from: 2, to: 5},
  //   //   {from: 3, to: 4},
  //   //   {from: 3, to: 5},
  //   //   {from: 4, to: 5},
  //   // ]//////
  // }
  
  var options = {
    nodes: {
      borderWidth:0,
      size:42,
      color: {
        border: '#222',
        background: 'transparent'
      },
      font: {
        color: '#111',
        face: 'Walter Turncoat',
        size: 16,
        strokeWidth: 1,
        strokeColor: '#222'
      }
    },
    edges: {
      color: {
        color: '#CCC',
        highlight: '#A22'
      },
      width: 3,
      length: 275,
      hoverWidth: .05
    }
  }
  
  var network = new vis.Network(container, data, options);



    });
  } else {
    console.log("Looks like the response wasn't perfect, got status", res.status);
  }
}, function(e) {
  console.log("Fetch failed!", e);
});

  



  

  
});