import React,{useState} from 'react'
import './css/Wash.css'
export default function Iron() {
    document.title='Iron';

    const[total,setTotal] = useState(0);

    const incTotal = ()=> {
        let a = total + 10;
        setTotal(a);
    }

    const decTotal = ()=> {
        if(total > 0)
        {
        let a = total-10;
        setTotal(a);
        }
    }
  return (
    <div className="main1">

        <div className="container">

        <div class="circle circle-1"></div>
        <div class="circle-circle-2"></div>

            <div className="box_">
                <div className="type">Shirt</div>
                <div className="symbol"><span><button onClick={incTotal}>+</button></span><span><button onClick={decTotal}>-</button></span></div>
            </div>

            

        <div className="box_">
                <div className="type">Pant</div>
                <div className="symbol"><span><button onClick={incTotal}>+</button></span><span><button onClick={decTotal}>-</button></span></div>
        </div>

        <div className="box_">
                <div className="type">Shirt</div>
                <div className="symbol"><span><button onClick={incTotal}>+</button></span><span><button onClick={decTotal}>-</button></span></div>
        </div>
        
        <div className="box_">
                <div className="type">Pant</div>
                <div className="symbol"><span><button onClick={incTotal}>+</button></span><span><button onClick={decTotal}>-</button></span></div>
        </div>

        <div class="wrapper">
                <div class="fixed">
                    Total = {total}
                </div>
        </div>
        <br />
        </div>

        






        
        {/* hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga saepe qui pariatur inventore sequi iure ipsa, facere alias itaque laboriosam autem libero accusamus corporis dolorem aspernatur! Impedit, repellat ullam?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione tenetur, repellat suscipit accusamus tempore, eaque illo minima, quas sed est sequi eum doloribus consectetur unde explicabo officia non architecto molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dicta voluptatibus sed eos quibusdam accusantium nam nesciunt sint commodi saepe, vitae voluptates nobis iure, culpa eius consequuntur laborum molestiae quisquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores maxime, sapiente commodi quisquam cum consequatur, temporibus ipsa, porro distinctio minus nemo officia est similique recusandae. Dolores molestiae at labore nostrum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempore corrupti incidunt nobis ad, non recusandae numquam iusto quisquam itaque fugit. Iure quos quisquam ea error accusantium nulla itaque minima! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, quos dolor? Ea nostrum neque eveniet sit maiores illum. Fuga, neque? Repellat labore deleniti nostrum, enim nesciunt aliquam laborum repudiandae minus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam doloribus quibusdam magni illum odio exercitationem? Quam blanditiis ut, adipisci quaerat nisi totam ea deleniti vel voluptate? Atque harum dolor sed. */}
    </div>
  )
}
