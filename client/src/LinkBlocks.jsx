import React from 'react';
import './toggle.css';
import { v4 as uuidv4 } from 'uuid';


class LinkBlocks extends React.Component {
    state = {
        linkList : [],
    }

    addNewLink() {
       let id = uuidv4();
       let newLink = {
           id:id,
           url:'',
           title:''
       }
        let newArray = [...this.state.linkList, newLink];
        this.setState({linkList : newArray});
        console.log(newArray);
    }

    render() {
        let links = this.state.linkList.map((link) => <div className="individual-link d-flex flex-column justify-content-center w-25 p-1 m-1 border border-dark">
        <div className="d-flex flex-row">
        <div className="d-flex mt-3 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
        </div>
        <input type="text" placeholder="Title" className="border-0 m-1 p-1 d-flex"
            onChange={(e) => {
                link.title = e.target.value
            }}

        />
        <div className="outer">
        <label class="switch">
            <input type="checkbox" />
             <span class="slider round"></span>
        </label>
        </div>
        </div>
        <div className="d-flex flex-row">
        <div className="d-flex mt-3 mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
        </svg>
        </div>
        <input type="url" placeholder="Url" className="border-0 m-1 p-1"
            onChange={(e) => {
                link.url = e.target.value
            }}

        />
        </div>
        <div className="d-flex justify-content-end m-2 p-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
        </svg>
        </div>
    </div>
) 
        return <div className="d-flex flex-column">
            <div className="top buttons d-flex justify-content-center mt-5">
            <button onClick={() => this.addNewLink()} type="button" className="btn btn-primary btn-rounded d-flex m-1 px-5 w-auto">Add new link</button>
            <button type="button" className="btn btn-primary btn-rounded d-flex m-1 px-4 w-auto">Explore links</button>
            </div>
            <div className="outer-linkbox d-flex flex-column justify-center align-items-center mt-3">
                {links}
                </div>
                <div className="d-flex justify-content-center mt-3">
                <button type="button" className="btn btn-primary btn-rounded d-flex m-1 px-5 w-auto">Save</button>

                </div>
        
        </div>;
    }
}
 
export default LinkBlocks;