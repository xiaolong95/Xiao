
import React, { Component } from "react";
import Trans from "./trans";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: "请输入要查询的工号:"
    };
  }
  render() {
    return (
      <div style={{background:"#FFFFDF", padding: 0,textAlign: 'center'}}>
        {/* <h3>{this.state.test}</h3> */}
        <h2>{this.state.test}</h2>
        {/* <hr /> */}
        <Trans />
      </div>
    );
  }
}
export default App;

// import React,{Component} from 'react';
// import { Layout, Menu, Icon } from 'antd';
// import { HashRouter,Switch,Route,Link } from "react-router-dom";
// import User from "../component/role/app";
// import Role from "../component/role/app";
// import User_role from "../component/user_role/app";
// import APP from "../component/chaxun/sb-wang"
// const { Header, Content, Footer, Sider } = Layout;

// class App extends Component{
    
//     render(){
//         return <HashRouter>
//              <Layout style={{height: '100%'}}>
//         <Sider
//         style={{background:'#003D79'}}
//           breakpoint="lg"
//           collapsedWidth="0"
//           onBreakpoint={broken => {
//             console.log(broken);
//           }}
//           onCollapse={(collapsed, type) => {
//             console.log(collapsed, type);
//           }}
//         >
//           <div className="logo" />
//           <Menu theme="dark" mode="inline" defaultSelectedKeys={['5']}>
//             <Menu.Item key="1">
//               <Icon type="forward" />
            
//              <span className="nav-text "><Link to="/user"><font color = 'white'>用户信息</font></Link></span>
//             </Menu.Item>
//             <Menu.Item key="2">
//             <Icon type="forward" />
 
//               <span className="nav-text "><Link to="/role"><font color = 'red'>角色信息</font></Link></span>
//             </Menu.Item>
//             <Menu.Item key="3">
//             <Icon type="forward" />
        
//               <span className="nav-text "><Link to="/user_role"><font color = 'white'>用户角色详情</font></Link></span>
//             </Menu.Item>
//           </Menu>
//         </Sider>
//         <Layout>
//           <Header style={{ background: 'gray', padding: 0,textAlign: 'center'  }} ><h1 style={{ fontSize:'15px' }}  >User-Role</h1></Header>
//           <Content style={{ margin: '24px 16px 0' ,height: '100%'}}>
//             <div style={{ padding: 24, background: '#fff', minHeight: 800 }}>
//             <Switch>
// {/*  
//     <Route path='/user' component={User}/> */}
    
//     <Route path='/chaxun' component={APP}/>
//     {/* <Route path='/role' component={Role}/>
//     <Route path='/user_role' component={User_role}/> */}
  
// </Switch>
//             </div>
//           </Content>
//           <Footer style={{ textAlign: 'center',background: 'gray' }}>Footer User-Role xiaolong 0809</Footer>
//         </Layout>
//       </Layout>
//         </HashRouter>
//     }
// }
// export default App;

