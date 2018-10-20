import React, { Component } from 'react';
import { Dimensions ,Image } from "react-native";
const { height, width } = Dimensions.get("window");
import { Container, CardItem, Card, Thumbnail, Text, Body, } from "native-base";
import { Grid , Row , Col} from "react-native-easy-grid"
import Master from './layouts/Master';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Master title="ติดต่อเรา" isBack>
            <Grid>
            <Card>
                <Row size={30}>
              <Image source={require("../assets/images/rmutl.png")}
                 style={{resizeMode:'contain', width:width ,height:250 ,alignSelf:"center"}}/>
                </Row>
                <Row size={70}>
                <CardItem bordered style={{padding:5 , width:width}}>
                <Body >
                {/* <Text style={{alignSelf:"center"}}>สถาบันถ่ายทอดเทคโนโลยีเพื่อชุมชน</Text>
                <Text style={{alignSelf:"center"}}>มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา</Text> */}
                <Text style={{paddingTop:15}}>ที่อยู่ : 98 หมู่ 8 ตำบลป่าป้อง อำเภอดอยสะเก็ด จังหวัดเชียงใหม่ 50220</Text>
                <Text>โทรศัพท์ : 0 5326 6516 #1032 </Text>
                <Text>โทรสาร : 0 5326 6522</Text>
                <Text>เว็บไซต์ : https://cttc.rmutl.ac.th/</Text>
                </Body>
              </CardItem>
              </Row>
            </Card>
            </Grid>
          </Master>
        );
    }
}

export default Contact;