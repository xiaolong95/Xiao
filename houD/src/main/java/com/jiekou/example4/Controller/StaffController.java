package com.jiekou.example4.Controller;

import com.fasterxml.jackson.databind.util.JSONPObject;
import com.jiekou.example4.Pojo.Staff;
import com.jiekou.example4.Utils.StaffData;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class StaffController {

    @Autowired
    private StaffData staffdata;

    //@GetMapping("msg")
    @PostMapping("msg")
    public Staff Showmsg(@RequestBody JSONObject jsonobject){
        System.out.println(jsonobject);
        return staffdata.selectByusercode((Integer.parseInt(jsonobject.getString("usercode"))));
    }

}
