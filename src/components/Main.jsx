import scrollToTopAfterClick from '../functions/scrollToTopAfterClick';
import MainFirstSection from './MainFirstSection';
import MainSecondSection from './MainSecondSection';
import MainThirdSection from './MainThirdSection';

const Main = (props) => {

    return (
        <>
            <MainFirstSection doAddUrl={props.doAddUrl} scrollToTopAfterClick={scrollToTopAfterClick} />
            <MainSecondSection />
            <MainThirdSection />
        </>
    )
}

export default Main;
