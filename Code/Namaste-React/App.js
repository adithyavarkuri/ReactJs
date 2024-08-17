const heading  = React.createElement("h1" ,
{id : "heading" , xyz : "abc"}, "Helloworld from react from app");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)    


/**
 * <div id = "parent">
 *      <div id = "child">
 *          <h1> I am h1 tag</h1>
 *      </div>
 * </div>
 */


    const parent = React.createElement("div" , {id : "parent"} , 
    React.createElement("div" , {id : "child"},
    React.createElement("h1" ,  {}, "I am h1 tag")
    ))

    console.log(parent);
    root.render(parent);



    
/**
 * <div id = "parent1">
 *      <div id = "child1">
 *          <h1> I am h1 tag</h1>
 *          <h2> I am h1 tag</h2>
 *      </div>
 * </div>
 */


const parent1 = React.createElement("div" , {id : "parent1"} , 
    React.createElement("div" , {id : "child1"},
    [React.createElement("h1" ,  {}, "I am h1 tag") , 
    React.createElement("h2" ,  {}, "I am h2 tag")]
    ))

    console.log(parent1);
    root.render(parent1);


/**
 * <div id = "parent2">
 *      <div id = "child2">
 *          <h1> I am h1 tag</h1>
 *          <h2> I am h1 tag</h2>
 *      </div>
 *      <div id = "child2a">
 *          <h1> I am h1 tag</h1>
 *          <h2> I am h1 tag</h2>
 *      </div>
 * </div>
 */


const parent2 = React.createElement("div" , {id : "parent1"} , 
    [React.createElement("div" , {id : "child1"},
        [React.createElement("h1" ,  {}, "I am h1 tag") , 
        React.createElement("h2" ,  {}, "I am h2 tag")]
        ) , 
    React.createElement("div" , {id : "child2"},
        [React.createElement("h1" ,  {}, "I am h1 tag") , 
        React.createElement("h2" ,  {}, "I am h2 tag")]
        )
    ]
);


console.log(parent2);
root.render(parent2);
