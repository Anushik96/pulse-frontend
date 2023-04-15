import SingleCategory from "./SingleCategory";

function  Categories({withTitle}) {
  const obj = [1,2,55,85,56,31,58]
    return (
      <div className="categories">
            {withTitle && <h2 className="categories__title">Categories</h2>}
            <div className="categories__block">
              {
                  obj.map((item, i) => {
                    return (
                      <SingleCategory key={i}/>
                    )
                  })
                }
            </div> 
      </div>
    );
  }
  
  export default Categories;
  