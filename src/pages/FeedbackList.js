import React, { Component } from "react";


class FeedbackList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="table-responsive-sm">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Form details</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">
                Please rate the quality of service you received from your host{" "}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>980866555</td>
              <td>good</td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default FeedbackList;
