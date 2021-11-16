import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";


const ManageBooking = () => {
    const [manageeBooking, setManageeBooking] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/manageallorder")
            .then((res) => res.json())
            .then((data) => setManageeBooking(data));
    }, [manageeBooking]);

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure, you want to delete!!!");
        if (proceed) {
            fetch(
                `http://localhost:5000/mybooking/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingBooking = manageeBooking?.filter(
                            (deletebooking) => deletebooking._id !== id
                        );
                        setManageeBooking(remainingBooking);
                    }
                });
        }
    };

    const handleUpdate = (id) => {
        const updatestatus = manageeBooking.find(
            (update) => update?._id === id
        );
        updatestatus.status = "approved";

        const uri = `http://localhost:5000/mybooking/${id}`;
        fetch(uri, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updatestatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("updated successfully");
                }
            });
    };

    return (
        <div>
            <h2 className="text-center mt-5 mb-5 fw-bold text-warning">Mange Your Selected Booking</h2>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    {manageeBooking.map((booking) => (
                        <Col key={booking?._id}>
                            <Card className=" shadow-lg">
                                <Card.Img
                                    variant="top"
                                    src={booking?.placeImg}
                                   
                                />
                                <Card.Body>
                                    <Card.Title className="text-info">{booking?.name}</Card.Title>
                                    <h5 className="text-info">Place: {booking?.placeName}</h5>
                                    <Card.Text className="text-danger">
                                        {booking?.placeDescriptions.slice(
                                            0,
                                            150
                                        )}
                                        ...
                                    </Card.Text>
                                    <p className="text-danger">${booking?.placePrice}</p>
                                    <p>status: <span className="fw-bold text-info">{booking?.status}</span> </p>
                                    <button className="btn btn-info text-white fw-bold m-5"
                                        onClick={() =>
                                            handleDelete(booking?._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                    <button className="btn btn-warning text-white fw-bold m-5"
                                        onClick={() =>
                                            handleUpdate(booking?._id)
                                        }
                                    >
                                        {booking?.status}
                                    </button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default ManageBooking;
