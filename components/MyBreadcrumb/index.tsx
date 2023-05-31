import { Breadcrumb, Row, Avatar, Typography } from "antd";
import { AiFillBell } from 'react-icons/ai';
import React from "react";
import styled from "styled-components";
import { BreadcrumbProps } from "../../types/components/breadcrumb";

import defaultAvatar from "../../../public/images/no_avatar.png";

const ConfigBreadcrumb = styled(Breadcrumb)`
  font-family: "Nunito" !important;
  font-size: 1.25rem;
  font-weight: 700;

  li:last-child {
    color: #ff9138 !important;
  }
`;

const MyBreadcrumb: React.FC<BreadcrumbProps> = ({ separator, items, user }) => {
  return (
    <Row style={{ alignItems: 'center', width: '100%', padding: '1rem 3rem 0 1rem', height: 60, zIndex: 9999 }} justify='space-between'>
      <ConfigBreadcrumb separator={separator} items={items} />
      <Row style={{ alignItems: 'center' }}>
        <Row style={{ backgroundColor: '#f7eee6', padding: '.5rem', borderRadius: '50%', cursor: 'pointer', marginRight: '1rem' }}>
          <AiFillBell style={{ color: '#FF9138', fontSize: '1rem' }}/>
        </Row>
        <Row style={{ marginRight: '.5rem' }}>
            <Avatar src={defaultAvatar} alt="avatar" size='large'/>
        </Row>
        <div>
            <Typography.Text style={{ fontFamily: 'Nunito', fontSize: 12, color: '#535261' }}>Xin chào</Typography.Text>
            <Typography.Paragraph style={{ fontFamily: 'Nunito', fontWeight: 700, margin: 0 }}>{user?.fullName}</Typography.Paragraph>
        </div>
      </Row>
    </Row>
  );
};

export default MyBreadcrumb;
