import React, { Component } from 'react';
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLable from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
// import FormControl from '@material-ui/core/FormControl'
import oneA from './1a.jpg';
import oneB from './1b.jpg';
import oneC from './1c.jpg';
import oneD from './1d.jpg';
import twoA from './2a.jpg';
import twoB from './2b.jpg';
import twoC from './2c.jpg';
import twoD from './2d.jpg';
import threeA from './3a.jpg';
import threeB from './3b.jpg'
import threeC from './3c.jpg'
import threeD from './3d.jpg'
import fourA from './4a.jpg';
import fourB from './4b.jpg';
import fourC from './4c.jpg';
import fourD from './4d.jpg';
import five from './5.jpg';
import { makeStyles } from '@material-ui/styles';

import './App.css';
import { green } from '@material-ui/core/colors';

const title = [
  " 从性格看你适合的大学，性格与学校的相融能提升你的学习质量。但似乎每个人都很清楚自己，但却又是最不了解自己。以致于选择学校和专业上也有很多犹豫。如果你已躺中，做做这个测试，让它帮你理清头绪吧",
  "以下四张图片，哪一张最能表达你现在的心情？",
  "以下四张图片，哪一张是你的日常穿搭风格？", 
  "你洗澡的时候会最先选择洗什么部位？", 
  "不考虑任何现实因素，你最想去以下哪个地方旅游",
  "这是一张经典的墨迹测试图片，可以检测出人类的深层心理，你在这张图片中看出了什么" ]

const anwser = [
  "人体，人体的一部分",
  "动物",
  "性器官",
  "数字"
]

const analysis = [
  "你敏感深刻、自由奔放，喜欢在宽松自由的环境中，借助于音乐、文字、形体、色彩等形式表达自己的感受，追求与众不同。有时候你无法忍受机械化的生活方式，严肃的纪律和一成不变的例行公事，或者不擅长逻辑和科学方面的思考或从事纪律严格的工作。你具有浓厚的艺术气息，有那种把自己的感情融入工作中的天性，你需要一份能够充分发挥才能的工作，尤其是适合需要高度创意和改建性的内容。",
  "你热情友善、容易相处、和谁都能打成一片，成为好朋友。在人与事物之间，偏爱与人打交道。你的关键词是活力。你具有开拓者的胸怀，喜欢从事竞争性的工作;你注重和谐，任何关系都可以保持在良好的互动与了解上。不论是外交或者是在公共关系的领域，都是你这样的“社会型”达人一展才干的领域",
  "你精明自信、乐观进取，对商业信息比较敏感，善于说服他人接受自己的观点，喜欢追求经济效益和个人成就，具有一定的组织计划能力。你属于“经营型”人才。慎重、冷静，做事脚踏实地，接受能力快、坚持事物的完美度，比较追求物质上的满足。你对数字敏感，对钱有着特殊的感觉。你的分析力极强，大量的数据和资料，统统都难不倒你。",
  "你严谨缜密、勤学好问，善于观察分析、逻辑推理，喜欢以理性思考的方式探究事物。你是高端研究型人才，你无法忍受单调的例行公事，更喜欢有成就感的工作。你有时候会全神贯注在长期性的探索当中，追根究底地进行研究学术工作。你喜欢挑战甚至会强迫自己置身于麻烦中，努力从逆境中建立起自己的基业。任何使你的能力面临最大考验的工作，都能够满足你对工作的需求"
]

const universities = [
  "加州大学伯克利分校",
  "英属哥伦比亚大学",
  "纽约大学",
  "普林斯顿大学",
  "哈佛大学",
  "斯坦福大学",
  "多伦多大学",
  "杜克大学",
  "麻省理工学院",
  "哥伦比亚大学",
  "耶鲁大学",
  "康奈尔大学",
  "加州理工学院",
  "麦吉尔大学",
  "帝国理工学院",
  "宾夕法尼亚大学"
]

const result = [
  {"first" : "对于这样的你，", "second": "会成为你最棒的选择。"},
  {"first" : "这样充满魅力的你，", "second" : "和你最为相配。"},
  {"first" : "你是金字塔上端的人才，", "second" : "能够辅助你完成梦想。"},
  {"first" : "在你身上，充满着无限的可能，", "second" : "是最能帮助你成就未来的选择。"}
]

const start = "开始"

const useStyles = makeStyles(theme => ({
  root: {
    background: '#EEE',
    padding: 16,
  },

}));



function Question1(props) {
//  const classes = useStyles();
  if (props.question === 1) {
    return (
      <div>
      <RadioGroup onChange={props.onChange} name="Q1" >
        <p>{title[1]}</p>
        <FormControlLable value="1" control = {<Radio />} label = {<img src = {oneA} alt = "" width="50%" height=""/>} />
        <FormControlLable value="2" control = {<Radio />} label = {<img src = {oneB} alt = "" width="50%" height=""/>} />
        <FormControlLable value="3" control = {<Radio />} label = {<img src = {oneC} alt = "" width="50%" height=""/>} />
        <FormControlLable value="4" control = {<Radio />} label = {<img src = {oneD} alt = "" width="50%" height=""/>} />
      </RadioGroup>
      </div>
    );
  }

  return null;
}

function Question2(props) {

  if (props.question === 2) {
    return (
      <RadioGroup onChange={props.onChange} name="Q2">
        <p>{title[2]}</p>
        <FormControlLable value="1" control = {<Radio />} label = {<img src = {twoA} alt = "" width="50%" height=""/>} />        
        <FormControlLable value="2" control = {<Radio />} label = {<img src = {twoB} alt = "" width="50%" height=""/>} />
        <FormControlLable value="3" control = {<Radio />} label = {<img src = {twoC} alt = "" width="50%" height=""/>} />
        <FormControlLable value="4" control = {<Radio />} label = {<img src = {twoD} alt = "" width="50%" height=""/>} />
      </RadioGroup>
    );
  }

  return null;
}

function Question3(props) {

  if (props.question === 3) {
    return (
      <RadioGroup onChange={props.onChange} name="Q3" >
        <p>{title[3]}</p>
        <FormControlLable value="1" control = {<Radio />} label = {<img src = {threeA} alt = "" width="50%" height=""/>} />        
        <FormControlLable value="2" control = {<Radio />} label = {<img src = {threeB} alt = "" width="50%" height=""/>} />
        <FormControlLable value="3" control = {<Radio />} label = {<img src = {threeC} alt = "" width="50%" height=""/>} />
        <FormControlLable value="4" control = {<Radio />} label = {<img src = {threeD} alt = "" width="50%" height=""/>} />
      </RadioGroup>
    );
  }

  return null;
}

function Question4(props) {

  if (props.question === 4) {
    return (
      <RadioGroup onChange={props.onChange} name="Q4" >
        <p>{title[4]}</p>
        <FormControlLable value="1" control = {<Radio />} label = {<img src = {fourA} alt = "" width="50%" height=""/>} />
        <FormControlLable value="2" control = {<Radio />} label = {<img src = {fourB} alt = "" width="50%" height=""/>} />
        <FormControlLable value="3" control = {<Radio />} label = {<img src = {fourC} alt = "" width="50%" height=""/>} />
        <FormControlLable value="4" control = {<Radio />} label = {<img src = {fourD} alt = "" width="50%" height=""/>} />
      </RadioGroup>
    );
  }

  return null;
}

function Question5(props) {
  if (props.question === 5) {
    return (
      <RadioGroup onChange={props.onChange} name="Q5" >
        <img src = {five} alt = "" width = "50%" />
        <p>{title[5]}</p>
        <FormControlLable value="1" control = {<Radio />} label = {anwser[0]} />
        <FormControlLable value="2" control = {<Radio />} label = {anwser[1]} />
        <FormControlLable value="3" control = {<Radio />} label = {anwser[2]} />
        <FormControlLable value="4" control = {<Radio />} label = {anwser[3]} />
      </RadioGroup>
    );
  }

  return null;
}

// function Acculator(props) {
//    return props.acculator.reduce((acc, cur) => parseInt(acc, 10) + parseInt(cur, 10), 0)

//   // for (let x in props.acculator) {
//   //   debugger
//   //   add += x;
//   //   console.log(add);
//   // }
//   // return add;
// }

class App extends React.Component {

  constructor(props) {
    super(props);
//    var result = [];
    this.state = {page : 0, value : 0, result : 0}
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState(function(state) {

      return {page: state.page + 1};
    });
  }

  handleChange(event) {
    this.setState(
      {
        page: this.state.page + 1, result: parseInt(this.state.result) + parseInt(event.target.value)
        // page: ++this.state.page, result: [...this.state.result, event.target.value]
      });
  }
  
  render() {

    if (this.state.page < 6) {

      if (this.state.page === 0) {
        return (
          <div >
            <p>{title[0]}</p>
            <button onClick={this.handleClick} style={{margin: 'auto'}}>
              {start}
            </button>
          </div>
          
        );
      }

      return (
        <div>
          <Question1 question={this.state.page} onChange={this.handleChange} />
          <Question2 question={this.state.page} onChange={this.handleChange} />
          <Question3 question={this.state.page} onChange={this.handleChange} />
          <Question4 question={this.state.page} onChange={this.handleChange} />
          <Question5 question={this.state.page} onChange={this.handleChange} />

        </div>
      );
    }

    let division = parseInt((this.state.result - 1)/4) - 1;

//    if (this.state.result > 16) {
    return (
       <div >
         <p>{analysis[division]}</p>
         <p>{result[division].first}{universities[this.state.result-5]}{result[division].second}</p>
       </div>
      );
//    }

    // if (this.state.result > 12) {
    //   return (
    //     <div>
    //       <p>{analysis[2]}</p>
    //       <p>{"你是金字塔上端的人才，"}{universities[this.state.result-5]}{"能够辅助你完成梦想。"}</p>
    //     </div>
    //   );
    // }

    // if (this.state.result > 8) {
    //   return (
    //     <div>
    //     <p>{analysis[2]}</p>
    //     <p>{"这样充满魅力的你，"}{universities[this.state.result-5]}{"和你最为相配。"}</p>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     {/* <Acculator acculator = {this.state.result} />       */}
    //     <p>{analysis[0]}</p>  
    //     <p>{"对于这样的你，"}{universities[this.state.result-5]}{"会成为你最棒的选择。 "}</p>
    //   </div>
    // );
  }
}

export default App;
