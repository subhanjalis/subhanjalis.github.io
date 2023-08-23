import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'
import ReactDOM from "react-dom";
import { Normalize } from "styled-normalize";
import { Cat, Folder, SpeechBubble } from 'react-kawaii'
import { ReactComponent as CardBg } from "../../../assets/card-bg.svg";
import styled from "styled-components";
import Container from "../../Cat/Container"
import Card from "../../Cat/Card"
import KawaiiAnimation from "../../Cat/KawaiiAnimation"


const Logo = () => {
return (<>

  <div className="logo-container">
  <h2> <center><font color="#ffd700">
  <br/> <font color="White">/* Create Animal Class */</font> <br/>
public class Animal &#123; <br/>
    public void makeSound() &#123;
    <br/>
        System.out.println(<font color="White">"MEOW!"</font> );
        &#125;&#125; 
</font></center></h2>
{/* <h2><font color="#ffd700">kitty.color = "</font><font color="#9400D3">#9400D3</font>"<font color="#ffd700">;kebfcuveswcfinoalwecfjiauwgbduawifnpcasemncfjhoaiebgfuiaewgbfiew</font> </h2>
  <h2><font color="#ffd700">Cat kitty = new Cat();</font></h2>
<h2><font color="#ffd700">kitty.color = "</font><font color="#9400D3">#9400D3</font>"<font color="#ffd700">;kebfcuveswcfinoalwecfjiauwgbduawifnpcasemncfjhoaiebgfuiaewgbfiew</font> </h2> */}
  {/* <SpeechBubble size={220} mood="happy" color="#83D1FB" /> */}
<Container >
  
  <Normalize />
  <Card>
    <KawaiiAnimation />
  </Card>
  <h2><font color="#ffd700">Cat kitty = new Cat();</font></h2>
<h2><font color="#ffd700">kitty.color = "</font><font color="#9400D3">#9400D3</font><font color="#ffd700">";</font> </h2>
</Container>
</div>
</>);
}

export default Logo
