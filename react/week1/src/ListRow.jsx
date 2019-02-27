import React from 'react';

class ListRow extends React.Component{
  render() {
    const description = this.props.description_date;
    const title = description.status ? description.title :
    <span id='spanTitleStyle'>
    {description.title}
    </span>;
    const date = description.status ? description.date :
    <span id='spanDateStyle'>
    {description.date}
    </span>

    return (
      <tr>
      <td>{title}</td>
      <td>{date}</td>
      </tr>
    )
  }
}


export default ListRow;
