import React from 'react';
import { Table } from 'react-bootstrap';
import dateFormat from 'dateformat';

const DishComment = (props) => {
  return props.comments.map((comment) => {
    return (
      <div>
        <Table bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Comment</th>
              <th>Author</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{comment.id + 1}</td>
              <td>{comment.comment}</td>
              <td>{comment.author}</td>
              <td>
                {dateFormat(comment.date, 'dddd | mmmm dS, yyyy | h:MM:ss TT')}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  });
};

export default DishComment;
