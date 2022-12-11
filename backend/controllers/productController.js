const sql = require("../config/database");
const { parse, stringify, toJSON, fromJSON } = require("flatted");

exports.getProducts = async (req, res, next) => {
  try {
    const circularReplacer = () => {
      // Creating new WeakSet to keep
      // track of previously seen objects
      const seen = new WeakSet();

      return (key, value) => {
        // If type of value is an
        // object or value is null
        if (typeof value === "object" && value !== null) {
          // If it has been seen before
          if (seen.has(value)) {
            return "Object";
          }

          // Add current value to the set
          seen.add(value);
        }

        // return the value
        return value;
      };
    };

 
    let final = []
    let result = sql.query("SELECT * FROM users", (err, result) => {
      if (err) {
        console.log(err);
      } else {
         res.status(200).json({
           success: true,
           result: result
         })
       
      
      }
    });
  

   

   
  } catch (error) {
    console.log("Error ocuured", error);
  }
};
