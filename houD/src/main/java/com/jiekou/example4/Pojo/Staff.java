package com.jiekou.example4.Pojo;

import java.io.Serializable;

public class Staff implements Serializable{
    private int usercode;
    private String username;
    private String department;
    public Staff() {
    }
    public Staff(int usercode, String username, String department) {
        this.usercode = usercode;
        this.username = username;
        this.department = department;
    }
    public int getUsercode() {
        return usercode;
    }
    public void setUsercode(int usercode) {
        this.usercode = usercode;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getDepartment() {
        return department;
    }
    public void setDepartment(String department) {
        this.department = department;
    }
    @Override
    public String toString() {
        return "Staff{" +
                "usercode=" + usercode +
                ", username='" + username + '\'' +
                ", department='" + department + '\'' +
                '}';
    }
}
