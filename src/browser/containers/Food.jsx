import * as React from 'react';
import './foodstyle.css'

export default class Food extends React.Component{
  render(){
      return(
      	<center>

        <h1>What's New</h1><br/>
        <div class="foodElement">
        <div class="wrap">
        	<div class="left">
        		<div align="left">
       				<input type="button" value="&uarr;"></input>
       				<input type="button" value="&darr;"></input><br/>
       				<p>+55</p><br/>
       			</div>
       			<input type="text" placeholder="Post a Comment!"></input><br/><br/>
       			<input type="button" value="View Comments"></input>
       		</div>
        	<div class="right">
        		<input type="button" value="See on Map">
        		</input><br/>
        		Posted By: User1<br/>
       			Location: ILC<br/>
       			24 minutes ago<br/>
       			<br/>
        	</div>
        	<div class="center">
        		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        		 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        		 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        		 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
       		</div>
        </div>
   		</div>
        <div class="foodElement">
        <div class="wrap">
        	<div class="left">
        		<div align="left">
       				<input type="button" value="&uarr;"></input>
       				<input type="button" value="&darr;"></input><br/>
       				<p>+75</p><br/>
       			</div>
       			<input type="text" placeholder="Post a Comment!"></input><br/><br/>
       			<input type="button" value="View Comments"></input>
       		</div>
        	<div class="right">
        		<input type="button" value="See on Map">
        		</input><br/>
        		Posted By: User2<br/>
       			Location: Lederle<br/>
       			43 minutes ago<br/>
       			<br/>
        	</div>
        	<div class="center">
        		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
        		incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        		 exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        		 dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        		 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
       		</div>
        </div>
   		</div>
     
        </center>
      );
  }
}
