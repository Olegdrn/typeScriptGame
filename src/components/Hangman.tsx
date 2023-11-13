import '../style/Hangman.css';
const head: any = (
  <div className='head'></div>
)

const body: any = (
  <div className='body'></div>
)

const rightHand: any = (
  <div className='rightHand'></div>
)

const leftHand: any = (
  <div className='leftHand'></div>
)

const rightLeg: any = (
  <div className='rightLeg'></div>
)

const leftLeg: any = (
  <div className='leftLeg'></div>
)

export function Hangman() {
  return (
    <div className="hangmanBlock">
      {head}
      {body}
      {rightHand}
      {leftHand}
      {rightLeg}
      {leftLeg}
      <div className='rope'></div>
      <div className="topHorizontalLine"></div>
      <div className="mainVerticalLine"></div>
      <div className="bottomHorizontalLine"></div>
    </div>
  )

}