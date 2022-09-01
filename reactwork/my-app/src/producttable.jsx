import {useState} from 'react';

const ProductTable = () => {
    const chocolate = [
        {
            id:1,
            name: "Mars",
            
        },
        {
            id:2,
            name: "Snickers"
            
        },
        {
            id:3,
            name: "Twix"
            
        },
        {
            id:4,
            name: "Malteasers"
           
        }
    ];

    const [name, setName] = useState('');

    // the search result
    const [foundChocolate, setFoundChocolate] = useState(chocolate);
  
    const filter = (e) => {
      const keyword = e.target.value;
  
      if (keyword !== '') {
        const results = chocolate.filter((chocolate) => {
          return chocolate.name.toLowerCase().startsWith(keyword.toLowerCase());
          // Use the toLowerCase() method to make it case-insensitive
        });
        setFoundChocolate(results);
      } else {
        setFoundChocolate(chocolate);
        // If the text field is empty, show all users
      }
  
      setName(keyword);
    };
    return (
        <div className="Component">
          <input
            type="search"
            value={name}
            onChange={filter}
            className="input"
            placeholder="Chocolate"
          />
    
          <div className="chocolate-list">
            {foundChocolate && foundChocolate.length > 0 ? (
              foundChocolate.map((chocolate) => (
                <li key={chocolate.id} className="Chocolate">
                  <span className="Chocolate-id">{chocolate.id} - </span>
                  <span className="Chocolate-name">{chocolate.name} - </span>
                </li>
              ))
            ) : (
              <h1>No chocolate found!</h1>
            )}
          </div>
        </div>
      );
    }
export default ProductTable;
