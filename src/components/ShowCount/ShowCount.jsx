import "./ShowCount.css";

function ShowCount( {count} ) {
     return (
          <div className="title-container">
               <h2>You click here {count} {count === 1 ? "time" : "times"} </h2>
          </div>
     );
};

export default ShowCount;