import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading} from "./footerstyle";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>replace</Heading>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
		</Column>
		<Column>
			<Heading>replace</Heading>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
		</Column>
		<Column>
			<Heading>replace</Heading>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
			<FooterLink href="#">replace</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="facebook">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
