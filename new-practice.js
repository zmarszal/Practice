// const Wookie = function() {
//     console.log('this keyword context', this);
//     }
    
//     const chewbacca = new Wookie; // note: since parameters aren't defined, parentheses are not necessary to invoke `Wookie`,
//     // the new operator invokes Wookie.
    
//     console.log('chewbacca variable', chewbacca);

const Wookie = function(name) {
    console.log('this keyword context before property assignment', this);
    this.galaxy = 'Star Wars';
    this[name] = name;
    console.log('this keyword context after property assignment', this);
    };
    
    const chewbacca = new Wookie('Chewbacca'); // note: since a function parameter is defined, parentheses are necessary to invoke `Wookie`.
    
    console.log('chewbacca variable', chewbacca);