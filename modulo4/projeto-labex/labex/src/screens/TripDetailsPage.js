import React, { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../hooks/useProtectedPage"
import rocket from "../img/rocket.jpg"
import { useTrips } from "../hooks/useTrips"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-image: url(${rocket});
    background-size: 100vw 100vh;
    label{
        outline: none;
        border: none;
        color: white;
        font-size: 20px;
    }
`
const TripsListDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 65vw;
    height: 85vh;
    overflow: auto;
`

const TripInfo = styled.div`
    color: white;   
    align-items: start; 
    border-radius: 10px;
    border: 1px solid black;
    background-color: rgba(10,23,55,0.5);
    width: 99.5%;
`

const TripName = styled.p`
    &:hover{
        cursor: pointer;
        color: yellow;
    }
    &:active{
        color: green;
    }
`

const GoToLoginPageButton = styled.button`
    height: 40px;
    color: white;
    background-color: #f77f00;
    border-radius: 10px;
    border: none;
    outline: none;
    &:hover{
        background-color: #80b918;
        color: black;
        cursor: pointer;
    }
    &:active{
        background-color: yellow;
        color: black;
    }
`

const ButtonsDiv = styled.div`
    display: flex;
    /* position: absolute; */
    bottom: 5vh;
    right: 42vw;
    height: 150px;
    width: 200px;
` 
const TitleDiv = styled.div`
    display: flex;
    color: #cce6f4;
    font-family: -apple-system, BlinkMacSystemFont, 'Roboto', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    justify-content: center;
    align-items: center;
    margin-top: 2px;
    font-weight: bold;
    font-size: 40px;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin-left: 35px;
`


const TripDetailsPage = () => {
    useProtectedPage()  

    const history = useHistory()

    const trips = useTrips()

    const goToTripsListPage = () => {
        history.push("/trips/list")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    const goToTripsCreatePage = () => {
        history.push("/trips/create")
    }


    return(
        <MainDiv>
            <TitleDiv>
            <p>Trips Details</p>
            </TitleDiv>
            <TripsListDiv>
                {trips.length === 0 ? (<p>Carregando...</p>):(trips.map(trip => 
                <TripInfo>
                    <p>Viagem: {trip.name}</p>
                    <p>Planeta: {trip.planet}</p>
                    <p>Duração: {trip.durationInDays}</p>
                    <p>Data: {trip.date}</p>
                    <p>Descrição: {trip.description}</p>
                </TripInfo>))}
            </TripsListDiv>
        
            <ButtonsDiv>
            <GoToLoginPageButton onClick={goToTripsListPage}>
             Lista de viagens
            </GoToLoginPageButton>
            <GoToLoginPageButton onClick={goToTripsCreatePage}>
            Criar viagens
            </GoToLoginPageButton>
            <GoToLoginPageButton onClick={goToHomePage}>
            Página inicial
            </GoToLoginPageButton>
            </ButtonsDiv>
        </MainDiv>
    )
}

export default TripDetailsPage

