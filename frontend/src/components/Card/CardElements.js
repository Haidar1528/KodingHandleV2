import styled from 'styled-components'

export const CardContainer = styled.div`
		// height: 400px;
	display: flex;
	justify-content: center;
	flex-direction; column;
	align-items: center;
	background: #fff;

	@media screen and (max-width: 768px) {
		// height: 700px
	}

	@media screen and (max-width: 480px) {
		// height: 700px;
	}
`
export const CardH1W = styled.div`
display:flex;
background: #212121;
width: 60vw;
margin: auto;
border-radius: 10px;
justify-content:center;
align-items: center;
text-align:center;
margin-bottom: 32px;
margin-top: 32px;
`
export const CardH1 =styled.h1`
  color: red;
  text-align: center;
  font-size: 48px;

  @media screen and (max-width: 768px){
  	font-size: 26px;
  }
`;

export const CardBG = styled.div`
	display: flex;
	flex-direction: column;
	margin:auto;
`

export const CardWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 480px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`

export const Cards = styled.div`
	background: #212121;
	display: flex;
	flex-direction: column;
	justify-content: flex-start
	align-items: center;
	border-radius: 10px;
	max-height: 100%;
	width: 100%px;
	margin: 30px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.2);
	transition: all 0.2s ease-in-out;

	&:hover{
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`
export const CardImg = styled.img`
		height: 500%;
	width: 100%;
	display: flex;
	border-radius: 4px;
	
	margin: auto;
`

export const CardTitle = styled.h2`
		font-size: 1.8rem;
	margin-bottom: 10px;
	margin-top: 10px;
	text-align: left;
	color: #fff;
`
export const CardInfo = styled.p`
	font-size: 1rem;
	margin-bottom: 10px;
	text-align: left;
	color: #fff;
`