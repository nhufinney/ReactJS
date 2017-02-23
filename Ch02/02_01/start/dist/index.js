// Step 1
// const title = React.createElement(
//     'h1',
//     {id: 'title', className: 'header'},
//     'Hello World'
// );

// ReactDOM.render(
//     title,
//     document.getElementById('react-container')
// );


// Step 2
// const { createElement} = React;
// const { render } = ReactDOM;
// const style = {
//     backgroundColor: 'orange',
//     color: 'white',
//     fontFamily: 'verdana'
// }

// const title = createElement(
//     'h1',
//     {id: 'title', className: 'header', style:style},
//     'Hello World'
// );

// render(
//     title,
//     document.getElementById('react-container')
// );

// Step 3
const { render } = ReactDOM;

const style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'verdana'
}

render(
    <h1 id='title'
        className='header'
        style={{
            backgroundColor: 'orange', 
            color: 'white',
            fontFamily: 'verdana'}}>
    Hello Nhu!
    </h1>,
    document.getElementById('react-container')
);

























