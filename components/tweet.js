import React from 'react'
import Styled from 'styled-components'

 const Card = Styled.div`
        position: relative;
        width: 450px;
        min-height: 250px;
        border-radius: 12px;
        box-shadow: 10px 0px 40px 0px rgba(0,0,0,0.6);
        background-color: #ffffff;

        .card__details {
            padding: 2rem;
            padding-top: 0;
            display: flex;
            flex-direction: column;
        }
`

const CardHeader = Styled.div`
                position: relative;
                margin-bottom: 1rem;
                padding: 1rem 0;
`

const CardProfile = Styled.div`
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                    overflow: hidden;
                    z-index: 2;

                    & img {
                    max-width: 100%;
                    }
`

const CardName = Styled.h1`
                margin: 0;
                margin-top: 1rem;
                font-size: 2.5rem;
`

const CardHandle = Styled.h2`
                    margin: 0;
                    color: rgba(0,0,0, 0.6)
`
const CardContent = Styled.p`
                    margin: 0;
                    font-size: 1.25rem;
`
const CardMedia = Styled.div`
                    margin-top: 1rem;
                    overflow: hidden;
                    border-radius: 8px;

                    & img {
                    min-width: 100%;
                    }
`
const Tweet = ({ name, handle, profilePic, media, content }) => {
    return (
            <Card>
                <div className="card__details">
                    <CardHeader className="card__header">
                    <CardProfile className="card__profile">
                        <img src={profilePic} alt="profile picture" />
                    </CardProfile>
                    <CardName className="card__name">{name}</CardName>
                        <CardHandle className="card__handle">@{handle}</CardHandle>
                    </CardHeader>
                    <CardContent className="card__content">{content}</CardContent>
                    <CardMedia className="card__media">
                        <img src={media} alt="my pal"/>
                    </CardMedia>
                </div>
            </Card>
    )
}

export default Tweet