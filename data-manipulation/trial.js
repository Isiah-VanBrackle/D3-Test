function statistics() {
  const columnHeights = [10, 20, 30, 40, 50];

  d3.select('.chart') // here I select the class that's actually on the page, after checking the index.html to confirm that class is chart
    .selectAll('div') // here I  am chaining a selection of all the 'divs' associated with the chart class
    .data(columnHeights) // this is where the data is defined as the values from our columnHeights array
    // .join( // the purpose of this join is to create functions that handle enter, update, and exit selections, creating a better flow, but for now i'll make use of the syntax i'm used to
    //   enter => enter.append('div')
    //     .style('width', '100px')
    //     .style('height', (d) => `${d * 10}px` )
    //     .style('display', 'inline-block')
    //     .style('background-color', 'blue')
    //     .style('margin-right', '2px')
    //     .style('vertical-align', 'bottom')
    //     .style('padding-top', '4px')
    // )
    .enter() // if the elements don't exist on the DOM it's an enter selection. // if you've more elements than data thats an exit selection !review!
    .append('div')
      .style('width', '100px')
      .style('height', (d) => `${d * 10}px` ) // this is a function where 'd' = one of the elements in our array of data. We take that element, manipulate it and using string interpolation convert it to pixels
      .style('display', 'inline-block')
      .style('background-color', 'blue')
      .style('margin-right', '2px')
      .style('vertical-align', 'bottom')
      .style('padding-top', '4px')
    .text(d => d)
      .style('text-align', 'center')
      .style('color', '#fff');
}
