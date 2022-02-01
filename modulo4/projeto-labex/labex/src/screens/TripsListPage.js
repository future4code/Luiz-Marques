import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useHistory } from "react-router-dom"
import useProtectedPage from "../hooks/useProtectedPage"
import { useTrips } from "../hooks/useTrips"
import spaceTornado from "../img/space-tornado.jpg"

const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-image: url(${spaceTornado});
    background-size: 100vw 100vh;
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

const GoToHomePageButton = styled.button`
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

const TripsListPage = () => {
    const history = useHistory()

    const trips = useTrips()


    const goToTripsDetails = () => {
        history.push("/trips/details")
    }

    const goToHomePage = () => {
        history.push("/")
    }

    const teste = () => {
        history.push("/application-form")
    }

    return(
        <MainDiv>
            <TripsListDiv>
                {trips.length === 0 ? (<p>Carregando...</p>):(trips.map(trip => 
                <TripInfo>
                    <TripName onClick={goToTripsDetails}>Viagem: {trip.name}</TripName>
                    <p>Descrição: {trip.description}</p>
                </TripInfo>))}
            </TripsListDiv>
            <GoToHomePageButton onClick={goToHomePage}>Página inicial</GoToHomePageButton>
            <GoToHomePageButton onClick={teste}>Candidate-se para Viajar</GoToHomePageButton>
        </MainDiv>  
    )
}

export default TripsListPage