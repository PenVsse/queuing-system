import React, { useState, useEffect } from 'react';
import "./Dashboard.scss"
import { Breadcrumb, Col, Row, Select } from 'antd';
import { Card } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import IconSothutudacap from "../../assets/images/icon-sothutudacap.png"
import IconSttdasudung from "../../assets/images/icon-sttdasudung.png"
import IconSttdangcho from "../../assets/images/icon-sttdangcho.png"
import IconSttdaboqua from "../../assets/images/icon-sttdaboqua.png"
import { Area } from '@ant-design/plots';
import IconThongBao from "../../assets/images/icon-thongbao.png"
import avt from "../../assets/images/avt.png"
import tongquan1 from "../../assets/images/tongquan1.png"
import IconThietbi from "../../assets/images/icon-thietbi.png"


const DemoArea = () => {
    const [data, setData] = useState([{
        "Date": "1",
        "value": 1998
    },
    {
        "Date": "2",
        "value": 1850
    },
    {
        "Date": "3",
        "value": 1850
    },
    {
        "Date": "4",
        "value": 1850
    },
    {
        "Date": "5",
        "value": 1850
    },
    {
        "Date": "6",
        "value": 1850
    },
    {
        "Date": "7",
        "value": 1850
    },
    {
        "Date": "8",
        "value": 1850
    },
    {
        "Date": "9",
        "value": 1850
    },
    {
        "Date": "10",
        "value": 1850
    },
    {
        "Date": "11",
        "value": 1150
    },
    {
        "Date": "12",
        "value": 1210
    },
    {
        "Date": "13",
        "value": 3850
    },
    {
        "Date": "14",
        "value": 1250
    },
    {
        "Date": "15",
        "value": 850
    },
    {
        "Date": "16",
        "value": 1850
    },
    {
        "Date": "17",
        "value": 850
    },
    {
        "Date": "18",
        "value": 385
    },
    {
        "Date": "19",
        "value": 3850
    },
    {
        "Date": "20",
        "value": 350
    }, {
        "Date": "21",
        "value": 3850
    }, {
        "Date": "22",
        "value": 3850
    },
    ]);
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     asyncFetch();
    // }, []);

    // const asyncFetch = () => {
    //     fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
    //         .then((response) => response.json())
    //         .then((json) => setData(json))
    //         .catch((error) => {
    //             console.log('fetch data failed', error);
    //         });
    // };
    const config = {
        data,
        xField: 'Date',
        yField: 'value',
        xAxis: {
            range: [0, 1],
            tickCount: 3,
        },
        smooth: true,
    };

    return <Area {...config} />;
};
const Dashboard: React.FC = () => {
    return (
        <>
            <Row className='container' style={{ height: "100%" }}>
                <Col className="container-left" span={16} >
                    <div className='text-dashboard'>Dashboard</div>
                    <div className="title">Biểu đồ cấp số</div>
                    <div className='header'>
                        <Card className='card'>
                            <img className='card-icon' src={IconSothutudacap} />
                            <div className='card-title'> Số thứ tự đã cấp</div>
                            <div className='card-value'>4.221</div>
                            <div className='card-percent-up'>
                                <ArrowUpOutlined className='percent-icon' />
                                <div className='percent-number' >32,41%</div>
                            </div>
                        </Card>
                        <Card className='card'>
                            <img className='card-icon' src={IconSttdasudung} />
                            <div className='card-title'> Số thứ tự đã sử dụng</div>
                            <div className='card-value'>3.721</div>
                            <div className='card-percent-down'>
                                <ArrowDownOutlined className='percent-icon' />
                                <div className='percent-number' >32,41%</div>
                            </div>
                        </Card>
                        <Card className='card'>
                            <img className='card-icon' src={IconSttdangcho} />
                            <div className='card-title'> Số thứ tự đang chờ</div>
                            <div className='card-value'>468</div>
                            <div className='card-percent-up'>
                                <ArrowUpOutlined className='percent-icon' />
                                <div className='percent-number' >56,41%</div>
                            </div>
                        </Card>
                        <Card className='card'>
                            <img className='card-icon' src={IconSttdaboqua} />
                            <div className='card-title'> Số thứ tự đã bỏ qua</div>
                            <div className='card-value'>32</div>
                            <div className='card-percent-down' >
                                <ArrowDownOutlined className='percent-icon' />
                                <div className='percent-number' >22,41%</div>
                            </div>
                        </Card>
                    </div>
                    <Card className='chart'>
                        <div className='chart-text-theongay'>Bảng thống kê theo ngày</div>
                        <div className='chart-text-time'>Tháng 11/2021</div>
                        <div className='dropdown'>
                            <div className='dropdown-text'>Xem theo</div>
                            <Select
                                defaultValue={'Ngày'}
                                size='large'
                                style={{ width: 106 }}
                                options={[
                                    { value: 'Ngày', label: 'Ngày' },
                                    { value: 'Tháng', label: 'Tháng' },
                                    { value: 'Năm', label: 'Năm' },
                                ]}
                            />

                        </div>

                        <div className='chart-main'>
                            <DemoArea />
                        </div>
                    </Card>
                </Col>
                <Col span={8} className="container-right" >
                    <div>
                        <Breadcrumb  >
                            <img className='icon-thongbao' src={IconThongBao}></img>
                            <img className='avt' src={avt}></img>
                            <div className='text-helloaccount'>
                                <div className='text-helloaccount-xinchao'>Xin chào</div>
                                <div className='text-helloaccount-name'>asd</div>
                            </div>
                        </Breadcrumb>

                    </div>

                    <div className='title'>Tổng quan</div>
                    <Card className='card-thietbi'>
                        <img className='img-thietbi' src={tongquan1}></img>
                        <div className='cp1-thietbi'>
                            <div className='number-thietbi'>4.221</div>
                            <img className='icon-thietbi' src={IconThietbi}></img>
                            <div className='text-thietbi'>Thiết bị</div>
                        </div>
                        <div className='cp2-thietbi'>
                            <div className='cp2-thietbi-text'>Đang hoạt động</div>
                            <div className='cp2-thietbi-number'>3.779</div>
                        </div>
                        <div className='cp3-thietbi'>
                            <div className='cp3-thietbi-text'>Ngưng hoạt động</div>
                            <div className='cp3-thietbi-number'>422</div>
                        </div>
                    </Card>


                </Col>
            </Row>
        </>
    );
};

export default Dashboard;