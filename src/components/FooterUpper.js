import FooterInformationBox from './FooterInformationBox';
import FooterContactBox from './FooterContactBox';

function FooterUpper() {
        return (
                <div className="footer_upper">
                        <FooterContactBox />
                        <FooterInformationBox />
                </div>
        );
}

export default FooterUpper;
