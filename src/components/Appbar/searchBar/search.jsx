import React from 'react';

let Search = () => {
    return <div className="row position-relative">
        <ShowHide />
    </div>
};


class ShowHide extends React.Component {
    constructor() {
        super();
        this.state = {
            isHidden: false
        }
    }

    render() {
        return (
            <div className="container px-1 mx-0 col-12">
                <div onClick={() => this.onClick()}>
                    <div class="input-group border rounded py-0 mb-1 form" >
                        <div className="input-group-text bg-white py-0 px-1 mr-0 border-0"><img src="search-sm.png" alt=""/></div>
                        <input className="form-control-group border-0 p-0 bg-white form-control" type="search" placeholder="Search" id="search-input" />
                        <img className="float-right p-1" src="searchClearBtn.png" id="times-circle-ico" alt="clear"/>
        
                        {
                            // this.state.isHidden
                            //     ? 
                            //    : null
                        }
                    </div>
                </div>
            </div>
        )
    }

    onClick() {
                        this.setState(prevState => ({
                            isHidden: !prevState.isHidden
                        }));
                    }
                };
                
export default Search;