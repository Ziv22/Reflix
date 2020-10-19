import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Landing extends Component {
    constructor(){
        super()
        this.state={
            users: {
                "Joey":{
                    background:"purple"
                },
                "Rachel":{
                    background:"orange"
                },
                "Phoebe":{
                    background:"aquamarine"
                },
                "Chandler":{
                    background:"gray"
                }
            }
          }
    }
    render() {
        const users = Object.keys(this.state.users)
      return(
        <div className="Landing">
            <h1>Who's Watching?</h1>
            <div id="userers">
                {users.map(u=>
                    <Link key={u} to="/catalog">
                        <div key={u} className="user">
                            <h1>{u}</h1>
                        </div>
                    </Link>
                )}
            </div>
        </div>
      )
    }
  }
  
  export default Landing;