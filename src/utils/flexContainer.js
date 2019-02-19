export default (direction, justify, align) => `
display: -webkit-box;
display: -moz-box;
display: -ms-flexbox;
display: -webkit-flex;
display: flex;
flex-direction: ${direction};
justify-content: ${justify};
align-items: ${align}
`;
