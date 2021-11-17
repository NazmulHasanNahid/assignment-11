import React from "react";
import { useForm } from "react-hook-form";
import "./AddNewBooking.css";
import bookingImg from '../../../src/img/BookingImg.png'
import { Col, Row } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const AddNewBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        const uri = `https://calm-basin-18890.herokuapp.com/allbooking`;
        fetch(uri, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("added successfullay");
                    reset();
                }
            });
    };
    return (
        <Row>
            <h2 className="text-center text-info fw-bold mt-5 mb-5">
                ADD NEW BOOKING
            </h2>
            <Col md={6} xs={12}>
            <div className=" mt-5 add-services">
            

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input-group"
                    {...register("name", {
                        required: true,
                        maxLength: 20,
                    })}
                    placeholder="Enter Your Name"
                    required
                />
                <textarea
                    {...register("description")}
                    placeholder="Enter your  description"
                    required
                />
                <input
                    type="number"
                    {...register("price")}
                    placeholder="Enter Your  Price"
                    required
                />
                <input {...register("img")} placeholder="Image Url" required /> <br />

                <Button type="submit" value="submit" className="btn btn-info text-white fw-bold w-25"> Submit </Button>
            </form>
        </div>
            </Col>
            <Col md={6} xs={12}>
             <img className="img-fluid" src={bookingImg} alt="" />
            </Col>
        </Row>
    );
};

export default AddNewBooking;
