import React, { Component } from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react';
import PickImage from './PickImage';
import styled from 'styled-components'




const EmojiIcon = styled.img`
height: 3rem;
`

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4.3em;
  font-family: 'Sue Ellen Francisco', cursive;
  color: #7e7c88;
  padding-bottom: 0.2em;
`;



const CreateButton = styled(Button)`
  && {
    background-color: #7e7c88;
    color: rgb(246, 244, 244);
    padding: 3px 9px;
    margin-top: 7%;
    }
`;
const PageWrapper = styled.div`
  width: 53.45rem;
  padding-bottom: 10%;
`

const TitleWrapper = styled.div`
  padding: 1.4rem 0;
`

const MainContent = styled.div`
  width: 53.45rem;
  

`

const ContentWrapper = styled.div`
     max-width: 940px;
     margin: 1rem auto 0 0;
     display: grid;
     grid-template-columns: 1fr 1fr;
     grid-gap: 10px;
`

const QuestionWrapper = styled.div`
  padding-top: 1.5rem;
  text-align: right;
`


const AnswerWrapper = styled.div`
  text-align: left;
  border-top: 1px solid lightgrey;
  padding: 1rem;
    flex-direction: column;
    display: flex;
    
`

const Question = styled.header`
  font-family: 'Roboto Slab';
  width: 90%;

`



class WriteEntry extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            content: ''
        };
    }
    selectImage = photo => {
        this.setState({
            chosenPhoto: photo
        });
    };
    deleteChosenPhoto = () => {
        this.setState({
            chosenPhoto: null
        });
    };
    handleKeyPress = event => {
        if (event.which === 13) {
            event.preventDefault();
        }
    };
    async handleSubmit(event) {
        event.preventDefault();
        if (!this.canSubmit()) {
            this.setState({ errorMessage: "Please fill out all fields!" });
        }
        else {
            var uploadImage = this.state.chosenPhoto;
            const data = {
                title: this.state.title,
                content: this.state.content               
            };
            
            const p2 = uploadImage.userUploaded
                (console.log(
                    'User chose to upload photo.',
                    uploadImage
                ),
                this.setState({ loadingWrite: true }),
                    storageRef
                    .child(
                        `user_uploaded_photos/${travellerId}/${
                        this.state.title
                        }/${uploadImage.name}`
                    )
                    .put(uploadImage)
                    .then(snapshot => {
                        data.full_image_url = snapshot.downloadURL;
                        data.thumbnail_image_url = snapshot.downloadURL;
                    }))
        }        
    };
   
    render() {
        return (
            <div style={{ display: 'flex', 'align-content': 'center', 'justify-content': 'center' }} >
                <PageWrapper>
                    <PickImage
                        chosenPhoto={this.state.chosenPhoto}
                        deleteChosenPhoto={this.deleteChosenPhoto}
                    />
                    <TitleWrapper>
                        <Title>Write a new entry</Title>
                    </TitleWrapper>
                    <form>
                        <MainContent>
                            <ContentWrapper>
                                <QuestionWrapper>
                                    <Question>Title</Question>
                                </QuestionWrapper>
                                <AnswerWrapper>
                                    <Input
                                        value={this.state.title}
                                        onChange={e => this.setState({ title: e.target.value })}
                                    />
                                </AnswerWrapper>
                            </ContentWrapper>
                            <ContentWrapper>
                                <QuestionWrapper>
                                    <Question>What were the highlights of today's adventure?</Question>
                                </QuestionWrapper>
                                <AnswerWrapper>
                                    <Input
                                        type="text"
                                        value={this.state.content}
                                        onChange={e => this.setState({ content: e.target.value })}
                                    />
                                </AnswerWrapper>
                            </ContentWrapper>
                            <Button onClick={this.handleSubmit}>
                                {this.state.loadingWrite ? 'Uploading...' : 'Submit'}
                            </Button>
                        </MainContent>
                    </form>
                </PageWrapper>
            </div>
        )
    }
}

export default WriteEntry;
