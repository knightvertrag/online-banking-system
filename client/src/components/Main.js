import React , {Component} from "react";
import './Main.css';
export class Main extends Component{
    render(){
        return(
            <div>
            
            <header class="subnav-hero-section">
            <h1 class="subnav-hero-headline">Welcome to <small>Citizen's Bank</small></h1>
            
          </header>
          <section>
        <div style = {{backgroundImage:"url(/images/bankmain.jpg)", backgroundSize:'cover', minHeight:'140vh', minWidth:'100vh'}}>
        </div>
        </section>

          </div>
        )

    }

}