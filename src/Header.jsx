import { useState } from "react";
import Nav from "./components/Navbar";
import TextMovable from "./components/TextMovable";
import "./HeaderStyle.css"

const Header = () => {
    const [text,setText] = useState(["A TEAM", "PROFESSIONALS","INNOVATINE","PARATECH"])

  const txts = document.getElementsByTagName("p")
    // txtsLen = txts.length;
    console.log(txts)
    let index = 0;
  const animateTexts = ()=>{
    for(let i=0 ; i<4 ; i++){
        txts[i].classList.remove("text-in")
    }
    txts[index].classList.add("text-in");
    if(index === 3){
        index = 0;
    }else{
        index++;
    }
        setTimeout(animateTexts,3000);

  }
  window.onload = animateTexts

   

    return (<>
        
        <div className="header">
        <Nav/>
            <section className="container home-text">
                <section className="header-text">WE ARE {text.map((e,index) => <TextMovable key={index} textData={e} /> )}
                </section>
                <section className="header-text_2">Custom Product & Software Development</section>
                <section className="header-text_2">Focused On Your Success</section>
                <div className="Learn-box">
                    <section className="arrow"><a href="#">&#8594;</a></section>
                    <section className="arrow-text">Learn More</section>
                </div>
            </section>
        </div>

    </>);
}
 
export default Header;
