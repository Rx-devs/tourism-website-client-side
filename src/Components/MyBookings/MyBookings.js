import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [control, setConrol] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://rocky-brushlands-10899.herokuapp.com/myBookings/${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data));
        
    }, [user.email,control]);

    const handleCancel = (id) => {
        fetch(`https://rocky-brushlands-10899.herokuapp.com/cancelBookings/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              setConrol(!control);
            } else {
              setConrol(false);
            }
          });
        
      };
    return (
        <div>
            <Container className="pt-5 vh-100">
                <h3 className="text-center mb-5">My Bookings List</h3>
                <Table striped bordered hover>
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

export default MyBookings;