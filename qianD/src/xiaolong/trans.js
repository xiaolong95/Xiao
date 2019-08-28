import React,{Component} from 'react';
// import EditModal from './xiaolong01/xiaolong011'
import { Button, Table, Modal} from 'antd'
import axios from 'axios'
//  const confirm = Modal.confirm;
  class Trans extends Component{       
    constructor(props) {
        super(props);             
        this.onChange =this.onChange.bind(this);
        this.chaxun = this.chaxun.bind(this);
        this.state = {
            list:[],
            usercode:''
        }      
      }    
          onChange(e){
            this.setState({
              usercode:e.target.value
            })
          }
          chaxun(){       
            var usercode= document.getElementById("usercode").value;  
            axios.post('http://localhost:8080/msg',
                                
                        {
                            "usercode": usercode,//把我前端输入获取的值当做参数跟请求一起发送
                            }
                    
                    ).then((res) => {
                        console.log(res);
                    //  
                    // var param={
                    //      key:'1',
                    //      usercode:res.data.usercode,
                    //      username :res.data.username,
                    //      department:res.data.department,
                    // }
                   var data=[res.data];
                    // console.log(param);
                    this.setState({
                            list:data
                          })
                    })
                    }
               
    render(){
      this.columns = [
       
          {
            title: '职工编号',
            dataIndex: 'usercode',
            key: 'usercode',
         
          },  
          {
            title: '名字',
            dataIndex: 'username',
            key: 'username',
         
          }, 
          {
            title: '部门',
            dataIndex: 'department',
            key: 'department',
          },       
];
        const { usercode } = this.state
        console.log(usercode)
        return (<div style={{background:"#FFFFDF", padding: 0,textAlign: 'center'}}>

     <input placeholder="请输入104-104" id="usercode" onChange={this.onChange} value={usercode}/>
     <Button onClick={this.chaxun.bind(this)}>查询</Button>
        <Table style={{background:"#FFFFDF", padding: 0,align: 'center'}}
        columns = {this.columns}
        dataSource={this.state.list} />
        
         </div> );

    }  
  }
 export default Trans;