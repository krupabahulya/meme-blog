import React from "react";

const Sidenavbar = ({ article }) => {
  console.log(article);
  const { categories } = article.fields;
  return (
        <div>
             <h4 >
               <a href="#">Meme <span>Categories</span></a>
             </h4>
               <div className="nav-wrap">
{/*                   <nav className="main-nav" role="navigation">
                    <ul className="unstyled list-hover-slide">
                     <li><a href="#">latest</a></li>
                     <li><a href="#">classics</a></li>
                     <li><a href="#">animals</a></li>
                     <li><a href="#">crypto</a></li>
                     <li><a href="#">cooking</a></li>
                     <li><a href="#">relationship</a></li>
                    </ul>
                  </nav> */}


<div class="btn-group-vertical">
  <button type="button" class="btn btn-primary" href="#">{[categories]}</button>
</div>


               </div>
        </div>
    )
}
export default Sidenavbar;