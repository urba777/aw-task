import { Link } from 'react-router-dom';
import coffeeCup from '../assets/alexandra-gorn-VBo24-Ys6gQ-unsplash 1 1.jpg';

const MainFirstSection = (props) => {

    return(
        <div className="firstSection">
                <div className="firstSectionLeftSide">
                    <h1>WELCOME</h1>
                    <div className="separator"></div>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis
                        nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                    <div className="buttonFlex">
                        <div></div>
                        <Link to="/welcome">
                            <button onClick={() => {props.scrollToTopAfterClick(); props.doAddUrl("/welcome")}}>LEARN MORE</button>
                        </Link>
                    </div>
                </div>
                <div className='firstSectionRightSide'>
                    <img src={coffeeCup} alt='Coffee Cup'></img>
                    <div className="firstSectionRightSideText">
                        <h1>UI/UX DESIGN</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className='spaceBetweenParagraphs'></div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>
    )
}

export default MainFirstSection;