import {NextPage} from "next";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import LinksBio from "@/utility/links-bio";
import Icon from "@/components/common/icons/Icon";
import Image from "next/image";
import MeNotionImg from '../../../public/notion_me.png'
import useCurrentDate from "@/hooks/useCurrentDate";


const Links: NextPage = () => {
    const {getCurrentYear} = useCurrentDate();

    return (
        <html>
            <body>
                <Container as="div" className="d-flex flex-column justify-content-between min-vh-100"
                           style={{padding: '64px 16px 10px'}}>
                    <div className="h-100 w-100 mx-auto text-center mb-5" style={{maxWidth: '580px'}}>
                        <Image src={MeNotionImg} alt={'myself image'} width={200} priority/>
                        <h1 className="mt-4 mb-0 fw-bold" style={{fontSize: '3rem'}}>Stefano Satta</h1>
                        <h2 className="fw-medium">Front-end developer</h2>
                        <p className="mb-5 fs-5">Focused on building responsive front-end web applications with
                            modern technologies.</p>
                        {
                            LinksBio.map(( item) => (
                                <Link href={item.link}
                                      target={item.blankTarget ? '_blank' : ''}
                                      className="btn btn-lg btn-black rounded-pill mb-3 d-flex position-relative"
                                      key={item.title}
                                      style={{padding: '36px'}}>
                                    <Icon icon={item.icon} className="me-auto"/>
                                    <span className="centered-absolute">
                                    {item.title}
                                </span>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="text-center mt-5">
                        <p className="m-0">&copy; {getCurrentYear()} Stefano Satta</p>
                    </div>
                </Container>
            </body>
        </html>

    )
}

export default Links;