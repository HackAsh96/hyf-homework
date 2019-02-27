import React from 'react';
import ListRow from './ListRow';

class ListTable extends React.Component{
  render(){
    console.log(this.props);
    const rows=[];
    this.props.list.forEach((item)=>{
      rows.push(
        <ListRow description_date={item} key={item.title} />
      )
    })

    return(
      <table id="listTableStyle">
      <thead>
      <tr>
      <th>Title</th>
      <th>Date</th>
      </tr>
      </thead>
      <tbody>{rows}</tbody>
      </table>
    )
  }
}


export default ListTable;
