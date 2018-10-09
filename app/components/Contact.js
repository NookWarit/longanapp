import React, { Component } from 'react';
import {Image} from 'react-native';
import { Container, CardItem, Card, Thumbnail, Text, Body, } from "native-base";
import Master from './layouts/Master';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Master title="ติดต่อเรา" isBack>
            <Card>
              <CardItem header bordered style={{alignSelf:"center"}} >
              <Image source={require("../assets/images/rmutl.jpg")}
                 style={{resizeMode:'contain', width:300 ,height:300}}/>
                </CardItem>
                <CardItem bordered>
                <Body>
                <Text>สถาบันถ่ายทอดเทคโนโลยีเพื่อชุมชน</Text>
                <Text>มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา</Text>
                <Text>ที่อยู่ : 98 หมู่ 8 ตำบลป่าป้อง อำเภอดอยสะเก็ด จังหวัดเชียงใหม่ 50220</Text>
                <Text>โทรศัพท์ : 0 5326 6516 #1032 </Text>
                <Text>โทรสาร : 0 5326 6522</Text>
                <Text>เว็บไซต์ : https://cttc.rmutl.ac.th/</Text>
                </Body>
              </CardItem>
            </Card>
          </Master>
            
        );
    }
}

export default Contact;