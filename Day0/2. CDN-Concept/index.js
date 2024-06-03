const child1 = React.createElement('h1', {}, "This is the normal one...");
const child2 = React.createElement('p', {}, " Hello this is injecting using React...");

const div = React.createElement('div',{}, [child1, child2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);