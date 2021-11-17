import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useAuth from "../../hooks/useAuth";


const MyBooking = () => {
    const { user } = useAuth();
    const [allBooking, setAllBooking] = useState([]);
    useEffect(() => {
        const uri = `https://calm-basin-18890.herokuapp.com/mybooking/${user?.email}`;
        fetch(uri)
            .then((res) => res.json())
            .then((data) => setAllBooking(data));
    }, [user.email]);

    const handleDelete = (id) => {
        const proceed = window.confirm("are you sure, you want to delete!!!");
        if (proceed) {
            fetch(
                `https://calm-basin-18890.herokuapp.com/mybooking/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remainingBooking = allBooking.filter(
                            (deletebooking) => deletebooking._id !== id
                        );
                        setAllBooking(remainingBooking);
                    }
                });
        }
    };
    return (
        <div>
            <h1 className="text-center text-info mt-5"> Booked Information </h1>
            <Container className="mt-5">
                <Row xs={1} md={2} className="g-2">
                    {allBooking.map((singleBooking) => (
                        <Col key={singleBooking?._id}>
                            <div className="bg- shadow-lg h-100 w-75 text-center  border  rounded p-3 ">
                                <div>
                                    <img style={{width:'100%'}} src={singleBooking?.placeImg} alt="" />
                                </div>
                                <div>
                                    <h4 className="text-white">{singleBooking?.placeName}</h4>
                                    <p  className="text-white">
                                        {singleBooking?.placeDescriptions.slice(
                                            0,
                                            50
                                        )}
                                        ...
                                    </p>
                                    <p  className="text-warning fw-bold">{singleBooking?.addres}</p>
                                    <p  className="text-warning fw-bold">{singleBooking?.phone}</p>
                                    <p  className="text-warning fw-bold">${singleBooking?.placePrice}</p>
                                    <p  className="text-warning fw-bold">status: {singleBooking?.status}</p>
                                    <button className="btn btn-info text-white fw-bold"
                                        onClick={() =>
                                            handleDelete(singleBooking?._id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default MyBooking;
