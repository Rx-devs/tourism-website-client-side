import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

const  ManageAllBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [control]);

    const handleCancel = (id) => {
        fetch(`http://localhost:5000/cancelBookings/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                setConrol(!control);
                alert('Booking Canceled sucessfully');
            } else {
              setConrol(false);
            }
          });
        
      };
    return (
        <div>
            
            <Container className="pt-5 vh-100">
                <h3 className="text-center mb-5">All Users Bookings List</h3>
                
                <Table striped bordered hover className="text-center">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Booking Place Name</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Manage Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <tr booking={booking} key={booking._id}>
                                <td>{booking._id}</td>
                                <td>{booking.placeName}</td>
                                <td>{booking.name}</td>
                                <td>{booking.email}</td>
                                <td>
                                    <button onClick={()=>handleCancel(booking._id)} className="btn btn-danger">Cancel</button>
                                </td>
                            </tr>
                                
                            )
                        }
                    
                        
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default ManageAllBookings;