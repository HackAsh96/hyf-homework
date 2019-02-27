import React from 'react';
import HeaderContainer from './HeaderContainer';
import ListTable from './ListTable';

class ContainerListTable extends React.Component{
  render(){
    return(
      <div id='mainContainer'>
      <HeaderContainer />
      <ListTable list={this.props.list}/>
      </div>
    )
  }
}

export default ContainerListTable;
