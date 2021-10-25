import { Link } from 'react-router-dom';
import scrollToTopAfterClick from '../functions/scrollToTopAfterClick';

const PageFooter = (props) => {

    return (
        <div className="footerWrapper">
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
            </p>
            <div className="footerRightSide">
                <div className='footerButtons'>
                    <div>
                        <Link to='/'>
                            <span onClick={() => {scrollToTopAfterClick(); props.doAddUrl('/')}}>HOME</span>
                        </Link>
                    </div>
                    <div>
                        <Link to='/service'>
                            <span onClick={() => {scrollToTopAfterClick(); props.doAddUrl('/service')}}>SERVICE</span>
                        </Link>
                    </div>
                    <div>
                        <Link to='/works'>
                            <span onClick={() => {scrollToTopAfterClick(); props.doAddUrl('/works')}}>WORKS</span>
                        </Link>
                    </div>
                    <div>
                        <Link to='/about-me'>
                            <span onClick={() => {scrollToTopAfterClick(); props.doAddUrl('/about-me')}}>ABOUT ME</span>
                        </Link>
                    </div>
                    <div>
                        <Link to='/contact'>
                            <span onClick={() => {scrollToTopAfterClick(); props.doAddUrl('/contact')}}>CONTACT</span>
                        </Link>
                    </div>
                </div>
                <div className='allRightsReserved'>&copy; <b>DEMO</b>SITE All rights reserved</div>
            </div>
        </div>
    )
}

export default PageFooter;