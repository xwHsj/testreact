import React from 'react'
import logo from './logo.svg'
import './App.css'
import { LocaleProvider, DatePicker, message } from 'antd'

// import 'antd/lib/date-picker/style/css' // 按需加载
// import 'antd/dist/antd.css' // 全部加载

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import RouterWrap from './router'

moment.locale('zh-cn') // 切换中文

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <RouterWrap/>
      </div>
    )
  }
}

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       date: ''
//     }
//   }
//   handleChange(date) {
//     message.info('您选择的日期是: ' + (date ? date.toString() : ''))
//     this.setState({ date })
//   }
//   render() {
//     return (
//       <LocaleProvider locale={zhCN}>
//         <div style={{ width: 400, margin: '100px auto' }}>
//           <h1><img src={logo} /></h1>
//           <DatePicker onChange={value => this.handleChange(value)} />
//           <div style={{ marginTop: 20 }}>当前日期：{this.state.date && this.state.date.toString()}</div>
//         </div>
//       </LocaleProvider>
//     )
//   }
// }

export default App
