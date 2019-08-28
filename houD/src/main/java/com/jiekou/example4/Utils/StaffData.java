package com.jiekou.example4.Utils;

import com.jiekou.example4.Pojo.Staff;
import org.springframework.stereotype.Repository;

import java.util.HashMap;
import java.util.Map;

@Repository
public class StaffData {

    private static Map<Integer, Staff> staff=new HashMap<Integer, Staff>();

    static {
        staff.put(101,new Staff(101,"王狗帅","C1-研发中心"));
        staff.put(102,new Staff(102,"赵小姐 ","武汉技术开发部"));
        staff.put(103,new Staff(103,"王小璐 ","共享交付部"));
        staff.put(104,new Staff(104,"陈话痨 ","云快报"));
    }

    public Staff selectByusercode(int usercode){
        return staff.get(usercode);
    }

}
