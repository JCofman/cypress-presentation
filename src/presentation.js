// Import React
import React from "react";
import styled from "styled-components";
import axios from "axios";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  Appear,
  List,
  Quote,
  Slide,
  Image,
  Text
} from "spectacle";

import Terminal from "spectacle-terminal";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "./style.css";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#f2f2f2",
    tertiary: "#063c7e",
    quartenary: "#9ccd00",
    neoncyan: "#6FAEB5",
    neoncyan2: "#86C0C9",
    neonbggray: "#1B1E28",
    neonpink: "#F54279",
    test: "#f2f2f2"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica",
    tertiary: "Neoneon"
  }
);

const CustomHeading = styled(Heading)`
  color: #9ccd00;
  font-family: Neoneon !important;
  transform: skew(0, -8deg);
  font-weight: 100 !important;
  text-shadow: -1px -1px 250px #9ccd00, 1px 1px 50px #9ccd00,
    -1px -1px 50px #9ccd00, 1px 1px 50px #9ccd00;
`;

const CustomTest = styled(Text)`
  color: #9ccd00 !important;
  font-family: Neoneon !important;
  transform: skew(0, -8deg);
  font-weight: 100 !important;
  text-shadow: -1px -1px 250px #9ccd00, 1px 1px 50px #9ccd00,
    -1px -1px 50px #9ccd00, 1px 1px 50px #9ccd00;
`;

const CustomCite = styled(Cite)`
  padding: 100px;
  color: #6faeb5 !important;
`;

const CustomQuote = styled(Quote)`
  border-left: 1px solid #9ccd00 !important;
  color: #9ccd00 !important;
  font-family: Neoneon !important;
  transform: skew(0, -8deg);
  font-weight: 100 !important;
  text-shadow: -1px -1px 250px #9ccd00, 1px 1px 50px #9ccd00,
    -1px -1px 50px #9ccd00, 1px 1px 50px #9ccd00;
`;
export default class Presentation extends React.Component {
  state = {
    steps: 0,
    gitInovexMembers: [],
    errorMessage: ""
  };

  updateSteps = steps => {
    if (this.state.steps !== steps) {
      // eslint-disable-line no-invalid-this
      this.setState({ steps }); // eslint-disable-line no-invalid-this
    }
  };

  fetchGithub = () => {
    axios
      .get("https://api.github.com/orgs/inovex/members")
      .then(response => {
        // eslint-disable-line no-invalid-this
        this.setState({
          gitInovexMembers: response.data
        });
      })
      .catch(error => {
        console.log(error.response);
        this.setState({
          errorMessage: `HTTPERROR: ${error.response.status}  ${
            error.response.data.message
          }`
        });
        console.log(error);
      });
  };
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        progress="pacman"
      >
        <Slide
          transition={["fade"]}
          bgImage={"./assets/first.jpg"}
          bgDarken={0.7}
        >
          <CustomHeading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="quartenary"
          >
            E2E Testing with cypress.io
          </CustomHeading>
          <h4 textColor="quartenary">
            The new{" "}
            <span role="img" aria-label="firelogo">
              🔥
            </span>shinny<span role="img" aria-label="firelogo">
              🔥
            </span>{" "}
            Testingtool?{" "}
          </h4>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={"./assets/jacob1.jpg"}
          bgDarken={0.9}
        >
          <BlockQuote>
            <CustomQuote>Jacob Cofman</CustomQuote>
            <CustomCite>Everything is better with sun.</CustomCite>
          </BlockQuote>
          <ul className="socialIcons">
            <li>
              {" "}
              <a href="https://twitter.com/JCofman">
                <svg
                  aria-labelledby="simpleicons-twitter-icon"
                  fill="#fff"
                  height="32"
                  width="32"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="simpleicons-twitter-icon">Twitter icon</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/JCofman">
                <svg
                  aria-labelledby="simpleicons-github-icon"
                  fill="white"
                  height="32"
                  width="32"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title id="simpleicons-github-icon">GitHub icon</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </li>
            <li>
              {" "}
              <svg
                aria-labelledby="simpleicons-gmail-icon"
                fill="white"
                height="32"
                width="32"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="simpleicons-gmail-icon">Gmail icon</title>
                <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
              </svg>
            </li>
          </ul>
          <Text textColor="white" size={1}>
            jCofman
          </Text>
        </Slide>
        <Slide
          transition={["fade"]}
          bgImage={"./assets/emo.jpg"}
          bgDarken={0.75}
          bgColor="primary"
        >
          <CustomHeading size={1} caps lineHeight={1} textColor="quartenary">
            Why?
          </CustomHeading>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          bgImage={"./assets/why.jpeg"}
          bgDarken={0.75}
        >
          <CustomHeading size={1} caps lineHeight={1} textColor="quartenary">
            Cypress
          </CustomHeading>
          <p>nope not a city in California and not a tree</p>
          <Appear>
            <Image src="./assets/selector.gif" width={800} />
          </Appear>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          bgImage={"./assets/features.jpeg"}
          bgDarken={0.85}
        >
          <CustomHeading size={1} caps lineHeight={1} textColor="quartenary">
            Features{" "}
          </CustomHeading>
          <List>
            <Appear>
              <ListItem>🐆 Really fast</ListItem>
            </Appear>
            <Appear>
              <ListItem>🏔️ Explore everything inside the browser</ListItem>
            </Appear>
            <Appear>
              <ListItem>💻 Dashboard </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                🛠️ Open devtools (maintaining and debugging E2E-tests super
                easy)
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>⏳ Time travel</ListItem>
            </Appear>
            <Appear>
              <ListItem>🖼️ Screenhots and videos</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="neonbggray"
          bgImage={"./assets/getting.jpeg"}
          bgDarken={0.8}
        >
          <CustomHeading size={1} caps lineHeight={2} textColor="quartenary">
            Getting Started
          </CustomHeading>
          <Terminal
            title="1. jcofman@inovex.de: ~(zsh)"
            output={[
              "yarn add --dev cypress // or npm install --save-dev cypress",
              <div style={{ color: "#33B969" }}>
                =============================== installation complete
                ===============================
              </div>,
              "./node_modules/.bin/cypress open",
              <div style={{ color: "#33B969" }}>
                Opens GUI and generates basic structure and first tests...
              </div>
            ]}
          />
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="neonbggray"
          bgDarken={0.6}
          bgImage={
            "https://images.unsplash.com/photo-1491924759721-64cea51ecd6e?ixlib=rb-0.3.5&s=f82c345ebdacc5ee0dfd81543fb3fd5a&auto=format&fit=crop&w=3302&q=80"
          }
        >
          <CustomHeading size={1} caps lineHeight={1} textColor="quartenary">
            Tradeoffs
          </CustomHeading>
          <List>
            <Appear>
              <ListItem>
                Only Chrome (Firefox support in progress) others comming soon.
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>IE 11 most likely never.</ListItem>
            </Appear>
            <Appear>
              <ListItem>Currently no first class fetch() support</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                No API to interact with specific browser features
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Write tests only in JavaScript</ListItem>
            </Appear>
            <Appear>
              <ListItem>Not as established as Webdriver...</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="neonbggray"
          getAppearStep={this.updateSteps}
        >
          <button className="glow-button" onClick={this.fetchGithub}>
            EXAMPLE
          </button>
          {this.state.errorMessage.length > 0 ? (
            <p>{this.state.errorMessage}</p>
          ) : (
            <div className="member__container">
              {this.state.gitInovexMembers.map(member => (
                <div key={member.id}>
                  <a href={member.html_url}>
                    <img className="member__avatar" src={member.avatar_url} />
                  </a>
                  <span>{member.login}</span>
                </div>
              ))}
            </div>
          )}
          {this.state.gitInovexMembers.length > 0 && (
            <p>
              Gesamtanzahl an Mitgliedern bei{" "}
              <a href="https://github.com/inovex">https://github.com/inovex</a>{" "}
              : <CustomTest>{this.state.gitInovexMembers.length}</CustomTest>
            </p>
          )}
        </Slide>
        <Slide
          transition={["fade"]}
          bgColor="primary"
          bgDarken={0.85}
          bgImage={
            "https://images.unsplash.com/photo-1507914997623-5b75b37d9cad?ixlib=rb-0.3.5&s=c41bbd283c5ef488a31239971604689f&auto=format&fit=crop&w=3304&q=80"
          }
        >
          <CustomHeading size={1} caps lineHeight={1} textColor="quartenary">
            Further Ressources
          </CustomHeading>
          <List>
            <a href="https://glebbahmutov.com/blog/cypress-tips-and-tricks/">
              <ListItem>Cypress tips and tricks</ListItem>
            </a>
            <a href="https://www.youtube.com/watch?v=lK_ihqnQQEM&feature=youtu.be">
              <ListItem>Testing the way it should be (Youtube)</ListItem>
            </a>
            <a href="https://docs.cypress.io/examples/examples/tutorials.html">
              <ListItem>Video tutorial (react app)</ListItem>
            </a>
            <ListItem>
              <a href="https://docs.cypress.io/guides/overview/why-cypress.html">
                Cypress docu
              </a>
            </ListItem>
          </List>
        </Slide>
        <Slide
          transition={["fade"]}
          bgDarken={0.7}
          bgColor="secondary"
          textColor="primary"
          bgImage={
            "https://images.unsplash.com/photo-1443916568596-df5a58c445e9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a8b7f1061a6e24185a866576497490e2&auto=format&fit=crop&w=3200&q=80"
          }
        >
          <CustomHeading size={1} caps lineHeight={1} textColor="quartenary">
            Happy Testing
          </CustomHeading>
        </Slide>
      </Deck>
    );
  }
}
