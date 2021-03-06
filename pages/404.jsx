import { Button } from "react-bootstrap";
import Star from "../components/common/universe/Star";
import {useRouter} from 'next/router'
import Moon from "../components/common/universe/Moon";
import Sun from "../components/common/universe/Sun";
import Astronaut from "../components/common/universe/Astronaut";


const Custom404Page = () => {
    const router = useRouter();

    return (<>
        <div className="w-100 vh-100 bg-dark overflow-hidden position-relative">
            <Moon/>
            <Star top={'13%'} right={'53%'}/>
            <Star top={'70%'} right={'30%'}/>
            <Star top={'5%'} right={'33%'}/>
            <Star top={'44%'} right={'40%'}/>
            <Star top={'40%'} right={'22%'}/>
            <Star top={'90%'} right={'5%'}/>
            <Star top={'10%'} right={'10%'}/>
            <Star top={'95%'} right={'50%'}/>
            <Star top={'15%'} right={'95%'}/>
            <Star top={'25%'} right={'33%'}/>
            <Star top={'55%'} right={'3%'}/>
            <Star top={'65%'} right={'45%'}/>
            <Star top={'88%'} right={'29%'}/>
            <Star top={'88%'} right={'89%'}/>
            <Star top={'18%'} right={'78%'}/>
            <Star top={'38%'} right={'65%'}/>
            <Star top={'55%'} right={'70%'}/>
            <Star top={'45%'} right={'55%'}/>
            <Star top={'45%'} right={'98%'}/>
            <Star top={'55%'} right={'82%'}/>
            <Star top={'69%'} right={'63%'}/>
            <Star top={'75%'} right={'73%'}/>
            <Sun/>
            <Astronaut/>
            <div className="d-flex flex-column align-items-start justify-content-start justify-content-md-center px-5 text-center vh-100 w-100 text-dark not__found__page-head">
                <div className="fw-bold" >404</div>
                <div className="fw-bold fs-1">NOT FOUND</div>
                <div>It looks like dev is sleeping</div>
                <Button variant={'primary'} className="mt-5" onClick={() => router.push('/')}>Go Home</Button>
            </div>
        </div>
    </>)
}

export default Custom404Page;