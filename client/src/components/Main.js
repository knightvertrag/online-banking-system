import React , {Component} from "react";
import './Main.css';
export class Main extends Component{
    render(){
        return(
            <div>
            
            <header class="subnav-hero-section">
              <img style={{padding:'25px'}} src='/logo.png' alt="logo" width={'150vh'} height={'100vh'}></img>
            
            <h1 class="subnav-hero-headline">CITIZENS BANK</h1>
            
          </header>
          <section>
            
        <div style = {{backgroundImage:"url(/images/bankmain.jpg)", backgroundSize:'cover', minHeight:'140vh', minWidth:'100vh'}}>
        </div>
        </section>

          </div>
        )

    }

}