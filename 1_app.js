// tag create karo phir root me dal do. but ye niche ka code humne samjhane ke liye likha hai.
const element = React.createElement("h1",{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color:"pink"}},"Hello Coder Army");
const element2 = React.createElement("h2",{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color:"pink"}},"Maja aaya muje");
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// isame dono ek sath browser me show nahi hoga
// Reactroot.render(element);
// Reactroot.render(element2);
//isame dono ek sath browser me show hoga
const div1 = React.createElement('div',{},[element,element2]);
Reactroot.render(div1);

// JSX(JavaScript Xml):-isake andar hum javascript and html ek sath mix karke likh sakate hai. but it is not part of react. ye additional functionallity jo ke react ke andar lekar aaye hai.jo bad me react me change kar deta hai that are called JSX.