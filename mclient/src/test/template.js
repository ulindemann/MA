// Table mit Buttons
import React from 'react';
import Table from 'react-bootstrap/Table';

const ButtonTable = () => {

return (
<div className="container">
  <div className="row">
    <div className="col-12">
      <Table bordered hover size="sm" variant="dark">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Article Name</th>
            <th scope="col">Author</th>
            <th scope="col">Shares</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bootstrap 4 CDN and Starter Template</td>
            <td>Cristina</td>
            <td>2.846</td>
            <td>
              <button type="button" className="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" className="btn btn-success"><i class="fas fa-edit"></i></button>
            <button type="button" className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Bootstrap Grid 4 Tutorial and Examples</td>
            <td>Cristina</td>
            <td>3.417</td>
            <td>
              <button type="button" className="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" className="btn btn-success"><i class="fas fa-edit"></i></button>
            <button type="button" className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Bootstrap Flexbox Tutorial and Examples</td>
            <td>Cristina</td>
            <td>1.234</td>
            <td>
              <button type="button" className="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" className="btn btn-success"><i class="fas fa-edit"></i></button>
            <button type="button" className="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
</div>
);
}

export default ButtonTable;