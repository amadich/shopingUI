import Shoes2 from '../assets/shoes/sh-2.jpg';
import Shoes4 from '../assets/shoes/sh-4.jpg';
import Shoes5 from '../assets/shoes/sh-5.jpg';
export default function Article() {
   return ( 
      <>
         <div id='myArticle'>
               <div className='m-10'>
                  <h3 className='font-bold text-3xl font-[cursive] text-gray-700'>
                        Always Iconic
                  </h3>
               </div>
            <article className='lg:flex lg:justify-around m-auto text-center items-center'>

                  <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={Shoes2} alt="Shoes" /></figure>
                     <div className="card-body">
                        <h2 className="card-title">
                           Nike WMNS Air Force 1 '07 White/ White-Black
                           <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                           <div className="badge badge-outline">Fashion</div> 
                           <div className="badge badge-outline">Products</div>
                        </div>
                     </div>
                  </div>



                  <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={Shoes4} alt="Shoes" /></figure>
                     <div className="card-body">
                        <h2 className="card-title">
                              Nike SB!
                           <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                           <div className="badge badge-outline">Fashion</div> 
                           <div className="badge badge-outline">Products</div>
                        </div>
                     </div>
                  </div>
                  

                  <div className="card w-96 bg-base-100 shadow-xl">
                     <figure><img src={Shoes5} alt="Shoes" /></figure>
                     <div className="card-body">
                        <h2 className="card-title">
                              VANS Classic Slip-On Black Shoes - BLACK | Tillys
                           <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                           <div className="badge badge-outline">Fashion</div> 
                           <div className="badge badge-outline">Products</div>
                        </div>
                     </div>
                  </div>
            </article>
         </div>
      </>
    );
}
